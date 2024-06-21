import {
  AlertDialog,
  Badge,
  Button,
  ChevronDownIcon,
  Flex,
} from "@radix-ui/themes";
import React from "react";

const OptionBar = ({ player2, currentplayer, passed_cases }: any) => {
  return (
    <div className="flex items-center justify-between border  dark:bg-neutral-900 bg-white rounded-lg w-[100%] h-[40px] p-[10px]">
      <div className="flex items-center justify-center gap-[20px]">
        <img
          src={player2.image}
          className="w-[30px] h-[30px] rounded-full object-cover"
        />
        <Badge>{player2.username} &nbsp; {player2.rating}</Badge>
        <Badge color={"ruby"}>Cases Passed - {passed_cases}</Badge>
      </div>

      {/**will change time color based on time left */}
      <Badge>
        20 : 00
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
  return (
    <div className="flex items-center justify-between border  dark:bg-neutral-900 bg-white rounded-lg w-[100%] h-[40px] p-[10px]">      
      
      {/**will change time color based on time left */}
      <Badge>
        20 : 00
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
                <Button color="red">Forfiet</Button>
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
}

export {OptionBar,OptionBarMarathon};

/** options for duo matchs
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
