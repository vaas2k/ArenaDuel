import {
  AlertDialog,
  Badge,
  Button,
  ChevronDownIcon,
  Flex,
} from "@radix-ui/themes";
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showCard } from "@/storeRedux/reducers/winCard";
import { ontimeoutwin,onsubmissionwin,ondraw, marathonMatchOver } from "@/BACKEND_CALLs/apis";
import { updateProblems } from "@/storeRedux/reducers/marathonReducer";
import { emptyTestCases } from "@/storeRedux/reducers/testCasesReducer";
import { remMatchData } from "@/storeRedux/reducers/matchReducer";
import { useRouter } from "next/navigation";

const OptionBar = ({
  player2,
  currentplayer,
  P2PassedCases,
  matchInfo,
  handleWinCard,
}: any) => {


  const router = useRouter();
  const requestInProgress = useRef(false);
  const timeLeftRef = useRef(1200);
  const [ ,setTimeLeft] = useState(1200); // 20 minutes in seconds
  const [matchOver , setMatchOver] = useState();
  const P1PassedCases = useSelector((state: any) => {
    return state.testCasesReducer.passed;
  });

  const dispatch = useDispatch();

  // time control functionality
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeftRef.current > 0) {
        timeLeftRef.current -= 1;
        setTimeLeft(timeLeftRef.current); // Trigger a re-render every second
      } else {
        clearInterval(timer);
      }
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

  // win control functionality
  useEffect(() => {

    const TimeOut = async (winner: any, loser: any) => {
      if (requestInProgress.current) return; // Prevent multiple requests
      requestInProgress.current = true;
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
        if (req.status === 200) {
          dispatch(
            showCard({
              winner: winner.username,
              soluton: "good for now",
              winnerImage:
                winner.id === currentplayer.id ? currentplayer.image : player2.image,
              showCard: true,
              by: "timeout",
              loser: loser.username,
              loserImage: winner.id === currentplayer.id ? player2.image : currentplayer.image,
            })
          );
          
        }
      } catch (error) {
        console.log(error);
      } finally {
        requestInProgress.current = false;
      }
    };

    const onDraw = async () => {
      if (requestInProgress.current) return; // Prevent multiple requests
      requestInProgress.current = true;
      try {
        const data = {
          from: currentplayer.username,
          id: matchInfo.id,
          room_id: matchInfo.room_id,
        };
        const req = await ondraw(data);
        if (req.status === 200) {
          dispatch(
            showCard({
              winner: currentplayer.username,
              soluton: "good for now",
              winnerImage: currentplayer.image,
              showCard: true,
              by: "draw",
              loserImage: player2.image,
              loser: player2.username,
            })
          );
        }
      } catch (error) {
        console.log(error);
      } finally {
        requestInProgress.current = false;
      }
    };

    if (timeLeftRef.current === 1170) {
      // call when times end
      if (P1PassedCases > P2PassedCases) {
        TimeOut(currentplayer, player2);
      } else if (P2PassedCases > P1PassedCases) {
        TimeOut(player2, currentplayer);
      } else if (P1PassedCases === P2PassedCases) {
        onDraw();
      }
      setTimeLeft(0);
      timeLeftRef.current = 0;
    }

 
      
  }, [
    timeLeftRef.current,matchInfo
  ]);


  useEffect(() => {
    const submissionWin = async (winner: any, loser: any) => {

      if(requestInProgress.current) return;
      requestInProgress.current = true;
      try {
        const data = {
          from: currentplayer.username,
          id: matchInfo.id,
          room_id: matchInfo.room_id,
          winner: { id: winner.id, username: winner.username, by: "solving" },
          loser: { id: loser.id, username: loser.username },
        };

        const req: any = await onsubmissionwin(data);
        if (req.status === 200) {
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
        setTimeLeft(0);
        timeLeftRef.current = 0;
      } catch (error) {
        console.log(error);
      } finally { 
        requestInProgress.current = false;
      }
    };
    // call submission win for P1 (arg1 winner, arg2 loser)
    if (matchInfo.totalCases === P1PassedCases) {
      submissionWin(currentplayer, player2);
    }
    // call submission win for P2 (arg1 winner, arg2 loser)
    if (matchInfo.totalCases === P2PassedCases) {
      submissionWin(player2, currentplayer);
    }
  },[P1PassedCases,P2PassedCases])

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
      <Badge color={timeLeftRef.current == 600 ? "red" : "ruby"} size={"3"}>
        {formatTime(timeLeftRef.current)}
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

  const requestProgress = useRef(false);
  const timeLeftRef = useRef(1200);
  const [,setTimeLeft] = useState(1200); // 20 minutes in seconds
  const cases = useSelector(( state : any ) => { return state.testCasesReducer});
  const matchData = useSelector((state : any) => { return  state.marathonReducer} )
  const dispatch = useDispatch() ;
  console.log(matchData.problems);



  // time control functionality
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeftRef.current > 0) {
        timeLeftRef.current -= 1;
        setTimeLeft(timeLeftRef.current); // Trigger a re-render every second
      } else {
        clearInterval(timer);
      }
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
    

      async function matchOver () {
        if(requestProgress.current) return;
        requestProgress.current = true;
        try {
          const req = await marathonMatchOver(matchData);
          if(req.status === 200) {
            console.log(req.data);
          }

        } catch(error) {
          console.log(error);
        } finally { 
          requestProgress.current = false;
        }
      }

      if(timeLeftRef.current == 1190) {
        // make a call to save in db + update ranking in leaderboard
        matchOver();
        setTimeLeft(0);
        timeLeftRef.current = 0;
      }

    if (cases.passed > 0 && cases.total == cases.passed) {
      const lastProblem = matchData.problems[matchData.problems.length - 1];
      console.log(`Problem Solved: ${lastProblem}`);

      while (true) {
        const id = Math.floor(Math.random() * 52) + 1;
        const newProblem = matchData.problems.find((problem : number) => problem === id);
        if (!newProblem) {
          console.log('new problem');
          dispatch(updateProblems(id));
          break;
        }
      }
      dispatch(emptyTestCases());
    }
  

  },[timeLeftRef.current , cases.total, cases.passed]);

  return (
    <div className="flex items-center justify-between border dark:bg-neutral-900 bg-white rounded-lg w-[100%] h-[40px] p-[10px]">
      {/** will change time color based on time left */}
      <Badge>{formatTime(timeLeftRef.current)}</Badge>

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
