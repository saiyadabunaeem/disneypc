import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieReducer from '../features/movie/movieslice';
import userReducer from '../features/user/userslice';
import userslice from '../features/user/userslice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer
  },
});
