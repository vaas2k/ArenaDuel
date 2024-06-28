import React, { useEffect, useState } from 'react'
import WinningCard from '@/components/Dashboard/WinningCard'
import { useSelector } from 'react-redux';
const Winner = () => {

  
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
    <div className='flex items-center justify-center'>
        <WinningCard />
    </div>
)
}

export default Winner