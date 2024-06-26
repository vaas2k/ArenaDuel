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
import { ontimeoutwin,onsubmissionwin,ondraw } from "@/BACKEND_CALLs/apis";

const OptionBar = ({
  player2,
  currentplayer,
  P2PassedCases,
  matchInfo,
  handleWinCard,
}: any) => {
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes in seconds
  const P1PassedCases = useSelector((state: any) => {
    return state.testCasesReducer.passed;
  });

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

  // win control functionality
  useEffect(() => {

    // Called when anyone solve problem
    const submissionWin = async (winner: any, loser: any) => {
      try {
        console.log(3);
        const data = {
          from: currentplayer.username,
          id: matchInfo.id,
          room_id: matchInfo.room_id,
          winner: { id: winner.id, username: winner.username, by: "solveing" },
          loser: { id: loser.id, username: loser.username },
        };

        const req: any = await onsubmissionwin(data);
        console.log(4);
        if (req.status == 200) {
          console.log(req.data);
          // Show the winning card
          dispatch(
            showCard({
              winner: winner.username,
              soluton: "good for now",
              winnerImage: winner.image,
              showCard: true,
              by: "solving",
              loser: loser.username,
              loserImage: loser.image,
            })
          );
        }
        console.log(5);
        setTimeLeft(0);
      } catch (error) {
        console.log(error);
      }
    };
    
    // Called when time reaches end make winner (by most cases passed)
    const TimeOut = async (winner: any, loser: any) => {
      try {
        const data = {
          from: currentplayer.username,
          id: matchInfo.id,
          room_id: matchInfo.room_id,
          winner: {
            id: winner.id,
            username: winner.username,
            by: "timeout",
            casesPassed: winner.id == currentplayer.id ? P1PassedCases : P2PassedCases,
          },
          loser: {
            id: loser.id,
            username: loser.username,
            casesPassed: loser.id === currentplayer.id ? P1PassedCases : P2PassedCases,
          },
        };
        // send req to backend for processing data
        const req = await ontimeoutwin(data);
        if (req.status == 200) {

          console.log(req.data);
          // Show the winning card
          dispatch(
            showCard({
              winner: winner.username,
              soluton: "good for now",
              winnerImage:
                winner.id == currentplayer.id ? currentplayer.image : player2.image,
              showCard: true,
              by: "timeout",
              loser : loser.username,
              loserImage: winner.id == currentplayer.id ? player2.image : currentplayer.image,
            })
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

    //Called when equal test cases passed on timeout 
    const onDraw = async () => {
      try{
        const data = {
          from: currentplayer.username,
          id: matchInfo.id,
          room_id: matchInfo.room_id,
        }
        const req = await ondraw(data);
        if(req.status == 200) { 
          dispatch(
            showCard({
              winner: currentplayer.username,
              soluton: "good for now",
              winnerImage: currentplayer.image,
              showCard: true,
              by: "draw",
              loserImage: player2.image,
              loser : player2.username
            })
          );
        }

      }catch(error) {
        console.log(error);
      }
    }


    if (timeLeft === 1150 ) {
      // call when times end
      if(P1PassedCases > P2PassedCases) {
        TimeOut(currentplayer , player2);
      }
      else if(P2PassedCases > P1PassedCases) {
        TimeOut(player2 , currentplayer);
      }
      else if( P1PassedCases === P2PassedCases ) {
        onDraw();
      }
    }
    
    // call submission win for P1 (arg1 winner, arg2 loser)
    if (matchInfo.totalCases == P1PassedCases) {
      submissionWin(currentplayer, player2);
    }
    // call submission win for P2 (arg1 winner, arg2 loser)
    if (matchInfo.totalCases == P2PassedCases) {
      submissionWin(player2, currentplayer);
    }
  }, [
    timeLeft,
    P1PassedCases,
    P2PassedCases,
    currentplayer,
    player2,
    matchInfo,
    dispatch,
    handleWinCard,
  ]);

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
  const cases = useSelector(( state : any ) => { return state.testCasesReducer});

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



  useEffect(() => {

    if(timeLeft == 0) {
      // make a call to save in db + update ranking in leaderboard
    }

    if( cases.total == cases.passed ) {
      // show some congrats card 
      // generate new Problem id and so on.. unitl times end or user ends on choice 
    }


  },[cases.total, cases.passed]);

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
