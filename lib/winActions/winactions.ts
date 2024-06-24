import { onWin } from "@/BACKEND_CALLs/apis";
export const useTimeOutWin = async ({player2 , P1PassedCases , P2PassedCases , currentplayer, matchInfo } : any) => {
    

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
    
          const req : any = await onWin(data);
            if(req.status == 200) {
              console.log(req.data);
              // Show the winning card
              return {
                winner : winner.username,
                soluton :'good for now',
                winnerImage : winner.id == currentplayer.id ? currentplayer.image : player2.image,
                showCard : true,
                by : 'timeout',
                loser : loser.username,
                loserImage : winner.id == currentplayer.id ? player2.image : currentplayer.image
              };
            }
          
        } catch (error) {
          console.log(error);
        }
}

export const SubmissionWin = async () => {
    
}

