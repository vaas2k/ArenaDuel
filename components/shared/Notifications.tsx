import { Card, Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

const Notifications = () => {


  return (
    <div className="w-[400px] h-[400px] flex flex-col p-[20px] overflow-scroll ">
      <div
        style={{ overflow: "scroll" }}
        className="p-[10px] rounded-lg gap-[20x]"
      >
        <div className="flex flex-row items-center gap-[20px] p-[15px] m-[15px] drop-shadow-md rounded-lg dark:bg-neutral-900 bg-neutral-100">
          <img
            src="back1.jpg"
            className=" flex w-[30px] h-[30px] rounded-full"
          />
          <Text size={"2"}>Hello my nigga !</Text>
        </div>

      </div>
    </div>
  );
};

export default Notifications;
