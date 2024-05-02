'use server'

import { signup } from "@/types/types";
import { connectToDatabase } from "../database/database";
import User from "../database/model/user";
import * as bcrypt from 'bcryptjs';
import user from "../database/model/user";
import verify_token from "../database/model/verification_token";


export async function registerUser(user:signup) {

    try{
        await connectToDatabase();

        const email = await User.findOne({email : user.email});
        if(email){
            return 'email taken';
        }
        const username = await User.findOne({username : user.username});
        if(username){
            return 'username taken';
        }

        const hashed_password = await bcrypt.hash(user.password!,10);
        console.log(hashed_password);
        const newuser = new User({
            name : user.name,
            username : user.username,
            email : user.email,
            password : hashed_password
        })

        await newuser.save();
        return JSON.stringify(newuser);
        
    }catch(error){
        console.log(error);
    }
}


// for email verification when needed
/*
export async function verifyEmail(user:signup) {

    try{
        await connectToDatabase();

        const email = await User.findOne({email : user.email});
        if(email){
            return 'email taken';
        }
        const username = await User.findOne({username : user.username});
        if(username){
            return 'username taken';
        }

        const token = (Math.floor(100000 + Math.random() * 900000));
        const Token = new verify_token({
            user_email : user.email,
            token : token
        })

        await Token.save();

        // send that pin code at user email address
        const emailData = {
        from: 'gyikxx2@gmail.com',
        to: email,
        subject: 'Password Reset Code',
        text: `Hello ${user.name || user.username}, someone (hopefully you) requested a password reset for this account. 
        If you did want to reset your password, 
        
        
        ---- Heres the Pin Code : ${token} --- 
        
        
        For security reasons, this pin is only valid for 1 hours.
        If you did not request this reset, please ignore this email.`,
        };
        // Send the email
       mg.messages().send(emailData, (error, body) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent successfully:', body);
        }
       });

       return true;
        
    }catch(error){
        console.log(error);
    }
}

export async function verifyToken (token : string, email : string ) {
    try{
        await connectToDatabase();
        const Token = await verify_token.findOne({
            user_email : email,
            token: token,
            createdAt: { $gt: new Date(Date.now() - 1000 * 60 * 60 * 1) },
            resetAt: null,
          });
        if(!Token){
            return null;
        }  
        return true;
    }catch(error){
        console.log(error);
    }
}

export async function saveUser ( user : signup ){
    try{
        await connectToDatabase();


        const hashed_password = bcrypt.hash(user.password!,10);
        const newuser = new User({
            name : user.name ,
            username : user.username,
            email : user.email,
            password : hashed_password
        })
        await newuser.save();

    }
    catch(error){
        console.log(error);
    }
}
*/