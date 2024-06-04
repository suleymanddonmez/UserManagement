import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    open: true,
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    toggle: (state) => {
      state.open = !state.open;
    },
  },
});

export const { setType, toggle } = sidebarSlice.actions;

export const open = (state) => state.sidebar.open;

export default sidebarSlice.reducer;
