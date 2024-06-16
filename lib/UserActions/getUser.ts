'use server'
import { PrismaClient } from "@prisma/client";
import NodeCache from "node-cache";

const prisma = new PrismaClient();
const cache = new NodeCache(); 

export default async function getUser(email : any) { 

    try{
        console.log(email);
        const cacheUser = cache.get('email');
        if(cacheUser) {
            console.log('cached user');
            return JSON.parse(JSON.stringify(cacheUser));
        }
        const user = await prisma.user.findFirst({
            select : {
                id : true,
                username : true,
                name : true
            },
            where : {email : email},
            
        })
        cache.set('email',user);

        return JSON.parse(JSON.stringify(user));
    }catch(error) {
        console.log(error);
    }
}