import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import SortingAndSetScturctureArr from "../utils/SortingArr";
// interface InitialState {
//   Posts: { created_date: string,text:string }[];
//   Loading: boolean;
// }
const initialState = {
  Posts: [],
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
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(GetPostsThunk.pending, (state) => {
        state.Loading = true;
      })
      .addCase(GetPostsThunk.fulfilled, (state, action) => {
        state.Loading = false;

        state.Posts = action.payload.results;
        SortingAndSetScturctureArr(state);
      })
      .addCase(GetPostsThunk.rejected, (state) => {
        state.Loading = false;
      });
  },
});
export const GetPostsSliceReducer = GetPostsSlice.reducer;
