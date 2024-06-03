import React from "react";

import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/header/Header";

import { useAppDispatch } from "./store";

import { GetPostsThunk } from "./store/PostsSlice";
import "./styles/App.css";
function App() {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(GetPostsThunk());
  }, []);
  React.useEffect(() => {
    setInterval(() => {
      dispatch(GetPostsThunk());
    }, 30000);
  }, []);
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
