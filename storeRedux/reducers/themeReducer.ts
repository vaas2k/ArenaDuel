import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    theme : 'dark'
}

const themeSlice = createSlice({
    name : 'theme',
    initialState,
    reducers : {
        setLight : (state) =>{
            state.theme = 'light';
        },
        setDark : (state ) => {
            state.theme = 'dark';
        },
    }
})

export const {setDark, setLight } = themeSlice.actions;
export default themeSlice.reducer;