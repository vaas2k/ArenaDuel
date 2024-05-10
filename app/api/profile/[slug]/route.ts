import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET( request: Request,{ params }: { params: { slug: string } } ) {
  const { slug } = params;


  try{
    const getUserData = await prisma.user.findFirst({
      where :{
        email : slug
      }
    })

    if(getUserData){
      return new Response(JSON.stringify({
        data : getUserData,
        status : 200
      }))
    }

  }catch(error){
    console.log(error);
  }

  return new Response(JSON.stringify({
    msg : 'User Not Found',
    status : 401
  }))

}