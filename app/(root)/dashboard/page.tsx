"use client";
import Searchingmatch from "@/components/Dashboard/Searchingmatch";
import { Dashboard_Comp } from "@/components/Dashboard/dash-board";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { marathonMatch, queue_player } from "@/BACKEND_CALLs/apis";
import { remMatchData } from "@/storeRedux/reducers/matchReducer";
import { useDispatch } from "react-redux";
import { emptyTestCases } from "@/storeRedux/reducers/testCasesReducer";
import { remMaradata, setMaraData } from "@/storeRedux/reducers/marathonReducer";
import { useRouter } from "next/navigation";
import { closeCard } from "@/storeRedux/reducers/winCard";
import { Loader2 } from "@/components/shared/Loader";


const Dashboard = () => {
  const { data: session, status } = useSession();
  const [mode, setMode] = useState({ type: "", rating: "" });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(remMatchData());
    dispatch(emptyTestCases());
    dispatch(remMaradata());
  }, []);


  function handleMode(newMode: any) {
    setMode(newMode);
    if (newMode.type === "") {
      setIsLoading(false);
    }
  }

  // send player for matching in mode 1v1
  async function finding_match_for_1v1() {
    setIsLoading(true);
    dispatch(remMatchData());
    dispatch(emptyTestCases());
    dispatch(remMaradata());
    dispatch(closeCard());
    try {
      const data = {
        type: mode.type, // Use newMode instead of mode
        rating: mode.rating,
        // @ts-ignore
        id: session?.user!.id,
      };
      console.log(data);
      // Send user to put him in waiting queue for match
      const req: any = await queue_player(data);
      if (req.status === 200) {
        console.log("Player Queued");
      }
    } catch (error) {
      console.log(error);
    }
  }

  // for marathon mode
  const marathon = async () => {
    try {
      const data = {
        type: "marathon", //@ts-ignore
        id: session?.user.id,
      };
      
      const req = await marathonMatch(data);
      
      if(req.status == 200) {
        console.log(req.data);
        dispatch(setMaraData(req.data));
        router.push(`/editor/marathon`);
      }
    } catch (error) {
      console.log(error);
    }
  };
    
    useEffect(() => {
    if (mode.type === "1v1") {
      finding_match_for_1v1();
    } else if (mode.type === "marathon") {
      marathon();
    } else {
      // Do Something (DAILY);
    }
  }, [mode.type]);

  if(status == 'loading') {
    return <div className="flex items-center justify-center h-screen">
      <Loader2 />
    </div>
  }

  return (
    <div className="relative min-h-screen">
      <Dashboard_Comp 
      mode={mode} handleMode={handleMode} 
      // @ts-ignore
      rating={session?.user.rating} />
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Searchingmatch 
          mode={mode} handleMode={handleMode}
          // @ts-ignore
          rating={session?.user.rating}
          // @ts-ignore
          currentuser={session?.user!.id} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
