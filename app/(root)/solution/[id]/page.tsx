'use client'
import { Editor } from '@monaco-editor/react'
import { Badge, Card } from '@radix-ui/themes'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Rubik } from "next/font/google";
import WinningCard from '@/components/Dashboard/WinningCard'
const rubik = Rubik({ subsets: ["latin"] });

const page = ({params} : any) => {

  const id = params.id
  const [code , setCode] = useState('');
  const [showSolution , setSolution ] = useState(false);

  useEffect(() => {

    (async function () {

      // get solution
      try{

      }catch(error) {
        console.log(error);
      }

     })();

  },[params]);

  return (
    <>
    <WinningCard />
    </>
  )
}

export default page
