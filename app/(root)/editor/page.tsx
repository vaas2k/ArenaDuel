import React from 'react'
import OptionBar from '@/components/component/OptionBar';
import  Problem_Editor from '@/components/component/problem-editor';

const Page = () => {
  return (
    <div className='flex flex-col p-[20px] max-h-[600px]' >
      <OptionBar />
      <div className='flex sm:flex-row  flex-col items-center justify-center gap-[50px] '>
        <Problem_Editor />
      </div>
    </div>
  )
}

export default Page;