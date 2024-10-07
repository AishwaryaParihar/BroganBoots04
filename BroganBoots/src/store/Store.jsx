import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import counterReducer from './counterSlice'
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    user : userReducer,
    counter: counterReducer,
    cart: cartReducer,
  },
})