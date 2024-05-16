import { Card, Button } from '@radix-ui/themes';
import React, { useState } from 'react'
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

const RoomCards = ({param} : any) => {
    const [cards, setCards] = useState(['card','card','card','card','card','card','card','card',])

    console.log('ROOM');
    return (<>
        <div className={` ${rubik.className} py-[20px] flex flex-row items-center sm:px-[140px] px-[10px]`}>
          {" "}
          <h1 className=" text-lg font-bold " >Search Results : &nbsp; </h1>{" "}
          <h1>{param}</h1>
        </div>
      <div className="flex flex-col items-center justify-center px-[30px] pb-[30px]">
        <div className="flex items-center justity-center flex-col">
          <div className=" flex flex-row justify-center flex-wrap gap-[40px] sm:w-[85%] w-[100%] sm:h-[660px] overflow-scroll h-screen border-x border-t px-[30px] pt-[30px] rounded-lg">
            {cards.map((card : string , index)=>{
              return(
                <Card key={index} className="w-[240px] h-[220px]"></Card>
              )
            })}
          </div>
          <Button variant="outline">Load More</Button>
        </div>
      </div>
    </>
    );
}

export default RoomCards