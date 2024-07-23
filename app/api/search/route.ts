import { prisma } from "@/utils/prisma";

export async function POST(req: Request, res: Response) {
    const { param, len } = await req.json();
    try {
        const users = await prisma.user.findMany({
            take: 6, // Limit to 6 users per request
            skip: len, // Skip from what I already have on the frontend based on the length of that array in the frontend
            where: {
                name: {
                    contains: param,
                    mode: 'insensitive'
                }
            },
            select: {
                id: true,
                name: true,
                username: true,
                email: true,
                image : true,
                UserInfo: {
                    select : {
                        role : true,
                        skills : true
                    }
                } // Include userInfo for each user
            }
        });

        return new Response(JSON.stringify({ users: users, status: 200 }));
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ msg: "Error fetching users", status: 500 }));
    }
}
