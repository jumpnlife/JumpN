import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../components/testredux/counterSlice';
import testReducer from '../components/testredux/testSlice';
import loginReducer from './slice/loginSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    test: testReducer,
    login: loginReducer,
  },
});
