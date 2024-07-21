"use client";
import React, { useEffect, useState } from "react";
import {
  OptionBar,
  OptionBarMarathon,
} from "@/components/Editorcomponent/OptionBar";
import Problem_Editor from "@/components/Editorcomponent/problem-editor";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { getUserData } from "@/lib/userActions/getUserData";
import useSocket from "@/lib/Sockets/useSocket";
import { Button, Text } from "@radix-ui/themes";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setOpponent } from "@/storeRedux/reducers/opponentReducer";

const Page = ({ params }: any) => {
  const param = params.id;

  const dispatch = useDispatch();
  const socket = useSocket();
  const matchInfo = useSelector((state: any) => { return state.matchReducer; });
  const marathonMatchData = useSelector((state : any) => { return state.marathonReducer})
  const testCases = useSelector((state : any) => {return  state.testCasesReducer} );
  const player2 = useSelector((state : any) => {return state.opponentReducer});
  const [P2PassedCases, setPassedCases] = useState(0);
  const { data: session, status } = useSession();


  const [ marathonCard , setShowMarathonCard ] = useState(false);
  function handleMarathonCard(flag : boolean) {
    setShowMarathonCard(flag);
  }

  const [ code , setCode ] = useState('');
  function handleCode (code : string ) { 
    setCode(code);
  }
  console.log(player2);
  useEffect(() => {
    // get Player2 Data when Match is Found and Started
    async function getP2Data() {
      try {
        const req = await getUserData(matchInfo.p2);
        if (req) {
          dispatch(setOpponent(req));
        }
      } catch (error) {
        console.log(error);
      }
    }    
    param == 'marathon' ? null : getP2Data();

  }, []);


  // for 1v1 real time test cases updates
  useEffect(() => {
    socket.on(`${matchInfo.room_id}`, (data) => {
      console.log('Recieving Cases');
      // @ts-ignore
      data.userid != session?.user.id
        ? setPassedCases(data.testCasesPassed)
        : null;
    });
  }, []);
  useEffect(()=>{
    // Execute When a player run code and get result
    // send the result along with match room_id
    // room_id is same for p1 and p2 
    // so its used to create socket where both players can send test cases in real time 
    function test() {
      const obj = {
        room_id: matchInfo.room_id, // match room id
        // @ts-ignore
        userid: session?.user!.id, // the current userid
        testCasesPassed: testCases && testCases.passed, // along with test cases passed
      };
      console.log('Sending Cases');
      socket.emit("match_start", obj);
    }

    if(testCases && testCases.passed > 0) {test();}
   
  },[testCases])


  // which option bar to show based on mode type 
  const renderOptionsBar = () => {
    if (param !== "marathon" && param !== "daily") {
      return (
        <>
          {player2 && session?.user && (
            <OptionBar
              player2={player2}
              matchInfo={matchInfo}
              P2PassedCases={P2PassedCases}
              currentplayer={session?.user}
              code={code}
              handleCode={handleCode}
            />
          )}
        </>
      );
    } else if (param == "marathon") {
      return (
        <>
          {session?.user && 
          <OptionBarMarathon 
          currentplayer={session?.user}
          marathonCard={marathonCard}
          handleMarathonCard={handleMarathonCard}
           />}
        </>
      );
    } else {
      return <>Dailything</>;
    }
  };

  return (
    <div className="flex flex-col p-[20px] max-h-[600px]">
    {!marathonMatchData.id && !matchInfo.id ? 
    <div className="flex flex-col items-center justify-center h-screen gap-[20px]">
      <Text color='ruby'>No Data Found!</Text>
      <Link href={'/dashboard'}>
      <Button variant={'outline'} size={'4'} style={{cursor:'pointer'}} color={'ruby'}>
        Go Home
      </Button>
      </Link>
    </div>
    :
    (
    <>{renderOptionsBar()}
    <div className="flex sm:flex-row  flex-col items-center justify-center gap-[50px] ">
      <Problem_Editor 
      //@ts-ignore
      currentplayer={session?.user}
      code={code}
      handleCode={handleCode}
      marathonCard={marathonCard}
      />
    </div></>
    )

    }
     
    </div>
  );
};

export default Page;
