// src/store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartCount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementCartCount: (state) => {
      state.cartCount += 1;
    },
    resetCartCount: (state) => {
      state.cartCount = 0;
    },
  },
});

export const { incrementCartCount, resetCartCount } = cartSlice.actions;

export default cartSlice.reducer;
