import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/authSlice';
import MoviesSlice from './Slices/MoviesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: MoviesSlice,
  },
});
