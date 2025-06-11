import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
}
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductArr: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
  },
});

export const { setProductArr } = productSlice.actions;

export default productSlice.reducer;