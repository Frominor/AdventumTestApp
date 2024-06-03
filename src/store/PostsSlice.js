import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
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
        state.Posts.sort((a, b) => {
          return (
            new Date(b.created_date).getTime() -
            new Date(a.created_date).getTime()
          );
        });
        let arr = [];
        for (let k of state.Posts) {
          if (!arr.includes(new Date(k.created_date).toLocaleDateString())) {
            arr.push(new Date(k.created_date).toLocaleDateString());
          }
        }
        let newarr = arr.map((item) => {
          return { NewsFor: item, Posts: [] };
        });

        for (let k of state.Posts) {
          for (let z of newarr) {
            if (new Date(k.created_date).toLocaleDateString() == z.NewsFor) {
              z.Posts.push(k);
            }
          }
        }
        state.Posts = newarr;
      })
      .addCase(GetPostsThunk.rejected, (state) => {
        state.Loading = false;
      });
  },
});
export const GetPostsSliceReducer = GetPostsSlice.reducer;
