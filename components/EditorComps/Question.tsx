"use client";
import React, { useEffect, useState } from "react";
import { Rubik } from "next/font/google";
import { Badge } from "@radix-ui/themes";
const rubik = Rubik({ subsets: ["latin"] });

const Question = () => {
  const [theme, setTheme] = useState<any>("false"); // Initial theme state
  useEffect(() => {
    const newtheme =
      typeof window !== undefined ? sessionStorage.getItem("theme") : null;
    setTheme(newtheme);
  });
  return (
    <div
      style={{ backgroundColor: theme == "true" ? "white" : "#1c1c1c" }}
      className={` ${rubik.className} bg-gray-800 p-2 mt-3 rounded-lg shadow-md p-4 h-[650px] overflow-auto sm:w-[50%] w-[100%]`}
    >
      {" "}
      {/* Main container */}
      <div className="flex justify-between items-center py-4  border-gray-700">
        {" "}
        {/* Header */}
        <h1 className={`text-2xl font-bold ${rubik.className}`}>
          2. Add Two Numbers
        </h1>{" "}
        {/* Question title */}
        <span className="inline-flex items-center px-3 py-1 rounded-full text-white bg-yellow-500 font-medium text-xs">
          Medium
        </span>{" "}
        {/* Difficulty badge */}
      </div>
      <div className=" p-[20px]">
        {" "}
        {/* Description */}
        <p>
          You are given two non-empty linked lists representing two non-negative
          integers. The digits are stored in reverse order, and each of their
          nodes contains a single digit. Add the two numbers and return the sum
          as a linked list. You may assume the two numbers do not contain any
          leading zero, except the number 0 itself.
        </p>
      </div>
      <div className=" border-gray-700 pt-4">
        {" "}
        {/* Test cases */}
        <h2 className="text-lg font-bold  pb-1">Test Cases</h2>


        <div className="flex flex-col gap-[10px] p-[30px]" >
          <h1 className="text-md font-bold">Case 1</h1>
          <Badge className="flex flex-row w-max" color='gray' size={'3'}>Input : &nbsp; <p> nums = [12,3,4,1]</p> </Badge> 
          <Badge className="flex flex-row w-max"  color="gray" size={'3'}>Output : &nbsp; <p> [12,3,4,1]</p> </Badge> 
        </div>
        <div className="flex flex-col gap-[10px] p-[30px]" >
          <h1 className="text-md font-bold">Case 1</h1>
          <Badge className="flex flex-row w-max" color="gray" size={'3'}>Input : &nbsp; <p> nums = [12,3,4,1]</p> </Badge> 
          <Badge className="flex flex-row w-max"  color="gray" size={'3'}>Output : &nbsp; <p> [12,3,4,1]</p> </Badge> 
        </div>
        <div className="flex flex-col gap-[10px] p-[30px]" >
          <h1 className="text-md font-bold">Case 1</h1>
          <Badge className="flex flex-row w-max" color="gray" size={'3'}>Input : &nbsp; <p> nums = [12,3,4,1]</p> </Badge> 
          <Badge className="flex flex-row w-max"  color="gray" size={'3'}>Output : &nbsp; <p> [12,3,4,1]</p> </Badge> 
        </div>
      </div>

      <div className=" border-gray-700 pt-2">
         <h2 className="text-lg font-bold  pb-1">Constraints</h2>
         <div className="flex flex-col gap-[10px] p-[30px]" >
          <Badge className="flex flex-row w-max" color="red" size={'1'}>n == nums.length</Badge>
          <Badge className="flex flex-row w-max" color="red" size={'1'}>{`1 <= n <= 300`}</Badge> 
        </div>
      </div>
    </div>
  );
};

export default Question;
