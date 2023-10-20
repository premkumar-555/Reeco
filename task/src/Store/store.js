import { configureStore } from '@reduxjs/toolkit'
import orderReducer from '../components/Home/redux_state_slices/orderSlice'
export const store = configureStore({
  reducer: {
    order: orderReducer,
  },
})