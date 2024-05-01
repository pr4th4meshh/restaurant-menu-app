import { configureStore } from "@reduxjs/toolkit"
import { menuSlice } from "./slices/menuSlice"
import drawerReducer  from "./slices/configurationSlice"
import cartReducer from "./slices/cartSlice"

export const store = configureStore({
  reducer: {
    [menuSlice.reducerPath]: menuSlice.reducer,
    drawer: drawerReducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menuSlice.middleware),
})
