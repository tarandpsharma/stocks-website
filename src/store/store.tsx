import { configureStore } from '@reduxjs/toolkit'
import stockReducer from '../stockSlice/stockSlice';

export const store = configureStore({
  reducer: {
    stock: stockReducer,
  },
})