import { createSlice } from "@reduxjs/toolkit";


interface opponent {
  image: string | undefined;
  username: string;
  email: string;
  name: string;
  rating: string;
}

const initialState : opponent =  {
    
    image: '',
  username: '',
  email: '',
  name: '',
  rating: ''

};


const opponentSlice = createSlice({
  name: "opponent",
  initialState,
  reducers: {
    setOpponent: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
    emptyOpponent: (state) => {
        state.image= '',
        state.username= '',
        state.email= '',
        state.name= '',
        state.rating= ''
    },
  },
});

export const {setOpponent,emptyOpponent} = opponentSlice.actions;
export default opponentSlice.reducer;