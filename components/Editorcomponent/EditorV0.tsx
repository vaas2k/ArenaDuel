"use client";
import React, { useEffect, useState } from "react";
import { Badge, Button } from "@radix-ui/themes";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { CrossCircledIcon, PlayIcon, StopwatchIcon } from "@radix-ui/react-icons";
import { ArrowUp, CheckCircle, CheckIcon, ChevronDownIcon, X } from "lucide-react";
import { Editor } from "@monaco-editor/react";
import { useDispatch, useSelector } from "react-redux";
import { runCode, submitCode } from "@/BACKEND_CALLs/apis";
import toast from "react-hot-toast";
import { setTestCases } from "@/storeRedux/reducers/testCasesReducer";
import { useSession } from "next-auth/react";
import { updateStats } from "@/storeRedux/reducers/winCard";

const EditorV0 = ({code, handleCode} : any) => {


  const [ problem_id, setproblem_id ] =  useState<any>('');
  const [showResult, setShowResults] = useState(false);
  const [lang, setLang] = useState("cpp");
  const [loading, setLoading] = useState(false);


  //  code statuses 
  const [ TLE , setTLE] = useState(false);
  const [compileError , setCompileError] = useState(false);
  const [runtimeError , setRuntimeError] = useState(false);

  const dispatch = useDispatch();
  const {data : session, status } = useSession();
  

  // Reducers
  const testCases = useSelector((state : any) => state.testCasesReducer);
  const maraProblems = useSelector((state : any) => { return state.marathonReducer.problems});
  const problem1v1 = useSelector((state : any) => { return state.matchReducer.problem_id});
  const totalTestCases = useSelector((state : any ) => { return state.matchReducer.totalCases});



  useEffect(() => {
    if(lang == 'cpp') { 
      handleCode(`#include <bits/stdc++.h>
using namespace std;
class useClass { 
    
    public : 

    void getter () { 

    }

    void setter () { 

    }


};

int main() { 

    // YOUR CODE HERE

    return 0;}`
               )
    }
    else if(lang == 'java') {
      handleCode('');
    }
    else if(lang == 'python') {
      handleCode('');
    }
    else if(lang == 'javascript') {
      handleCode('');
    }

  },[lang]);

  useEffect(() => {

    if(problem1v1) {
      setproblem_id(problem1v1);
    }
    else if(maraProblems) {
      const index = maraProblems.length;
      const problem = maraProblems[index - 1];
      console.log(problem); 
      setproblem_id(problem);
    }

  },[maraProblems,problem1v1]);


  const Run = async () => {
    try {
      const data = {
        language : lang,
        code: code, //@ts-ignore
        userid: session?.user.id,
        problem_id: 1,
      };

      const req = await runCode(data);
      if (req.status === 200) {
        console.log(req.data);
        dispatch(setTestCases(req.data));
      }
    } catch (error : any) {
      console.error("Caught an error:", error);
      if (error.response && error.response.status === 403) {
        toast.error(`${error.response.data.msg}`, { position: "bottom-left" });
      } else {
        console.log("An unexpected error occurred.");
      }
    }
  };

  const Submit = async () => {
    setRuntimeError(false);
    setCompileError(false);
    setLoading(true);
    setShowResults(false);
    setTLE(false);

    try {
      const data = {
        language : lang,
        code: code, //@ts-ignore
        userid: session?.user.id,
        problem_id: problem_id,
      };
      const req = await submitCode(data);
      if (req.status === 200) {

        if(testCases &&  testCases.passed < req.data.passed ){ 
          dispatch(setTestCases(req.data)); 
          dispatch(updateStats({
            time : req.data.time,
            memory : req.data.memory
          }))
        }
        if(req.data.message == 'RTE') {
          setRuntimeError(true);
        }
        setShowResults(true); 
        setLoading(false);
      }
      if(req.status == 201 && req.data.error == 'TLE') { 
        setTLE(true);
        setShowResults(false);
        setLoading(false);
      }
      if(req.status == 201 && req.data.error == 'CE') {
        setCompileError(true);
        setLoading(false);
      }
      if(req.status == 201 && req.data.error == 'RTE') {
        setRuntimeError(true);
        setLoading(false);
      }

    } catch (error: any) {
      setLoading(false);
      console.error("Caught an error:", error);
      if (error.response && error.response.status === 403) {
        toast.error(`${error.response.data.msg}`, { position: "bottom-left" });
      } else {
        console.log("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-scroll">
      <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 shadow-sm">
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2">
                <span>{lang}</span>
                <ChevronDownIcon className="h-4 w-4 text-gray-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" sideOffset={8}>
              <DropdownMenuItem onClick={() => setLang("javascript")}>
                JavaScript
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLang("python")}>
                Python
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLang("java")}>
                Java
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLang("cpp")}>
                C++
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="h-6 w-[1px] bg-gray-200 dark:bg-gray-800" />        
        </div>

        <div className="flex items-center justify-center gap-[10px]">
          {showResult && 
         <>
          <CheckCircle color="green" />
          <Badge color="green" size={'2'} >Test Cases Passed : {testCases.passed} / { maraProblems ? testCases.total : totalTestCases } </Badge>
          </>
         }

        {compileError && <>
          <CrossCircledIcon  color="red"/>
          <Badge color="red" size={'2'}>COMPILATION ERROR</Badge>
          </>}
         
         {TLE && <>
          <StopwatchIcon  color="red"/>
          <Badge color="red" size={'2'}>TIME LIMITED EXEEDED</Badge>
          </>}

          {runtimeError && <>
          <CrossCircledIcon  color="red"/>
          <Badge color="red" size={'2'}>Runtime Error </Badge>
          </>}
        </div>  

        <div className="flex items-center gap-4">
          {/**
           * 
           <Button
           variant="ghost"
           onClick={() => {
            Run();
          }}
          >
          Run
          <PlayIcon className="h-5 w-5" />
          </Button>
          *  */
          }
          <Button
            loading={loading}
            variant="solid"
            className="bg-blue-500 text-white hover:bg-blue-600"
            onClick={() => {
              Submit();
            }}
          >
            Submit
          </Button>
        </div>
      </div>

      <div className="flex-1">
        <Editor
          theme="vs-dark"
          language={lang}
          value={code}
          onChange={(value: any) => handleCode(value)}
          options={{
            fontSize: 16,
            formatOnType: true
          }}
          
        />
      </div>
    </div>
  );
};

export default EditorV0;
