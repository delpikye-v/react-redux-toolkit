import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiKey } from "../..";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  // "movies/fetchAsyncShows",
  async (page) => {
    const response = await axios.get(`3/discover/movie`, {
      params: {
        sort_by: "popularity.desc",
        api_key: ApiKey,
        page,
      },
    });
    return response.data;
  }
);

const initialState = {
  listMovies: [],
  totalMovives: 0,
  page: 1,
  shows: [],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.listMovies = payload;
    },
  },

  extraReducers: {
    [fetchMovies.pending]: () => {
      // console.log("pending");
    },

    [fetchMovies.fulfilled]: (state, { payload }) => {
      console.log("fetch Successfully!");
      let { total_results, results, page } = payload;
      return {
        ...state,
        listMovies: results,
        page,
        totalMovives: total_results,
      };
    },

    [fetchMovies.rejected]: () => {
      // console.log("Rejected!");
    },
  },
});

export default movieSlice.reducer;
