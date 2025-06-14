import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allMovies: []
}
export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setProductArr: (state, { payload }) => {
      state.allMovies = payload;
    },
  },
});

export const { setProductArr } = movieSlice.actions;

export default movieSlice.reducer;