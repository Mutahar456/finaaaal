import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../Store/Slices/slice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});

export default store;
