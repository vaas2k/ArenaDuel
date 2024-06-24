import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    
    userID: '',
    type : '',
    passed : 0,
    failedCase : {},
    errorMessage: "",
    total : ''

};


const testCasesSlice = createSlice({
  name: "compiler",
  initialState,
  reducers: {
    setTestCases: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
    emptyTestCases: (state) => {
      state.userID = "";
      state.type = "";
      state.passed = 0;
      state.failedCase = {};
      state.errorMessage = "";
      state.total = "";
    },
  },
});

export const {setTestCases,emptyTestCases} = testCasesSlice.actions;
export default testCasesSlice.reducer;