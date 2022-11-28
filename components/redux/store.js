import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';

export default store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
