import { createSlice } from "@reduxjs/toolkit"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { item, quantity } = action.payload
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id
      )
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        state.items.push({ ...item, quantity })
      }
    },
    removeItemFromCart: (state, action) => {
      const { item, quantity } = action.payload
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id
      )
      if (existingItem) {
        existingItem.quantity -= quantity
      } else {
        state.items.push({ ...item, quantity })
      }
    },
    deleteItemFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    updateCartItemQuantity: (state, action) => {
      const { itemId, quantity } = action.payload
      const cartItem = state.items.find((item) => item.id === itemId)
      if (cartItem) {
        cartItem.quantity = quantity
      }
    },
  },
})

export const { addItemToCart, removeItemFromCart, updateCartItemQuantity, deleteItemFromCart } =
  cartSlice.actions

export default cartSlice.reducer
