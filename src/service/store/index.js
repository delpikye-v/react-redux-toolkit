import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/moveReducer";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;
