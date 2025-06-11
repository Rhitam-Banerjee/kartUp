import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: {},
  isLoggedIn: false
}
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, { payload }) => {
      state.userDetails = { ...state.userDetails, payload };
    },
    setIsLoggedIn: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
  },
});

export const { setUserDetails, setIsLoggedIn } = userSlice.actions;

export default userSlice.reducer;