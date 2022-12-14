import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: true,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    // 直接对actions解构拿到payload
    // incrementByAmount: (state, {payload}) => {
    //   state.value += payload;
    // },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    changeVualue: state => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount, changeVualue} =
  counterSlice.actions;
export const selectCount = state => state.counter.value;
export default counterSlice.reducer;
