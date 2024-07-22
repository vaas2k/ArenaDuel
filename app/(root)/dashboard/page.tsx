"use client";
// Hooks Import 
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// Components Imports 
const Searchingmatch = dynamic(() => import('@/components/Dashboard/Searchingmatch'), { ssr: false });
const Dashboard_Comp = dynamic(() => import('@/components/Dashboard/dash-board'), { ssr: false });
const ProtectedRoute = dynamic(() => import('@/components/Protected/ProtectedRoute'), { ssr: false });

// Reducers/Apis
import { marathonMatch, queue_player } from "@/BACKEND_CALLs/apis";
import { remMatchData } from "@/storeRedux/reducers/matchReducer";
import { emptyTestCases } from "@/storeRedux/reducers/testCasesReducer";
import { remMaradata, setMaraData } from "@/storeRedux/reducers/marathonReducer";
import { closeCard } from "@/storeRedux/reducers/winCard";
import { emptyOpponent } from "@/storeRedux/reducers/opponentReducer";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const [mode, setMode] = useState({ type: "", rating: 0 });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(remMatchData());
    dispatch(emptyTestCases());
    dispatch(remMaradata());
    dispatch(closeCard());
    dispatch(emptyOpponent());
  }, []);

  function handleMode(newMode: any) {
    setMode(newMode);
    setIsLoading(false);
  }

  // send player for matching in mode 1v1
  async function finding_match_for_1v1() {
    setIsLoading(true);
    dispatch(remMatchData());
    dispatch(emptyTestCases());
    dispatch(remMaradata());
    dispatch(closeCard());
    dispatch(emptyOpponent());

    try {
      const data: { type: string, rating: number, id: string } = {
        type: mode.type, // Use newMode instead of mode
        rating: mode.rating,
        // @ts-ignore
        id: session?.user!.id,
      };
      // Send user to put him in waiting queue for match
      const req: any = await queue_player(data);
      console.log('Data sent to backend');
      if (req.status === 200) {
        console.log("Player Queued");
      }
    } catch (error: any) {
      if (error.response.data) {
        console.log(error.response.data.error);
      }
    }
  }

  // for marathon mode
  const marathon = async () => {
    try {
      const data: { type: string, id: string } = {
        type: "marathon", //@ts-ignore
        id: session?.user.id,
      };

      const req: any = await marathonMatch(data);

      if (req.status == 200) {
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


  return (
    <ProtectedRoute>
      <div className="relative min-h-screen">

        <Dashboard_Comp
          mode={mode}
          handleMode={handleMode}
          // @ts-ignore
          rating={session?.user.rating}
          />
        {isLoading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Searchingmatch
              mode={mode}
              handleMode={handleMode}
              // @ts-ignore
              rating={session?.user.rating}
              // @ts-ignore
              currentuser={session?.user!.id}
              />
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
