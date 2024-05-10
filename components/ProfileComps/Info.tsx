"use client";
import { Badge, Button } from "@radix-ui/themes";
import { Sparkle } from "lucide-react";
import { Rubik } from "next/font/google";
import React, { useState } from "react";

const rubik = Rubik({ subsets: ["latin"] });

const Info = ({ name, username } : any) => {
  const [currentuser, setCurrentUser] = useState(true);

  const skills = ["NEXT", "C++", "TypeScript", "Python", "Nginx"];

  return (
    <div className={`${rubik.className} p-[20px]`}>
      <div className="flex flex-col ">
        <h1 className="font-bold text-2xl">{ name ? name : username}</h1>
        <h1 className="opacity-[35%]">{name && username}</h1>
        <h1 className="opacity-[50%]">Software Engineer</h1>
        <h1 className="opacity-[50%]"> Bay , New-York</h1>
      </div>

      <div className="py-[15px] flex  flex-col sm:flex-row sm:items-center justify-between gap-[20px]">
      
       {/**if current user  */}
        <div className="flex flex-row gap-[20px]">
          {currentuser ? (
            <>
              <Button>Edit Profile</Button>
              <Button variant="outline">Settings</Button>
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
          {skills.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Info;
