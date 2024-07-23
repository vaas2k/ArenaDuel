import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@/utils/prisma";
export async function POST(req : Request , res : Response) {
    

    const {name , username , level , role , address , email ,skills } = await req.json();
    try{
        const user = await prisma.user.findFirst({where : { email : email } })
        if(!user){return new Response(JSON.stringify({msg : 'USER_NOT_FOUND', status : 403}))};


        try{

            if(name || username ) {
                
                if(username){
                    const usernameCheck = await prisma.user.findFirst({where : {username : username}});
                    if(usernameCheck){return new Response(JSON.stringify({msg : 'USERNAME_TAKEN',status:403}))};
                }
                await prisma.user.update({
                    where : {email : email},
                    data : {
                        name : name ? name : user.name ,
                        username : username ? username : user.username
                    }
                })
            }
        }catch(error){
            console.log(error);
        }

        try{

            const userinfo = await prisma.userInfo.findFirst({
              where: { userID: user!.id },
            });
            if (!userinfo) {
              await prisma.userInfo.create({
                data: {
                  address: address ? address : "",
                  role: role ? role : "",
                  skills: skills,
                  level: level,
                  userID : user.id
                },
              });
            }
            else {
                await prisma.userInfo.update({
                    where : { 
                        id : userinfo.id,
                        userID : user.id
                    },
                    data: {
                      address: address ? address : userinfo.address,
                      role: role ? role : userinfo.role,
                      skills: skills ? skills : userinfo.skills,
                      level: level ? level : userinfo.level,
                    },
                  });
            }

        }catch(error){
            console.log(error);
        }

        return new Response(JSON.stringify({msg : "success", status :  200}));
    }catch(error){
        console.log(error);
        return new Response(JSON.stringify({msg : "internal server error", status :  500}));
    }
}