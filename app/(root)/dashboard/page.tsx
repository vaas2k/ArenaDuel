'use client'
import Searchingmatch from '@/components/Dashboard/Searchingmatch';
import { Dashboard_Comp } from '@/components/Dashboard/dash-board';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

const Dashoard = () => {

  const router = useRouter();
  const [mode, setMode] = useState<any>({
    type: '',
    rated: false,
  })
  async function finding_match() {
      setTimeout(()=>{
        router.push('/editor');
        setMode({mode : '',rated : mode.rated});
      },3000)
    return null;
  }

  console.log(mode);
  function handleMode(mode: any) {
    setMode(mode);
  }

  
  if(mode.type === '1v1'){
    finding_match();
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
