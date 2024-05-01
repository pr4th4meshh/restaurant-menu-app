// 1. Define the cart slice in your Redux store
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const { item, quantity } = action.payload;
      const existingItem = state.items.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ ...item, quantity });
      }
    },
    removeItemFromCart: (state, action) => {
      const { item, quantity } = action.payload;
      const existingItem = state.items.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity -= quantity;
      } else {
        state.items.push({ ...item, quantity });
      }
    },

    // removeItemFromCart: (state, action) => {
    //   const itemId = action.payload;
    //   state.items = state.items.filter((item) => item.id !== itemId);
    // },
    updateCartItemQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const cartItem = state.items.find((item) => item.id === itemId);
      if (cartItem) {
        cartItem.quantity = quantity;
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateCartItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
