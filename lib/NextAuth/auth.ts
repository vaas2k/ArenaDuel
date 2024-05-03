import { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import * as bcrypt from 'bcryptjs'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const authConfig: NextAuthOptions = {
    providers : [
        Credentials({
            name : 'Sign in',
            credentials:{
                username:{
                    label :'Username',
                    type : 'text',
                    placeholder:'username'
                },
                email : {
                    label:'Email',
                    type :'email',
                    placeholder: 'Enter Your Email'
                },
                password:{label:'Password',type:'password'}
            },
            async authorize(credentials){

                console.log(credentials);
                if(!credentials || !credentials.email || !credentials.password) {
                    return null;
                }
                
                try{
                    
                    console.log('Check for user ')
                    const user = await prisma.user.findFirst({
                        where: { email: credentials.email },
                      });
                    console.log('Done Checking')

                    if(!user){return null;}
                    const decryptPassword = bcrypt.compareSync(credentials.password,user.password);
                    console.log(decryptPassword);
                    console.log(user);
                    
                    if(user && decryptPassword === false){
                        return null
                    }
                    else if(!user){
                        return null;
                    }
                    return user;

                }catch(error){
                    console.log(error)
                    return null
                }

            },
        }),
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID! as string,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET! as string,
        }),
    ],
    callbacks : {
        async signIn({account, profile,user}) {
            //if custom sign in then return user from authorize func
            if(account?.provider === 'credentials'){
                return user;
            }
            else if (account?.provider !== 'credentials' && profile?.email) {
                try {
                    
                    const is_user = await prisma.user.findFirst({
                       where :{email : profile.email}}
                    );
                    
                    if(is_user && is_user.OAuth_ID){
                        return is_user;
                    }
                    // if user signedup manually then add providers data to theri profile
                    else if(is_user && !is_user.OAuth_ID){
                        console.log('enter update')
                        const updatedUser = await prisma.user.update({
                            where: { email: profile.email },
                            data: {
                              image:   profile?.picture || "default-image.png",
                              name:    profile.name,
                              OAuth_ID: account?.providerAccountId,
                              verified: true,
                            },
                          });
                        console.log('updated User');
                        console.log(updatedUser);
                        return updatedUser;
                    }
                    else{
                        const newUser = await prisma.user.create({
                          data: {
                            image: profile?.picture! || "default-image.png",
                            email: profile.email,
                            username: profile.name!,
                            OAuth_ID: account!.providerAccountId, // Assuming OAuth_ID is a property
                            verified: true,
                          },
                        });
                        console.log(newUser)
                        return newUser;
                    }
                    
                } catch (error) {
                    return null; 
                }
            }
            else{
                return null;
            }
        },   
    }
    
}

export default authConfig;
