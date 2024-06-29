import { createSlice } from "@reduxjs/toolkit";


interface MatchData1v1 { 
    id : string ,
    room_id : string,
    problem_id : string , 
    p1 : string ,
    p2 : string,
    winner : string | null ,
    totalCases : number | 0
}
const initialState : MatchData1v1 = {
    id : '',
    room_id : '',
    problem_id : '', 
    p1 : '',
    p2 : '',
    winner : null,
    totalCases : 0
}

const matchSlice = createSlice({
    name : 'matchdata',
    initialState,
    reducers : {
        setMatchData : (state , action) => {
            state.id = action.payload.id
            state.room_id = action.payload.room_id
            state.problem_id = action.payload.problem_id
            state.p1 = action.payload.p1
            state.p2 = action.payload.p2
            state.totalCases = action.payload.totalCases
        },
        remMatchData : (state) => {
            state.room_id = '';
            state.problem_id = '';
            state.p1 = '';
            state.p2 = '';
            state.totalCases = 0;
        }
    }
})

export const { setMatchData, remMatchData } = matchSlice.actions;
export default matchSlice.reducer;