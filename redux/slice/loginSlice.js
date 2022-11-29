import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginAction: state => {
      state.value = true;
    },
    logoutAction: state => {
      state.value = false;
    },
  },
});

export const loginState = state => state.login.value;

export const {loginAction, logoutAction} = loginSlice.actions;
export default loginSlice.reducer;
