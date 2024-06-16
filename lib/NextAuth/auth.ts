import { Account, NextAuthOptions, User } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import * as bcrypt from 'bcryptjs'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Profile {
    iss: string;
    azp: string;
    aud: string;
    sub: string;
    email: string;
    email_verified: boolean;
    at_hash: string;
    name: string;
    picture: string; // The picture property is a string
    given_name: string;
    family_name: string;
    iat: number;
    exp: number;
  }

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
        async signIn({ account, profile, user }) {
            console.log(profile);
            //if custom sign in then return user from authorize func
            if (account?.provider === 'credentials') {
                return JSON.parse(JSON.stringify(user));
            } else if (account?.provider !== 'credentials' && profile?.email) {
                try {
                    const is_user = await prisma.user.findFirst({
                        where: { email: profile.email }
                    });
        
                    if (is_user && is_user.OAuth_ID) {
                        return JSON.parse(JSON.stringify(is_user));
                    } else if (is_user && !is_user.OAuth_ID) {
                        console.log('enter update')
                        const updatedUser = await prisma.user.update({
                            where: { email: profile.email },
                            data: {
                                // @ts-ignore
                                image: profile?.picture || "default-image.png",
                                name: profile.name,
                                OAuth_ID: account?.providerAccountId,
                                verified: true,
                            },
                        });
                        console.log('updated User');
                        console.log(updatedUser);
                        return JSON.parse(JSON.stringify(updatedUser));
                    } else {
                        const newUser = await prisma.user.create({
                            data: {
                                // @ts-ignore
                                image: (profile && profile.picture!) ? profile.picture! : "default-image.png",
                                email: profile.email,
                                username: profile.name || "", // Assuming username can't be null, you may need to handle this differently
                                OAuth_ID: account!.providerAccountId, // Assuming OAuth_ID is a property
                                verified: true,
                            },
                        });
                        console.log(newUser)
                        return JSON.parse(JSON.stringify(newUser));
                    }
        
                } catch (error) {
                    return false;
                }
            } else {
                return false;
            }
        },   
    }
    
}

export default authConfig;
