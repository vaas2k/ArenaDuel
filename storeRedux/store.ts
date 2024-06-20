import { configureStore } from '@reduxjs/toolkit';

// Define your reducers here
import matchReducer from './reducers/matchReducer';

const store = configureStore({
  reducer: {
    matchReducer, // Add more reducers as needed
  },
});

export default store;
