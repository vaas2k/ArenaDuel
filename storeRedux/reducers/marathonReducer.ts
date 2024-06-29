import { createSlice  } from "@reduxjs/toolkit";


interface marathonSlice { 
    id : string , 
    userID : string ,
    problems : number[]
}

const initialState : any = { 
    id : '',
    userID : "",
    problems : []
}

const marathonSlice = createSlice ({ 
    name : 'marathon' ,
    initialState , 
    reducers : {
        setMaraData: ( state, action ) => {
            return action.payload ;
        },
        remMaradata : (state) => {
            return {
              id: "",
              userID: "",
              problems: [],
            };
        },
        updateProblems : (state, action) => {
            state.problems.push(action.payload);
        } 
    }
})

export const { setMaraData , remMaradata , updateProblems } = marathonSlice.actions;
export default marathonSlice.reducer;