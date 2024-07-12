import { useState, useEffect } from "react";
import ProblemV0 from "./Problem";
import EditorV0 from "./EditorV0";
import WinningCard from "../Dashboard/WinningCard";
import { useSelector } from "react-redux";
import Confetti from "react-confetti";
import { abandonMatch } from "@/BACKEND_CALLs/apis";
import useSocket from "@/lib/Sockets/useSocket";
import { useDispatch } from "react-redux";
import { showCard as showReducerCard } from "@/storeRedux/reducers/winCard";

import { useRouter } from "next/navigation";
import MarathonCard from "../Dashboard/MarathonCard";
import { BackgroundBeams } from "../ui/background-beams";

export default function Probem_Editor({ currentplayer, code , handleCode , marathonCard}: any) {
  
  const showCard = useSelector((state: any) => state.winCard.showCard);
  const [showConfetti, setShowConfetti] = useState(false);
  const getWinner = useSelector((state : any) => { return state.winCard.winner});
  const matchInfo = useSelector((state : any) => { return state.matchReducer}) ;
  const player2 = useSelector((state : any ) => { return state.opponentReducer}) ;
  const socket = useSocket();
  const dispatch = useDispatch();
  const router = useRouter();




  // abandon match when user leave the match
  async function abandon_match() {
    try {
      if (!player2.username || !player2.image) {
        console.error("Player 2 data is missing:", player2);
        return;
      }
      if (showCard === true) {
        console.log('Match Already Over');
        return;
      }
  
      const winner = { username: player2.username, image: player2.image, rating: player2.rating };
      const loser = { username : currentplayer.username, image: currentplayer.image, rating: currentplayer.rating };
      const data = {
        ...matchInfo,
        winner: winner,
        loser: loser,
        by: 'abandonment'
      };
  
      const req = await abandonMatch(data);
      if (req.status === 200) {
        console.log('Good job, request sent successfully');
      } else {
        console.error('Failed to send request:', req);
      }
    } catch (error) {
      console.error('Error in abandon_match:', error);
    }
  }
  
  useEffect(() => {
    try {
      socket.on(`abandon-${currentplayer.id}`, (data) => {
        console.log('socket data -> : ', data);
  
        dispatch(
          showReducerCard({
            winner: data.winner.username,
            solution: 'NO SOLUTION',
            winnerImage: data.winner.image,
            showCard: true,
            by: data.by,
            loser: data.loser.username,
            loserImage: data.loser.image,
            rating : data.winner.username == currentplayer.username ? data.winner.rating :  data.loser.rating
          })
        );
      });


    } catch (error) {
      console.log(error);
    }
  }, [socket, matchInfo.room_id, dispatch]);
  
  useEffect(() => {
    if (!showCard) {
    const handleBeforeUnload = (event : any ) => {
        abandon_match();     
      };
      
      
      window.addEventListener("beforeunload", handleBeforeUnload);
      
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, [showCard, player2, matchInfo, currentplayer]);

  useEffect(() => {
    const handleBeforePopState = (event : any) => {
        const message = "Are you sure you want to leave?";
        event.preventDefault();
        console.log('popState');
        abandon_match();
        
      }
    
    window.addEventListener('popstate', handleBeforePopState);
  
    return () => {
      window.removeEventListener("popstate", handleBeforePopState);
    };
  }, [socket, showCard, player2, matchInfo,currentplayer])
  
  


  
  
  
  

  useEffect(() => {
    if (showCard) {
      setShowConfetti(getWinner == currentplayer.username ? true : false );
      // Stop confetti after a few seconds
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000); // Adjust the duration as needed
      
      return () => clearTimeout(timer);
    }
  }, [showCard]);

  return (
    <div className="responsive-container grid grid-cols-1 md:grid-cols-12">
      <ProblemV0 className="col-span-full md:col-span-6" />

      <EditorV0
        code={code}
        handleCode={handleCode}
        className="col-span-full md:col-span-6"
      />

      {showCard && (
        <>
          {showConfetti && <Confetti />}
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            {showConfetti ? <WinningCard /> : <MarathonCard />}
          </div>
        </>
      )}
    </div>
  );
}
