'use client'
import { Dashboard_Comp } from '@/components/Dashboard/dash-board';
import React, { useState } from 'react'

const Dashoard = () => {

  const [ mode , setMode ] = useState<any>({
    type : '',
    rated : false

  })

  console.log(mode);
  function handleMode (mode : any) {
    setMode(mode);
  }
  return (
    <div>
      <Dashboard_Comp mode={mode} handleMode={handleMode}  />
    </div>
  )
}

export default Dashoard;