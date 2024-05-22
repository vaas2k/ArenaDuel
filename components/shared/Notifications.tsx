import { Button, Card, Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import { Rubik } from "next/font/google";
import { useSession } from "next-auth/react";
import axios from "axios";
import { Loader2 } from "./Loader";

const rubik = Rubik({ subsets: ["latin"] });

const Notifications = () => {

  const [notifications , setNotifcations] = useState<any>([]);
  const [load , setLoad] = useState(true);
  const [error , setError] = useState('');

  console.log(notifications);
  useEffect(()=>{

    async function getNotis () {
      try{
        
        const user = typeof window !== undefined ? JSON.parse(window.sessionStorage.getItem('user')!) : null;
        const req = await axios.get(`/api/notification/${user.userID}`);
        if(req.data.status === 200) {
          
          console.log("new Notifs");
          setNotifcations(req.data.data);
          setLoad(false);
        }
        else {
          console.log('new Errors');
          setError("Notifications Empty");
          setLoad(false);
        }
        
      }catch(error){
        console.log(error);
      }
    }

    getNotis();

  },[])

  return (
    <div className={`${rubik.className} w-[400px] h-[400px] flex flex-col p-[20px] overflow-scroll`}>
      <div
        style={{ overflow: "scroll" }}
        className="p-[10px] rounded-lg gap-[20x]"
      >
        {notifications && notifications.map((n : any,i : number) => {
          return (
            <div className="flex flex-row items-center gap-[20px] p-[15px] m-[15px] drop-shadow-md rounded-lg dark:bg-neutral-900 bg-neutral-100">
              <img
                src={n.sender_image}
                className=" flex w-[30px] h-[30px] rounded-full"
              />
              <Text size={"2"}>{n.message}</Text>
              {n.message === 'Friend Request' && <Button>Accept</Button>}
            </div>
          );
        })}
        {load && <div className="flex items-center justify-center"><Loader2 /></div>}

      </div>
    </div>
  );
};

export default Notifications;
