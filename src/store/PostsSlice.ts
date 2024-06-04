import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import SortingAndSetScturctureArr from "../utils/SortingArr";

import { InitialState } from "../interfaces/IState";

import axios from "axios";
const initialState: InitialState = {
  Posts: [],
  AllNotChangedPostStructure: [],
  RenderPosts: [],
  Loading: false,
};
export const GetPostsThunk = createAsyncThunk("Posts/GetPosts", async () => {
  const { data } = await axios.get(
    `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${process.env.REACT_APP_API_KEY}`
  );
  return data;
});
const GetPostsSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    LazyLoading: (state: InitialState, action: PayloadAction<number>) => {
      state.RenderPosts = [...state.RenderPosts, state.Posts[action.payload]];
    },
    SetLoading: (state, action) => {
      state.Loading = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(GetPostsThunk.pending, (state) => {
        state.Loading = true;
      })
      .addCase(GetPostsThunk.fulfilled, (state, action) => {
        if (
          state.AllNotChangedPostStructure.length !==
          action.payload.results.length
        ) {
          state.AllNotChangedPostStructure = action.payload.results;
          state.Posts = action.payload.results;
          SortingAndSetScturctureArr(state);
          state.RenderPosts = [state.Posts[0]];
        }
        state.Loading = false;
      })
      .addCase(GetPostsThunk.rejected, (state) => {
        state.Loading = false;
      });
  },
});
export const GetPostsSliceReducer = GetPostsSlice.reducer;
export const { LazyLoading, SetLoading } = GetPostsSlice.actions;
