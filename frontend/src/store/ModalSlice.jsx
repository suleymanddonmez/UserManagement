import { createSlice } from "@reduxjs/toolkit";

const modalSizes = {
  small: "small",
  medium: "medium",
  large: "large",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    open: false,
    icon: null,
    title: null,
    context: null,
    size: modalSizes.medium,
    handleClose: null,
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = true;
      state.title = action.payload.title;
      state.context = action.payload.context;
      state.handleClose = action.payload.handleClose;
    },
    close: (state) => {
      if (state.handleClose) {
        state.handleClose?.();
      }
      state.open = false;
      state = modalSlice.getInitialState();
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.startsWith("@@redux/INIT") || action.type.startsWith("@@INIT"),
      (state) => {
        state = modalSlice.getInitialState();
      }
    );
  },
});

export const { setOpen, close } = modalSlice.actions;

export const open = (state) => state.modal.open;
export const icon = (state) => state.modal.icon;
export const title = (state) => state.modal.title;
export const context = (state) => state.modal.context;
export const size = (state) => modalSizes?.[state.modal.size] || modalSizes.medium;

export default modalSlice.reducer;
