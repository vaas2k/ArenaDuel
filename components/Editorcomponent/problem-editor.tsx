import { useState, useEffect } from "react";
import ProblemV0 from "./Problem";
import EditorV0 from "./EditorV0";
import WinningCard from "../Dashboard/WinningCard";
import { useSelector } from "react-redux";
import Confetti from "react-confetti";
import { Loader, Loader2 } from "../shared/Loader";

export default function Probem_Editor({ username , code , handleCode}: any) {
  const showCard = useSelector((state: any) => state.winCard.showCard);
  const [showConfetti, setShowConfetti] = useState(false);
  const getWinner = useSelector((state : any) => { return state.winCard.winner});

  useEffect(() => {
    if (showCard) {
      setShowConfetti(getWinner == username ? true : false );
      // Stop confetti after a few seconds
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000); // Adjust the duration as needed
      
      return () => clearTimeout(timer);
    }
  }, [showCard]);

  return (
    <div className="relative h-screen w-full grid grid-cols-1 md:grid-cols-[minmax(250px,_1fr)_minmax(400px,_1fr)]">
      <ProblemV0 />
      <EditorV0
      code={code}
      handleCode={handleCode} 
      />
      {showCard && (
        <>
          {showConfetti && <Confetti />}
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <WinningCard />
          </div>
        </>
      )}
    </div>
  );
}
