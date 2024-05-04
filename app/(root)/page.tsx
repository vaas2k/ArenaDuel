'use client'
import { Button } from "@radix-ui/themes";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {

  const {data : session , status} = useSession();
  const [user , setUser] = useState<any>({})

  console.log(status)
  useEffect(()=>{
    setUser(session?.user);
  },[session,status])


  return (
   <div className="flex items-center justify-center min-h-screen">
       Landing Page
   </div>
  );
}
