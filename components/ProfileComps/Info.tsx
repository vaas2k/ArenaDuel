"use client";
import { Badge, Button } from "@radix-ui/themes";
import axios from "axios";
import { Sparkle } from "lucide-react";
import { useSession } from "next-auth/react";
import { Rubik } from "next/font/google";
import React, { useState } from "react";

const rubik = Rubik({ subsets: ["latin"] });

const Info = ({ user , open , handleSettings, email } : any) => {
  const {data : session , status } = useSession();
  const [currentuser, setCurrentUser] = useState<boolean>(session?.user?.email == user.email);
  const [ loading , setLoading ] = useState(false);


  async function sentFriendReq () {
    setLoading(true);
    try{
      const data = {
        sender_name: session?.user?.name,
        sender_email: session?.user?.email,
        sender_image: session?.user?.image,
        email : email
      };
      const req = await axios.post('/api/friends/addfriend',data);
      if(req.data.status === 200) {
        console.log('Friend Request Sent');
        setLoading(false);
      }
      else{
        console.log('internal server error');
        setLoading(false);
      }

    }catch(error){
      console.log(error);
      setLoading(false);
    }
  }


  return (
    <div className={`${rubik.className} p-[20px]`}>
      <div className="flex flex-col ">
        <h1 className="font-bold text-2xl">{ user.name ? user.name : user.username}</h1>
        <h1 className="opacity-[35%]">{user.name && user.username}</h1>
        <h1 className="opacity-[50%]">{user.role &&  user.role}</h1>
        <h1 className="opacity-[50%]"> {user.address && user.address}</h1>
      </div>

      <div className="py-[15px] flex  flex-col sm:flex-row sm:items-center justify-between gap-[20px]">
      
       {/**if current user  */}
        <div className="flex flex-row gap-[20px]">
          {currentuser ? (
            <>
              <Button onClick={()=>handleSettings(open)}>Edit Profile</Button>
            </>
          ) : (
            <>
              <Button onClick={sentFriendReq} loading={loading}>Add Buddie</Button>
              <Button variant="outline" >Release Buddie</Button>
            </>
          )}   
        </div>

        {/**User Skills */}
        <div className="flex flex-row flex-wrap gap-[10px] order-first">
          { user.skills && user.skills.map((item : string ) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </div>
      <div className="py-[30px]"> 
       <hr/>
      </div>
    </div>
  );
};

export default Info;
