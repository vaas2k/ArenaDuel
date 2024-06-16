import { cancel_queue } from "@/BACKEND_CALLs/apis";
import { Card, Box, Text, Button } from "@radix-ui/themes";
import { X } from "lucide-react";
import React from "react";

const Searchingmatch = ({ mode, handleMode } : any) => {
  async function cancel_match() {
    const req = await cancel_queue(mode);
    if (req.status === 200) {
      handleMode({ type: '', rated: false });
    } else {
      alert("Something happened :)");
    }
  }

  return (
    <Box maxWidth="350px" minWidth="300px">
      <Card>
        <div>
          <Text as="div" size="2" weight="bold">
            IN QUEUE
          </Text>
          <Text as="div" color="gray" size="2">
            Matchmaking in progress
          </Text>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-[7px]">
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
          <Button variant="outline" size="1" style={{ cursor: 'pointer' }} onClick={cancel_match}>
            Cancel <X size="18px" />
          </Button>
        </div>
      </Card>
    </Box>
  );
};

export default Searchingmatch;
