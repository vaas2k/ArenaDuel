'use server'
import { signup } from '@/types/types';
import * as bcrypt from 'bcryptjs'
import { prisma } from "@/utils/prisma";

export async function registerUser(user: signup) {
  try {

    const existingEmail = await prisma.user.findUnique({
      where: { email: user.email },
    });
    if (existingEmail) {
      return 'email taken';
    }
    const existingUsername = await prisma.user.findUnique({
      where: { username: user.username },
    });
    if (existingUsername) {
      return 'username taken';
    }
    const hashedPassword = await bcrypt.hash(user.password!, 10);

    const images = [
      'https://ih1.redbubble.net/image.5292131909.9696/st,small,507x507-pad,600x600,f8f8f8.u4.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY9UtioTmzThP_evrMDUf68-2APS94Wrpc2MRomiIq4sJdl112WJc1eTVrq5TFtZ4vjcY&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr9I4qwckLNigezLEInvLmZoFb4e2GdbF-YZPokOdXWnliT5IBvcOPaXU3GhYXrwlCyEI&usqp=CAU',
    ];

    const index = Math.floor(Math.random() * images.length);

    const newUser = await prisma.user.create({
      data: {
        name: user.name,
        username: user.username!,
        email: user.email!,
        password: hashedPassword,
        image: images[index],
      },
    });
    return newUser; // Return the created user object
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error for proper handling
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