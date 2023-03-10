import { configurestore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartslice';

export const store = configurestore({
    reducer:{
      cart: cartReducer,
    }
})