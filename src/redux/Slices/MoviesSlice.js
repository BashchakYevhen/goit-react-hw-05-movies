import { createSlice } from '@reduxjs/toolkit';
import { Trend } from 'redux/operations';

console.dir(Trend.fulfilled);
const MoviesSlice = createSlice({
  name: 'Auth',
  initialState: {},
  reducers: {},
});

export default MoviesSlice.reducer;
