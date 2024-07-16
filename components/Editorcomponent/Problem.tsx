import React, { useEffect, useState } from "react";
import problems from '../../public/problems/problems';
import { Loader2 } from "../shared/Loader";
import { useSelector } from "react-redux";
import { Badge } from "@radix-ui/themes";

// intro problems  :  id > 1 &&  <= 19
// sort and search :  id >= 20 && <= 54
// dynamic probs   :  id >= 55 && <= 74


const ProblemV0 = ({className} : any) => {


  const [getProblem, setgetProblem] = useState<any>();
  const maraProblems = useSelector((state : any) => { return state.marathonReducer.problems});
  const problem1v1 = useSelector((state : any) => { return state.matchReducer.problem_id});

  console.log(problem1v1);

  useEffect(()=>{
    if(problem1v1) {
      setgetProblem(problems.find((i) => problem1v1 == i.id));
    }
    else if(maraProblems) {
      const len = maraProblems.length;
      setgetProblem(problems.find((i) => maraProblems[len - 1] == i.id));
    }

  },[maraProblems,problem1v1])
     
  
  
    
  return (
    <>
    {getProblem ?
    (<div className={` ${className} p-[20px] overflow-scrol`}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{getProblem.title}</h1>
        
        </div>
        <div className="space-y-4">
          <pre className="whitespace-pre-wrap">
            {getProblem.statement}
          </pre>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p>Input</p>
             {getProblem.input}
        </div>
        <div className="flex flex-col gap-[10px]">
          <p>Output</p>
             {getProblem.output}
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Sample Case</h2>
          <div className="grid gap-4">
            <div className="rounded-md border border-gray-200 p-4 dark:border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-2">
                <div>
                  <label className="text-sm font-medium">Input</label>
                  <pre className="rounded-md bg-gray-50 p-2 text-sm dark:bg-gray-900">
                    <code>{getProblem.testCases[0]}</code>
                  </pre>
                </div>
                <div>
                  <label className="text-sm font-medium">Output</label>
                  <pre className="rounded-md bg-gray-50 p-2 text-sm dark:bg-gray-900">
                    <code>{getProblem.testCases[1]}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-bold">Constraints</h2>
          <p>{getProblem.constraints}</p>
        </div>
      </div>
    </div>)
    :
    (<div className="flex items-center justify-center">
      <Loader2 />
    </div>)
    
  }
    </>
  );
};

export default ProblemV0;
