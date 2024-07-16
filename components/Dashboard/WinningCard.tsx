"use client";
import { Badge, Button, Card } from "@radix-ui/themes";
import { TrophyIcon, X, ZapIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { Rubik } from "next/font/google";
import { useRouter } from "next/navigation";
import { Editor } from "@monaco-editor/react";
import { DoubleArrowUpIcon, DoubleArrowDownIcon } from "@radix-ui/react-icons";
const rubik = Rubik({ subsets: ["latin"] });

const WinningCard = () => {
  const dispatch = useDispatch();
  const cardData = useSelector((state : any) => { return state.winCard}) ;
  const currentstats = useSelector ((state : any) => { return state.testCasesReducer}) ;
  const {data: session} = useSession();
  const totalCases = useSelector((state : any) => { return state.matchReducer.totalCases} ) ;
  const match_id = useSelector(( state :  any ) => { return state.matchReducer.id});
  const [showSolution, setSolution] = useState(false);
  const router = useRouter() ; 

  return (
    <>
      <Card
        className={`flex flex-col ${
          cardData.winner == session?.user?.name
            ? "border-green-500"
            : "border-green-500"
        } w-[400px] h-[450]`}
      >
        <Link className="p-[10px]" href={"/dashboard"}>
          <X size={"15px"} className="cursor-pointer" />
        </Link>
        <div className="flex items-center justify-center ">
          <h1 className="text-center text-[11px]">
            <b className=" text-center text-[20px]">
              {cardData.by == "draw" ? "Draw" : `${cardData.winner} Wins`}{" "}
              &nbsp;
            </b>
            <br />
            {cardData.by == "draw"
              ? "by equal test cases"
              : ` by ${cardData.by}`}
          </h1>
        </div>

        <div className="flex items-center justify-center gap-[40px] px-[5px]">
          <div>
            <img
              className="w-[180px] h-[150px] border-[2px] border-green-500 rounded-lg object-cover drop-shadow-lg my-[15px]"
              src={cardData.winnerImage}
              alt="user1"
            />
            <h1 className="text-center">
              <b>{cardData.winner}</b>
            </h1>
          </div>
          vs
          <div>
            <img
              className="w-[180px] h-[150px] border-[2px] border-red-500 rounded-lg object-cover drop-shadow-lg my-[15px]"
              src={cardData.loserImage}
              alt="user2"
            />
            <h1 className="text-center">
              <b>{cardData.loser}</b>
            </h1>
          </div>
        </div>

        <div className="flex items-center justify-center gap-[15px] my-[20px]">
          <ZapIcon className="w-5 h-5 text-yellow-500" /> 
          <h1 className="text-[18px]">
            {/**@ts-ignore */}
            <b style={{color : cardData.winner == session?.user!.username ? 'lightgreen' : ' #E55451'}}>
              {cardData.rating}
            </b>
          </h1>
          {/**@ts-ignore */}
          {cardData.winner == session?.user!.username ? <DoubleArrowUpIcon color={'lightgreen'} /> : <DoubleArrowDownIcon color={'#E55451'} />}
          
        </div>

        <div className="flex items-center justify-center gap-[20px] my-[20px]">
          <Button
            color="jade"
            variant={"soft"}
            size={"4"}
            radius="large"
            style={{ cursor: "pointer" }}
            onClick={() => setSolution(true)}
          >
            View Solution
          </Button>
        </div>

        <div className="flex items-center justify-center gap-[20px] my-[30px]">
          <div className="flex flex-col gap-[10px]">
            <Button radius={"large"} color={"amber"} size={"1"} variant="soft">
              {currentstats.passed}/{totalCases}
            </Button>
            <h1 className="text-[11px] text-center text-jade-600">
              Test Cases
            </h1>
          </div>
          <div className="flex flex-col gap-[10px]">
            <Button radius={"large"} color={"ruby"} size={"1"} variant="soft">
              {cardData.time} ms
            </Button>
            <h1 className="text-[11px] text-center text-jade-600">Time</h1>
          </div>
          
          <div className="flex flex-col gap-[10px]">
            <Button radius={"large"} color={"gray"} size={"1"} variant="soft">
              {cardData.memory}
            </Button>
            <h1 className="text-[11px] text-center text-jade-600">Memory</h1>
          </div>
        </div>

        <div className="flex items-center justify-center gap-[20px] my-[20px]">
          <Link href={"/dashboard"}>
            <Button
              variant={"outline"}
              size={"3"}
              color="gray"
              radius="large"
              style={{ cursor: "pointer" }}
            >
              Go Home
            </Button>
          </Link>
        </div>
      </Card>

      {showSolution && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
          <Card className="flex items-center justify-center h-[600px] w-[700px] overflow-scroll z-20">
            <div className="flex items-center justify-between p-[15px]">
              <h1 className={`${rubik.className} text-sm`}>
                Solution by <Badge size={"2"}>{cardData.winner}</Badge>
              </h1>
              <X
                size={"15px"}
                className="cursor-pointer"
                onClick={() => setSolution(false)}
              />
            </div>
            <div className="inner-card-container flex items-center justify-center">
              <Card
                variant={"surface"}
                className="h-[500px] w-[600px] overflow-scroll"
                style={{ margin: "auto" }}
              >
                <Editor
                  theme="vs-dark"
                  language={'cpp'}
                  value={cardData.solution}
                  options={{
                    fontSize: 16,
                    formatOnType: true,
                  }}
                />
              </Card>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default WinningCard;
