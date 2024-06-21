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
    name : 'compiler',
    initialState ,
    reducers : {
        setTestCases : (state, action ) => {

        },
        updateTestCases : (state , action ) => {

        },
        emptyTestCases : (state , action) => {

        } 
    }
})

export const {setTestCases,updateTestCases,emptyTestCases} = testCasesSlice.actions;
export default testCasesSlice.reducer;