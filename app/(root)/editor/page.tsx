import React from 'react'
import CodeEditor from '@/components/EditorComps/Editor';
import OptionBar from '@/components/EditorComps/OptionBar';
import Question from '@/components/EditorComps/Question';

const Page = () => {
  return (
    <div className='flex flex-col p-[20px]'>
      <OptionBar />
      <div className='flex sm:flex-row  flex-col items-center justify-center gap-[50px]'>
        <Question />
        <CodeEditor />
      </div>
    </div>
  )
}

export default Page;