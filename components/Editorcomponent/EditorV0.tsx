"use client";
import React, { ReducerAction, useState } from "react";
import { Button } from "@radix-ui/themes";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { PlayIcon } from "@radix-ui/react-icons";
import { ArrowUp, CheckIcon, ChevronDownIcon, X } from "lucide-react";
import { Editor } from "@monaco-editor/react";
import { useDispatch, useSelector } from "react-redux";
import { runCode, submitCode } from "@/BACKEND_CALLs/apis";
import toast from "react-hot-toast";
import { setTestCases } from "@/storeRedux/reducers/testCasesReducer";

const EditorV0 = ({ type, userid, username }: any) => {
  console.log(type, userid, username);
  const [isTestResultsOpen, setIsTestResultsOpen] = useState(false);
  const [showResult, setShowResults] = useState(false);
  const testCases = useSelector((state: any) => state.testCasesReducer);
  const [lang, setLang] = useState("cpp");
  const [code, setCode] = useState("dasdasdasdasdasd");
  const dispatch = useDispatch();
  const [failedCase, setFailedCase] = useState(false);

  console.log(code);
  const Run = async () => {
    setFailedCase(false);
    try {
      const data = {
        code: code,
        userid: userid,
        problem_id: 1,
      };

      const req = await runCode(data);
      if (req.status === 200) {
        console.log(req.data);
        dispatch(setTestCases(req.data));
        if (req.data.failedCase) {
          setFailedCase(true);
        }
      }
    } catch (error: any) {
      console.error("Caught an error:", error);
      if (error.response && error.response.status === 403) {
        toast.error(`${error.response.data.msg}`, { position: "bottom-left" });
      } else {
        console.log("An unexpected error occurred.");
      }
    }
  };

  const Submit = async () => {
    try {
      const data = {
        code: code,
        userid: userid,
        problem_id: 1,
      };
      const req = await submitCode(data);
      if (req.status === 200) {
        console.log(req.data);
      }
    } catch (error: any) {
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

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={() => {
              Run();
              setShowResults(true);
            }}
          >
            Run
            <PlayIcon className="h-5 w-5" />
          </Button>
          <Button
            variant="solid"
            className="bg-blue-500 text-white hover:bg-blue-600"
            onClick={() => {
              Submit();
              setShowResults(true);
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
          onChange={(value: any) => setCode(value)}
          options={{
            fontSize: 16,
            formatOnType: true,
          }}
        />
      </div>

      <div className="sticky bottom-0 z-10 bg-gray-200 px-6 py-2 shadow-sm dark:bg-neutral-900">
        {testCases && testCases.total > 0 && showResult ? (
          <div className="absolute bottom-full left-0 right-0 z-10 overflow-hidden rounded-t-lg bg-gray-200 px-6 py-1 transition-all duration-300 ease-in-out max-h-[250px] dark:bg-neutral-900">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Test Results</h3>
              <Button
                variant="ghost"
                radius={"small"}
                onClick={() => setShowResults(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <div className="flex gap-[10px] items-center">
              {testCases.failedCase ? (
                <h1 className="py-[10px]" style={{ color: "tomato" }}>
                  <b>{testCases.errorMessage}</b>
                </h1>
              ) : (
                <h1 className="py-[10px]" style={{ color: "lightgreen" }}>
                  <b>Accepted</b>
                </h1>
              )}
            </div>

            <div className="flex flex-col flex-wrap mt-[-10px] overflow-y-auto max-h-[200px] gap-[1px] py-[10px]">
              {!testCases.failedCase.input ? (<div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
                  <CheckIcon className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium">
                    Test Cases Passed - {testCases.passed} / {testCases.total}
                  </h4>
                </div>
              </div>)
              :
              (<div className="flex items-center gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md w-full">
                  <h4 className="font-medium text-red-600 dark:text-red-400">
                    Failed Case
                  </h4>
                  <div className="mt-1">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Input:
                    </p>
                    <pre className=" flex flex-row bg-gray-200 dark:bg-gray-700 p-2 rounded text-sm text-gray-900 dark:text-gray-100 whitespace-pre-wrap">
                      [{testCases.failedCase.input.map((i :any) => {
                        return <p key={i} className="flex flex-row"> {i},</p>
                      })}]
                    </pre>
                  </div>
                  <div className="mt-1">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Output:
                    </p>
                    <pre className=" flex flex-row bg-gray-200 dark:bg-gray-700 p-2 rounded text-sm text-gray-900 dark:text-gray-100 whitespace-pre-wrap">
                    [{testCases.failedCase.output.map((i :any) => {
                        return <p key={i} className="flex flex-row"> {i},</p>
                      })}]
                    </pre>
                  </div>
                </div>
              </div>)
              }
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between h-[40px]">
            <h3 className="text-lg font-bold">Test Results</h3>
            <Button variant="ghost" onClick={() => setShowResults(true)}>
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Show</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditorV0;
