import testCasesReducer from "@/storeRedux/reducers/testCasesReducer";
import {
  AlertDialog,
  Badge,
  Button,
  ChevronDownIcon,
  Flex,
} from "@radix-ui/themes";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const OptionBar = ({ player2, currentplayer, P2_passed_cases, matchInfo }: any) => {
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes in seconds
  const P1PassedCases = useSelector((state : any) => {return state.testCasesReducer.passed});

  useEffect(() => {
    if (matchInfo.room_id) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);

      return () => clearInterval(timer); // Cleanup the interval on component unmount
    }
  }, [matchInfo.room_id]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
  };

  console.log(timeLeft);
  if(timeLeft == 1190) {
    // run a function to declare a winner based on testCases Passed the most
    console.log(`P1 : PASSED CASES - ${P1PassedCases}`);
    console.log(`P2 : PASSED CASES - ${P2_passed_cases}`);
  } 

  return (
    <div className="flex items-center justify-between border dark:bg-neutral-900 bg-white rounded-lg w-[100%] h-[40px] p-[10px]">
      <div className="flex items-center justify-center gap-[20px]">
        <img
          src={player2.image}
          className="w-[30px] h-[30px] rounded-full object-cover"
        />
        <Badge>{player2.username} &nbsp; {player2.rating}</Badge>
        <Badge color={"ruby"}>Cases Passed - {P2_passed_cases} </Badge>
      </div>

      {/** will change time color based on time left */}
      <Badge color={timeLeft == 600 ? 'red' : 'ruby'} size={'3'}>
        {formatTime(timeLeft)}
      </Badge>

      <div className="flex items-center justify-center gap-[20px]">
        <AlertDialog.Root>
          <AlertDialog.Trigger>
            <Button color="ruby" variant="ghost" className="flex gap-[5px]">
              <p>options</p> <ChevronDownIcon />
            </Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content maxWidth="450px">
            <AlertDialog.Title>Match Options</AlertDialog.Title>

            <Flex className="flex-col gap-[10px]">
              <AlertDialog.Action>
                <Button color="red">Resign</Button>
              </AlertDialog.Action>
              <AlertDialog.Action>
                <Button color="gray">Offer Draw ?</Button>
              </AlertDialog.Action>
              <AlertDialog.Action>
                <Button color="blue">cancel</Button>
              </AlertDialog.Action>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
        <Badge>{currentplayer.username} &nbsp; {currentplayer.rating}</Badge>
        <img
          src={currentplayer.image}
          className="w-[30px] h-[30px] rounded-full object-cover"
        />
      </div>
    </div>
  );
};

const OptionBarMarathon = ({ currentplayer }: any) => {
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center justify-between border dark:bg-neutral-900 bg-white rounded-lg w-[100%] h-[40px] p-[10px]">
      {/** will change time color based on time left */}
      <Badge>
        {formatTime(timeLeft)}
      </Badge>

      <div className="flex items-center justify-center gap-[20px]">
        <AlertDialog.Root>
          <AlertDialog.Trigger>
            <Button color="ruby" variant="ghost" className="flex gap-[5px]">
              <p>options</p> <ChevronDownIcon />
            </Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content maxWidth="450px">
            <AlertDialog.Title>Match Options</AlertDialog.Title>

            <Flex className="flex-col gap-[10px]">
              <AlertDialog.Action>
                <Button color="red">Forfeit</Button>
              </AlertDialog.Action>
              <AlertDialog.Action>
                <Button color="blue">cancel</Button>
              </AlertDialog.Action>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
        <Badge>{currentplayer.username} &nbsp; {currentplayer.rating}</Badge>
        <img
          src={currentplayer.image}
          className="w-[30px] h-[30px] rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export { OptionBar, OptionBarMarathon };

/** options for duo matches
 * <div className="flex items-center justify-center gap-[20px]">
        <Button variant="ghost" color="ruby">
          <ChatBubbleIcon />
        </Button>
        <Button variant="ghost" color="ruby">
          <PersonIcon />
        </Button>
        <Button variant="ghost" color="ruby">
          <SpeakerOffIcon />
        </Button>
      </div>
 */
