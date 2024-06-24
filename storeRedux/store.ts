import { configureStore } from '@reduxjs/toolkit';
import matchReducer from './reducers/matchReducer';
import testCasesReducer from './reducers/testCasesReducer';
import winCard from './reducers/winCard';

const store = configureStore({
  reducer: {
    matchReducer, 
    testCasesReducer,
    winCard
  },
});

export default store;
