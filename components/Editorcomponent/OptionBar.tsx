import {
  AlertDialog,
  Badge,
  Button,
  ChevronDownIcon,
  Flex,
} from "@radix-ui/themes";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showCard } from "@/storeRedux/reducers/winCard";
import { onWin } from "@/BACKEND_CALLs/apis";
import { remMatchData } from "@/storeRedux/reducers/matchReducer";


const OptionBar = ({ player2, currentplayer, P2PassedCases, matchInfo, handleWinCard }: any) => {
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes in seconds
  const P1PassedCases = useSelector((state: any) => { return state.testCasesReducer.passed; });

  const dispatch = useDispatch();

  // time control functionality
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
    return `${minutes.toString().padStart(2, "0")} : ${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    // Called when time reaches end make winner (by most cases passed)
    const timeOutWin = async () => {
      try {
        let winner : any , loser : any ;
        if (P1PassedCases > P2PassedCases) {
          winner = {
            id: currentplayer.id,
            username: currentplayer.username,
            by: "timeout",
            casesPassed : P1PassedCases
          };
          loser = {
            id: player2.id,
            username: player2.username,
            casesPassed : P2PassedCases
          };
        } else if (P2PassedCases > P1PassedCases) {
          winner = {
            id: player2.id,
            username: player2.username,
            by: "timeout",
            casesPassed : P2PassedCases
          };
          loser = {
            id: currentplayer.id,
            username: currentplayer.username,
            casesPassed : P1PassedCases
          };
        } else if (P2PassedCases == P1PassedCases) {
          winner = "draw";
        }
  
        const data = {
          from: currentplayer.username,
          id: matchInfo.id,
          room_id: matchInfo.room_id,
          winner: winner,
          loser : loser
        };
  
        const req = await onWin(data);
          if(req.status == 200) {
            console.log(req.data);
            // Show the winning card
            dispatch(showCard({
              winner : winner.username,
              soluton :'good for now',
              winnerImage : winner.id == currentplayer.id ? currentplayer.image : player2.image,
              showCard : true,
              by : 'timeout',
              loser : loser.username,
              loserImage : winner.id == currentplayer.id ? player2.image : currentplayer.image
            }));
          }
      } catch (error) {
        console.log(error);
      }
    };


    // Called when anyone solve problem
    const submissionWin = async (winner : any, loser : any) => {
      try {
        console.log(3);
        const data = {
          from: currentplayer.username,
          id: matchInfo.id,
          room_id: matchInfo.room_id,
          winner: {id : winner.id , username : winner.username , by : 'solveing'},
          loser : {id : loser.id, username : loser.username}
        };

        const req : any = await onWin(data);
        console.log(4);
        if(req.status == 200) {
          console.log(req.data);
            // Show the winning card
            dispatch(showCard({
              winner : winner.username,
              soluton :'good for now',
              winnerImage : winner.image,
              showCard : true,
              by : 'solving',
              loser : loser.username,
              loserImage : loser.image
            }));
          }
        console.log(5);
      } catch ( error ) {
        console.log(error);
      }
    }
  
    if (timeLeft === 1190) {
      // call when times end
      timeOutWin();
    }
    if(matchInfo.totalCases == P1PassedCases) {
      // call submission win for P1 (arg1 winner, arg2 loser)
      console.log(1);
      submissionWin(currentplayer , player2);
    }
    if(matchInfo.totalCases == P2PassedCases) {
      // call submission win for P2 (arg1 winner, arg2 loser)
      console.log(2);
      submissionWin(player2,currentplayer);
    }
    console.log(timeLeft);
    
  }, [timeLeft, P1PassedCases, P2PassedCases, currentplayer, player2, matchInfo, dispatch, handleWinCard]);
  

  return (
    <div className="flex items-center justify-between border dark:bg-neutral-900 bg-white rounded-lg w-[100%] h-[40px] p-[10px]">
      <div className="flex items-center justify-center gap-[20px]">
        <img
          src={player2.image}
          className="w-[30px] h-[30px] rounded-full object-cover"
        />
        <Badge>
          {player2.username} &nbsp; {player2.rating}
        </Badge>
        <Badge color={"ruby"}>Cases Passed - {P2PassedCases} </Badge>
      </div>

      {/** will change time color based on time left */}
      <Badge color={timeLeft == 600 ? "red" : "ruby"} size={"3"}>
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
        <Badge>
          {currentplayer.username} &nbsp; {currentplayer.rating}
        </Badge>
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
    return `${minutes.toString().padStart(2, "0")} : ${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center justify-between border dark:bg-neutral-900 bg-white rounded-lg w-[100%] h-[40px] p-[10px]">
      {/** will change time color based on time left */}
      <Badge>{formatTime(timeLeft)}</Badge>

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
        <Badge>
          {currentplayer.username} &nbsp; {currentplayer.rating}
        </Badge>
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
