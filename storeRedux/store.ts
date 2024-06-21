import { configureStore } from '@reduxjs/toolkit';
import matchReducer from './reducers/matchReducer';
import testCasesReducer from './reducers/testCasesReducer';

const store = configureStore({
  reducer: {
    matchReducer, 
    testCasesReducer,
  },
});

export default store;
