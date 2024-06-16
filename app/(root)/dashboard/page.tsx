"use client";
import Searchingmatch from "@/components/Dashboard/Searchingmatch";
import { Dashboard_Comp } from "@/components/Dashboard/dash-board";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import getUser from "@/lib/UserActions/getUser";
import { useSession } from "next-auth/react";
import { queue_player } from "@/BACKEND_CALLs/apis";
import useSocket from "@/lib/Sockets/useSocket";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const socket = useSocket();
  const [mode, setMode] = useState({
    type: "",
    rated: false,
    id: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  function handleMode(newMode : any) {
    setMode(newMode);
    if (newMode.type === "") {
      setIsLoading(false);
    }
  }

  async function finding_match() {
    setIsLoading(true);
    const user = await getUser(session?.user?.email);
    setMode({ ...mode, id: user.id });

    const data = {
      type: mode.type,
      rated: false,
      id: user.id
    };

    console.log(data);
    
    socket.emit('nigga',data);

    // Send user to put him in waiting queue for match
    const req = await queue_player(data);
    console.log(req);
    // Remove isLoading=false here since you want to keep the loading state until cancel or match found
  }

  useEffect(() => {
    if (mode.type === "1v1") {
      finding_match();
    } else if (mode.type === "marathon") {
      // Do something
    } else {
      // Do something (DAILY);
    }
  }, [mode.type]);

  return (
    <div className="relative min-h-screen">
      <Dashboard_Comp mode={mode} handleMode={handleMode} />
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Searchingmatch mode={mode} handleMode={handleMode} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
