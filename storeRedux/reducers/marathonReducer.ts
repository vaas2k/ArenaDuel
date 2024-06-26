import { marathonMatch } from "@/BACKEND_CALLs/apis";
import problems from "@/public/problems/problems";
import { createSlice  } from "@reduxjs/toolkit";


const initialState = { 
    id : '',
    userID : "",
    problems : []
}

const marathonSlice = createSlice ({ 
    name : 'marathon' ,
    initialState , 
    reducers : {
        setMaraData: (state, action ) => {
            return action.payload ;
        },
        remMaradata : (state) => {
            return {
              id: "",
              userID: "",
              problems: [],
            };
        } 
    }
})

export const { setMaraData , remMaradata } = marathonSlice.actions;
export default marathonSlice.reducer;