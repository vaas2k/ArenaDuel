import { ButtonIcon } from "@radix-ui/react-icons";
import { Card, Box, Text, Button } from "@radix-ui/themes";
import { X } from "lucide-react";
import React from "react";

const Searchingmatch = ({mode , handleMode} : any)  => {



  return (
    <Box maxWidth="350px" minWidth={'300px'}>
        <Card>
      
        <a href="#">
          <Text as="div" size="2" weight="bold">
            IN QUEUE
          </Text>
            <Text as="div" color="gray" size="2">
              Matchmaking in progress
            </Text>
        </a>
        <div className="flex items-center justify-between ">
        <div className="flex items-center gap-[7px]" >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
        </div>
            <Button variant="outline" size={'1'} style={{cursor:'pointer'}} onClick={() => {handleMode({mode:'',rated :false})}}>
               cancel <X size={'18px'}/>
            </Button>
        </div>
      </Card>
    </Box>
  );
};
export default Searchingmatch;

/**
 * <div className="flex items-center justify-center gap-[10px] pb-[10px]">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
        </div>
 */
