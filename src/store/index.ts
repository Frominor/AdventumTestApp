import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { GetPostsSliceReducer } from "./PostsSlice";

const store = configureStore({
  reducer: {
    Posts: GetPostsSliceReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); //This is used to perform action
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
