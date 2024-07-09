import { createSlice } from '@reduxjs/toolkit'


interface winCardType { 
    showCard : boolean,
    winner : string,
    winnerImage : string,
    solution : any,
    by : string,
    loser : string ,
    loserImage : string,
    time : Number ,
    memory : Number,
    rating : Number 
}

const initialState : winCardType = { 
    showCard : false,
    winner : '',
    winnerImage : '',
    solution : {},
    by : '',
    loser : '',
    loserImage : '',
    time : 0,
    memory : 0,
    rating : 0
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
            state.rating = action.payload.rating
        },
        updateStats ( state , action ) {
            state.time = action.payload.time ; 
            state.memory = action.payload.memory;
        }
        ,
        closeCard (state) {
            state.showCard = false;
            state.winnerImage = '';
            state.solution = '';
            state.winner = '';
            state.loserImage = '';
            state.loser = '';
            state.time = 0;
            state.memory = 0;
            state.rating = 0;
        }
    }
})

export const { showCard , closeCard , updateStats} = WinCardSlice.actions;
export default WinCardSlice.reducer;