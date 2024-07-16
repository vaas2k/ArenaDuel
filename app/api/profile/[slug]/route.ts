import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET( request: Request,{ params }: { params: { slug: string } } ) {
  const { slug } = params;


  try{
    const user = await prisma.user.findFirst({
      where :{
        id : slug
      },
      select : {
        email : true ,
        image : true ,
        id : true ,
        username : true ,
        name : true , 
        rating : true 
      }
    })

    if(user){
      const userinfo = await prisma.userInfo.findFirst({
        where : {userID : user.id}
      })
      const data = {
        ...user,
        ...userinfo
      }
      return new Response(JSON.stringify({
        data : data,
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