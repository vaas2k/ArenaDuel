import { createSlice } from '@reduxjs/toolkit'


interface winCardType { 
    showCard : boolean,
    winner : string,
    winnerImage : string,
    solution : any,
    by : string,
    loser : string ,
    loserImage : string 
}

const initialState : winCardType = { 
    showCard : false,
    winner : '',
    winnerImage : '',
    solution : {},
    by : '',
    loser : '',
    loserImage : ''
}

const WinCardSlice = createSlice({
    name : 'winningcard',
    initialState,
    reducers : {
        showCard ( state , action ) {
            console.log(action.payload);
            state.showCard = true;
            state.winnerImage = action.payload.winnerImage;
            state.solution = action.payload.solution;
            state.winner = action.payload.winner;
            state.loserImage = action.payload.loserImage;
            state.loser = action.payload.loser;
            state.by = action.payload.by
        },
        closeCard (state) {
            state.showCard = false;
            state.winnerImage = '';
            state.solution = '';
            state.winner = '';
            state.loserImage = '';
            state.loser = '';
        }
    }
})

export const { showCard , closeCard} = WinCardSlice.actions;
export default WinCardSlice.reducer;