

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET( request: Request,{ params }: { params: { slug: string } } ) {
  const { slug } = params;
  const keyword = slug;

  try{

    console.log(keyword);
      return new Response(JSON.stringify({
        msg : keyword,
        status : 200
      }))

  }catch(error){
    console.log(error);
  }

  return new Response(JSON.stringify({
    msg : 'User Not Found',
    status : 401
  }))

}