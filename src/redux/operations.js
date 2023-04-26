import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTrend } from 'service/fetch';
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';

export const Trend = createAsyncThunk('', async (_, thunkApi) => {
  try {
    const response = await fetchTrend();
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    NotificationManager.error(error.message, '', 5000);
  }
});
