'use server'
import mailgun from 'mailgun-js'
import * as bcrypt from 'bcryptjs';
import { prisma } from "@/utils/prisma";


const DOMAIN = process.env.DOMAIN;
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY!, domain: DOMAIN! });

export async function verifyEmail_sendCode (email : string ) {
    if(!email){return null;}
    
    try{
        
        
        // verify user email address
        console.log(email);
        const user = await prisma.user.findFirst({
          where : {email : email}
        })
        if(!user) {
            return null;
        }

        // generate a six digit pin code
        const token = (Math.floor(100000 + Math.random() * 900000));
        await prisma.token.create({
          data : {
            userID : user.id,
            token : token
          }
        });

        console.log(user.id);
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
        // return that pin code
        return JSON.parse(JSON.stringify(user.id));
    }catch(error){
        console.log(error);
    }
}

export async function verify_PinCode (token : string, userID : string ) { 

    try{
      console.log(1);
      const parsedToken = parseInt(token, 10);
      const passwordResetToken = await prisma.token.findFirst({
        where: {
          userID : userID,
          token : parsedToken,
          createdAt: { gt: new Date(Date.now() - 60 * 60 * 1000) }, // Use milliseconds for clarity
        },
      });
        if(!passwordResetToken){
            console.log(2);
            return null;
        }  
        return true;
    }catch(error){
        console.log(error);
    }
}

export async function newPassword({email , password,confirm_password} :{email:string ,password:string,confirm_password:string}) {
  try {
    

    const hashed_password = await bcrypt.hash(password!, 10);
    console.log(hashed_password);


    const updated_Password = await prisma.user.update({
      where : {email : email},
      data : {
        password : hashed_password
      }
    });

    console.log(updated_Password);
    if(!updated_Password){ return null; }
    return true;
  } catch (error) {
    console.log(error);
  }
}
