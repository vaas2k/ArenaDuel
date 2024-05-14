"use client";
import { Badge, Button } from "@radix-ui/themes";
import { Sparkle } from "lucide-react";
import { useSession } from "next-auth/react";
import { Rubik } from "next/font/google";
import React, { useState } from "react";

const rubik = Rubik({ subsets: ["latin"] });

const Info = ({ user , open , handleSettings } : any) => {
  const {data : session , status } = useSession();
  const [currentuser, setCurrentUser] = useState<boolean>(session?.user?.email == user.email);
  
  


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
              <Button>Add Buddie</Button>
              <Button variant="outline">Release Buddie</Button>
            </>
          )}
        </div>

        {/**User Skills */}
        <div className="flex flex-row wrap gap-[10px] order-first">
          { user.skills && user.skills.map((item : string ) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Info;
