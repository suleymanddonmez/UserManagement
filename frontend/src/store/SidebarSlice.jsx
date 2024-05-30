import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    open: 1,
    width: 240,
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

export const width = (state) => state.sidebar.width;
export const open = (state) => state.sidebar.open;

export default sidebarSlice.reducer;
