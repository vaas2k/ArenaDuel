'use client'
import React, { useEffect , useState } from 'react'
import OptionBar from '@/components/Editorcomponent/OptionBar';
import  Problem_Editor from '@/components/Editorcomponent/problem-editor';
import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { getUserData } from '@/lib/userActions/getUserData';
import useSocket from '@/lib/Sockets/useSocket';
import { AlertDialog, Button, Flex } from '@radix-ui/themes';

const Page = ({params} : any) => {

  const socket = useSocket();
  const data = useSelector((state : any) => {return state.matchReducer})
  const [player2 , setPlayer2] = useState<any>({});
  const [passed_cases, setPassedCases] = useState(0);
  const {data: session , status } = useSession();

  useEffect(()=>{
    async function getP2Data () { 
      try{
        const req = await getUserData(data.p2);
        if(req) {
          setPlayer2(req);
        }
      }catch(error ) {
        console.log(error);
      }
    }
    getP2Data();
  },[])

  useEffect(()=>{
    socket.on(`${data.room_id}`,(data) => {
      console.log(data);  
      console.log('if');
      console.log(player2);
      // @ts-ignore
      data.username != session?.user.username ? setPassedCases(data.testCasesPassed) : null;
    })

  },[])

  function test ( ) { 
    console.log('Test');
    const obj = { 
      room_id : data.room_id,
      // @ts-ignore
      username : session?.user!.username,
      testCasesPassed : 10
    }
    socket.emit('match_start',obj)
  }

  useEffect(() => {
    const handleBeforeUnload = () => {
      // Make Player 2 the winner
      alert('P2 Wins');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  
  return (
    <div className="flex flex-col p-[20px] max-h-[600px]">
      {player2 && session?.user && (
        <OptionBar
          player2={player2}
          currentplayer={session?.user}
          passed_cases={passed_cases}
        />
      )}
      <div className="flex sm:flex-row  flex-col items-center justify-center gap-[50px] ">
        <Problem_Editor test={test} />
      </div>
    </div>
  );
}

export default Page;