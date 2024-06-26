import { configureStore } from '@reduxjs/toolkit';
import matchReducer from './reducers/matchReducer';
import testCasesReducer from './reducers/testCasesReducer';
import winCard from './reducers/winCard';
import marathonReducer from './reducers/marathonReducer';

const store = configureStore({
  reducer: {
    matchReducer, 
    testCasesReducer,
    winCard,
    marathonReducer
  },
});

export default store;
