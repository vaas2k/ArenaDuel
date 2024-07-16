import { configureStore } from '@reduxjs/toolkit';
import matchReducer from './reducers/matchReducer';
import testCasesReducer from './reducers/testCasesReducer';
import winCard from './reducers/winCard';
import marathonReducer from './reducers/marathonReducer';
import opponentReducer from './reducers/opponentReducer';
import themeReducer from './reducers/themeReducer';

const store = configureStore({
  reducer: {
    matchReducer, 
    testCasesReducer,
    winCard,
    marathonReducer,
    opponentReducer,
    themeReducer
  },
});

export default store;
