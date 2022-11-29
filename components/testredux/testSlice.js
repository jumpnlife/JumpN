import {createSlice} from '@reduxjs/toolkit';

export const testSlice = createSlice({
  name: 'test',
  initialState: {
    value: 1001,
  },
  //   reducers: {
  //     testShow: state => {
  //       state.value += 1;
  //     },
  //   },
});
// export const {testShow} = testSlice.actions;
export const testState = state => state.test.value;
export default testSlice.reducer;
