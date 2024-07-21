import NodeCache from 'node-cache';
import { prisma } from '@/utils/prisma';

const myCache = new NodeCache();

export async function GET(request: Request, { params }: { params: { slug: string } }) {
    const user = params.slug;
    const userid = user.slice(0, 24); // id always the same length
    const username = user.slice(24, user.length);

    const cacheKey = `${userid}:stats`;
    const cachedData = myCache.get(cacheKey);
    
    if (cachedData) {
        console.log('Returning cached data:', cachedData);
        return new Response(JSON.stringify({
            data: cachedData,
            status: 200
        }));
    }

    try {
        const matchs = await prisma.match.findMany({
            where: {
                OR: [
                    { p1: userid },
                    { p2: userid }
                ]
            },
            select: {
                winner: true,
                loser: true
            }
        });

        let wins = 0, losses = 0, draws = 0;

        matchs.forEach((match : any) => {
            if (match.winner === null) {
                return;
            }
            // @ts-ignore
            if (match.winner.username && match.winner.username === username) {
                wins++;
            }
            // @ts-ignore
            else if (match.loser.username && match.loser.username === username) {
                losses++;
            } else if (match.winner === 'draw') {
                draws++;
            }
        });

        const data = {
            total: matchs.length,
            wins: wins,
            losses: losses,
            draws: draws
        };

        console.log('Setting cache for key:', cacheKey, 'with TTL 5 seconds');

        myCache.set(cacheKey, data, 80);

        return new Response(JSON.stringify({
            data: data,
            status: 200
        }));
    } catch (error) {
        console.error('Error fetching match data:', error);
        return new Response(JSON.stringify({
            error: 'Internal Server Error',
            status: 500
        }), { status: 500 });
    }
}
