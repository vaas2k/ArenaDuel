import { createSlice } from "@reduxjs/toolkit";


interface testCaseType  {
    userID: string,
    type : string,
    passed : number | 0,
    failedCase : {},
    errorMessage: string,
    total : number | 0
}

const initialState : testCaseType =  {
    
    userID: '',
    type : '',
    passed : 0,
    failedCase : {},
    errorMessage: "",
    total : 0

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
      state.total = 0;
    },
  },
});

export const {setTestCases,emptyTestCases} = testCasesSlice.actions;
export default testCasesSlice.reducer;