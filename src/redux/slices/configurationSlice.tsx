import { createSlice } from "@reduxjs/toolkit"

const configurationSlice = createSlice({
  initialState: {
    isDrawerOpen: false,
    selectedItem: null,
  },
  name: "listDrawer",
  reducers: {
    openDrawer: (state, action) => {
      state.isDrawerOpen = true,
      state.selectedItem = action.payload;
    },
    closeDrawer: (state) => {
      state.isDrawerOpen = false
      state.selectedItem = null;
    },
  },
})

export const { openDrawer, closeDrawer } = configurationSlice.actions

export default configurationSlice.reducer