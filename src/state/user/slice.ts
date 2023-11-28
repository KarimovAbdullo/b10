/* eslint-disable */
import AsyncStorage from '@react-native-community/async-storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItalianItem } from '../../api/data/FoodData';
import { UserState } from './types';

const initialState: UserState = {
  loading: false,
  token: null,
  products: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ItalianItem>) => {
      state.products.push(action.payload);
    },

    removeFromCart: (state, action) => {
      const index = state.products.findIndex(
        item => item.id === action.payload,
      );
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    },
  },

});



export const { addToCart, removeFromCart } = userSlice.actions;

export const userReducer = userSlice.reducer
