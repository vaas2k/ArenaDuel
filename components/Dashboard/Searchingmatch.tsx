import { Card, Text, Button } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useSocket from "@/lib/Sockets/useSocket";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setMatchData } from "@/storeRedux/reducers/matchReducer";

const Searchingmatch = ({ mode, handleMode, currentuser, rating }: any) => {
  const socket = useSocket();
  const router = useRouter();

  const [waiting, setWaiting] = useState(true);
  const [matchFound, setMatchFound] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [room, setRoom] = useState<any>(null); // Initialize with null
  
  const dispatch = useDispatch();


  // Function to cancel the matchmaking process
  const cancelMatch = async () => {
    const data = { 
      type : mode.type,
      rating : mode.rating,
      id : currentuser
    }
    try {
      const req = await axios.post("http://localhost:8080/player_left", data);
      if (req.status === 200) {
        handleMode({ type: "", rated: false });
      } else {
        console.log(req.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(currentuser);
  useEffect(() => {
    async function match_found() {
      try {
        socket.on(JSON.stringify(currentuser), (data) => {
          console.log(`Match created for - ${currentuser}`);
          console.log(data);
          if(currentuser == data.p2) {
            const P2 = data.p1;
            data = {...data,p1 : currentuser,p2 : P2}
          }
            dispatch(setMatchData(data));
            setRoom(data.room_id)
            setMatchFound(true);
            setWaiting(false);
            setCountdown(3);
        });

        return () => {
          socket.off(`${currentuser}`);
        };
      } catch (error) {
        console.log(error);
      }
    }
    match_found();
  }, [socket, currentuser, setWaiting, setMatchFound, setCountdown]);

  // Countdown effect when match is found
  useEffect(() => {
    let countdownInterval: any;
    if (matchFound) {
      countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    // Cleanup interval when countdown reaches 0
    if (countdown === 0) {
      clearInterval(countdownInterval);
      // Redirect to game page or handle next steps
        const queryParams = new URLSearchParams(room);
        router.push(`/editor/${queryParams}`);
    }

    return () => clearInterval(countdownInterval);
  }, [matchFound, countdown, router, room]);

  return (
    <Card>
      {waiting ? (
        <div>
          <Text as="div" size="2" weight="bold">
            IN QUEUE
          </Text>
          <Text as="div" color="gray" size="2">
            Matchmaking in progress
          </Text>
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
            <Button
              variant="outline"
              size="1"
              style={{ cursor: "pointer" }}
              onClick={cancelMatch}
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : matchFound ? (
        <div>
          <Text as="div" size="2" weight="bold">
            MATCH FOUND
          </Text>
          <Text as="div" color="gray" size="2">
            Starting game in {countdown}
          </Text>
          <Button
            variant="outline"
            size="1"
            style={{ cursor: "pointer" }}
            onClick={cancelMatch}
          >
            Cancel
          </Button>
        </div>
      ) : null}
    </Card>
  );
};

export default Searchingmatch;
