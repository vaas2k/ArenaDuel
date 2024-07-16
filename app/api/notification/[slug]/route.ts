import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET( request: Request,{ params }: { params: { slug: string } } ) {
    const { slug } = params;
    console.log(slug);
    try{
        const notis = await prisma.notifications.findMany({
          where : {userID : slug}  
        })

        console.log(notis);

        return new Response(JSON.stringify(
            {
                data : notis,
                status : 200
            }
        ))

    }catch(error){
        console.log(error);
        return new Response(JSON.stringify({
            msg : 'Internal Server Error',
            status : 500
        }))
    }
}