'use client'
import Searchingmatch from '@/components/Dashboard/Searchingmatch';
import { Dashboard_Comp } from '@/components/Dashboard/dash-board';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import getUser from '@/lib/UserActions/getUser';
import { useSession } from 'next-auth/react';
import { findMatch } from '@/BACKEND_CALLs/apis';

const Dashoard = () => {

  const {data : session , status} = useSession();
  const router = useRouter();
  const [mode, setMode] = useState<any>({
    type: '',
    rated: false,
    player_id : 222
  })
  async function finding_match() {
    // get user id   
    const user = await getUser(session?.user?.email);
      
      //send user to put him in waiting queue for match
      const req = await findMatch(user)

      setTimeout(()=>{
        console.log(user);
        setMode({mode : '',rated : mode.rated});
      },3000)
    return null;
  }

  function handleMode(mode: any) {
    setMode(mode);
  }

  
  if(mode.type === '1v1'){
    finding_match();
  }
  else if(mode.type == 'marathon') {
    // do some thing
  }
  else{
    // do some thing (DAILY);
  }

  return (
    <div className="relative min-h-screen">
      <Dashboard_Comp mode={mode} handleMode={handleMode} />
      {mode.type === '1v1' && (
        <div className="fixed bottom-6 left-0 right-0 flex items-center justify-center">
          <Searchingmatch mode={mode} handleMode={handleMode} />
        </div>
      )}
    </div>
  )
}

export default Dashoard;
