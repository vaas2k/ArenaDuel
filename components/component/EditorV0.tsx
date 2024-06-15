'use client'
import React, { useState } from 'react'
import { Button } from "@radix-ui/themes"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { PlayIcon } from "@radix-ui/react-icons"
import { ArrowUp, CheckIcon, ChevronDownIcon, CodeIcon, MaximizeIcon, X } from "lucide-react"
import { Editor } from '@monaco-editor/react'

const EditorV0 = () => {
  const [isTestResultsOpen, setIsTestResultsOpen] = useState(false)
  const [showResult, setShowResults] = useState(false);
  const [lang ,setLang]  = useState('cpp');

  return (
    <div className="h-screen flex flex-col overflow-scroll">
      <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 shadow-sm">
        <div className="flex items-center gap-4">
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2">
                <CodeIcon className="h-5 w-5" />
                <span>{lang}</span>
                <ChevronDownIcon className="h-4 w-4 text-gray-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" sideOffset={8}>
              <DropdownMenuItem onClick={()=>{setLang('javascript')}}>
                <CodeIcon className="mr-2 h-4 w-4" />
                JavaScript
              </DropdownMenuItem>
              <DropdownMenuItem onClick={()=>{setLang('python')}}>
                <CodeIcon className="mr-2 h-4 w-4" />
                Python
              </DropdownMenuItem >
              <DropdownMenuItem onClick={()=>{setLang('java')}}>
                <CodeIcon className="mr-2 h-4 w-4" />
                Java
              </DropdownMenuItem>
              <DropdownMenuItem onClick={()=>{setLang('cpp')}}>
                <CodeIcon className="mr-2 h-4 w-4" />
                C++
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        
          <div className="h-6 w-[1px] bg-gray-200 dark:bg-gray-800" />
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => { setShowResults(true) }}>
            Run
            <PlayIcon className="h-5 w-5" />
          </Button>
          <Button variant="solid" className="bg-blue-500 text-white hover:bg-blue-600">
            Submit
          </Button>
        </div>
      </div>
      
      <div className="flex-1">
        <Editor 
         theme='vs-dark' 
         language={lang}
         options={{
          fontSize: 16,
          formatOnType: true,
        }} />
      </div>

      <div className="sticky bottom-0 z-10 bg-gray-200 px-6 py-4 shadow-sm dark:bg-neutral-900">
        {showResult ? 
        <div className="absolute bottom-full left-0 right-0 z-10 overflow-hidden rounded-t-lg bg-gray-200 px-6 py-4 transition-all duration-300 ease-in-out  max-h-[250px] dark:bg-neutral-900 ">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Test Results</h3>
          <Button variant="ghost" radius={'small'} onClick={() => { setShowResults(false) }}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <div className='flex gap-[10px] items-center'>
          <h1 className='py-[10px]' style={{color:'lightgreen'}}><b>Accepted</b></h1>
          <h1 className='py-[10px]' style={{color:'tomato'}}><b>Wrong Answer</b></h1>
        </div>
    
        <div className=" flex flex-wrap mt-4 overflow-y-auto max-h-[200px] gap-[15px] py-[10px]">
          <div className="flex items-center gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
              <CheckIcon className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-medium">Test Case 1</h4>
              <p className="text-sm text-gray-500">Passed</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
              <CheckIcon className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-medium">Test Case 2</h4>
              <p className="text-sm text-gray-500">Passed</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
              <X className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-medium">Test Case 3</h4>
              <p className="text-sm text-gray-500">Failed</p>
            </div>
          </div>
        </div>
      </div>
        :
        <div className="flex items-center justify-between h-[40px] ">
          <h3 className="text-lg font-bold">Test Results</h3>
          <Button variant="ghost" onClick={() => { setShowResults(true) }}>
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        }
      </div>
    </div>
  )
}

export default EditorV0
