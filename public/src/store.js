import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./reducers/userSlice";
import { movieSlice } from "./reducers/movieSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice
  },
});