import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    room_id : '',
    problem_id : '', 
    p1 : '',
    p2 : '',
    p1PassedCasses : 0,
    p2PassedCasses : 0,
    winner : null,
}

const matchSlice = createSlice({
    name : 'matchdata',
    initialState,
    reducers : {
        setData : (state , action) => {
            state.room_id = action.payload.room_id
            state.problem_id = action.payload.problem_id
            state.p1 = action.payload.p1
            state.p2 = action.payload.p2
        },
        remData : (state) => {
            state.room_id = ''
            state.problem_id = ''
            state.p1 = ''
            state.p2 = ''        
        },
        updateData : (state,action) => {

        }
    }
})

export const { setData, remData , updateData } = matchSlice.actions;
export default matchSlice.reducer;