"use client";
import { Button, Card } from "@radix-ui/themes";
import { TrophyIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { closeCard } from "@/storeRedux/reducers/winCard";
import { useDispatch,useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { remMatchData } from "@/storeRedux/reducers/matchReducer";

const WinningCard = () => {
  const dispatch = useDispatch();
  const cardData = useSelector((state : any) => { return state.winCard}) ;
  const currentstats = useSelector ((state : any) => { return state.testCasesReducer}) ;
  const {data: session} = useSession();
  const totalCases = useSelector((state : any) => { return state.matchReducer.totalCases} ) ;
  return (
    <>
      <Card className={`flex flex-col ${cardData.winner == session?.user?.name ? 'border-green-500' : 'border-green-500'} w-[400px] h-[450]`}>
        <div className="p-[10px]">
          <X size={"15px"} onClick={() => {dispatch(closeCard());}} className="cursor-pointer" />
        </div>
        <div className="flex items-center justify-center ">
          <h1 className="text-center text-[11px]">
            <b className=" text-center text-[20px]">{cardData.winner} Wins &nbsp;</b>
            <br />
            by {cardData.by}
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

          <div className="flex items-center justify-center gap-[20px] my-[20px]">
            <TrophyIcon color="gold" size={'18px'}/>
            <h1 className="text-[18px]"><b>{
            //@ts-ignore 
            session?.user.rating
            }</b></h1>
          </div>

          <div className="flex items-center justify-center gap-[20px] my-[20px]">
            <Button color="jade" variant={'soft'} size={'4'} radius='large' style={{cursor : 'pointer'}}>View Solution</Button>
          </div>

          <div className="flex items-center justify-center gap-[20px] my-[30px]">
            <div className="flex flex-col gap-[10px]">
               <Button radius={'large'} color={'amber'} size={'1'} variant="soft">{currentstats.passed}/{totalCases}</Button>
               <h1 className="text-[11px] text-center text-jade-600">Test Cases</h1>
            </div>
            <div className="flex flex-col gap-[10px]">
               <Button radius={'large'} color={'ruby'} size={'1'} variant="soft">10 ms</Button>
               <h1 className="text-[11px] text-center text-jade-600">Time</h1>
            </div>
            <div className="flex flex-col gap-[10px]">
               <Button radius={'large'} color={'iris'} size={'1'} variant="soft">200</Button>
               <h1 className="text-[11px] text-center text-jade-600">Code Lines</h1>
            </div>
            <div className="flex flex-col gap-[10px]">
               <Button radius={'large'} color={'gray'} size={'1'} variant="soft">10 mb</Button>
               <h1 className="text-[11px] text-center text-jade-600">Memory</h1>
            </div>
          </div>

          <div className="flex items-center justify-center gap-[20px] my-[20px]">
            <Link href={'/dashboard'}>
            <Button variant={'outline'} size={'3'} color="gray" radius='large' style={{cursor : 'pointer'}}>
                Go Home
            </Button>
            </Link>
          </div>
      </Card>
    </>
  );
};

export default WinningCard;
