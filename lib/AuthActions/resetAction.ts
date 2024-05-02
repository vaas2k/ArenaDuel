'use server'

import { connectToDatabase } from "../database/database";
import verify_token from "../database/model/verification_token";
import User from "../database/model/user";
import mailgun from 'mailgun-js'
import * as bcrypt from 'bcryptjs';



const DOMAIN = process.env.DOMAIN;
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY!, domain: DOMAIN! });

export async function verifyEmail_sendCode (email : string ) {
    if(!email){return null;}
    
    try{
        await connectToDatabase();
        
        // verify user email address
        console.log(email);
        const user = await User.findOne({email : email});
        if(!user) {
            return null;
        }

        // generate a six digit pin code
        const token = (Math.floor(100000 + Math.random() * 900000));
        const reset_Token = new verify_token({
            userID : user._id,
            token : token
        })

        await reset_Token.save();

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
        return JSON.parse(JSON.stringify(user._id));
    }catch(error){
        console.log(error);
    }
}

export async function verify_PinCode (token :number,userID : string ) { 

    try{

        await connectToDatabase();
        const passwordResetToken = await verify_token.findOne({
            userID : userID,
            token: token,
            createdAt: { $gt: new Date(Date.now() - 1000 * 60 * 60 * 1) },
            resetAt: null,
          });
        if(!passwordResetToken){
            console.log(3);
            return null;
        }  
        return true;
    }catch(error){
        console.log(error);
    }
}

export async function newPassword(user: any) {
  try {
    await connectToDatabase();

    const hashed_password = await bcrypt.hash(user.password!, 10);
    console.log(hashed_password);

    const updated_Password = await User.findOneAndUpdate(
      {
        email: user.email!,
      },
      {
        password: hashed_password,
      },
      { new: true }
    );

    console.log(updated_Password);
    if(!updated_Password){ return null; }
    return true;
  } catch (error) {
    console.log(error);
  }
}
