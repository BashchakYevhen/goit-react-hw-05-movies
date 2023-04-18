import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
};
const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
