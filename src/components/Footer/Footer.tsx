import React from "react";

import { useInView } from "react-intersection-observer";

import { Loader } from "../Loader/Loader";

import { useAppDispatch, useTypedSelector } from "../../store";
import { LazyLoading, SetLoading } from "../../store/PostsSlice";

import "./Footer.css";

export const Footer: React.FC = () => {
  const State = useTypedSelector((state) => state.Posts);
  const [Count, SetCount] = React.useState(1);
  const dispatch = useAppDispatch();
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  React.useEffect(() => {
    dispatch(LazyLoading(Count));
  }, []);
  React.useEffect(() => {
    if (inView) {
      if (State.Posts.length !== Count) {
        SetCount((prev) => prev + 1);
        dispatch(LazyLoading(Count));
        dispatch(SetLoading(true));
      } else {
        dispatch(SetLoading(false));
      }
    }
  }, [inView]);
  return (
    <footer ref={ref}>
      {State.Loading && <Loader></Loader>}

      <ul className="footer_menu">
        <li>Login</li>
        <li>About Us</li>
        <li>Publishers</li>
        <li>Sitemap</li>
      </ul>
      <div>
        <h5 className="PowBy">Powered by</h5>
        <div className="NEWSAPI_BOX">
          <span className="News">NEWS</span>
          <span className="API">API</span>
        </div>
      </div>
      <p className="InspiredBy">© 2023 Besider. Inspired by Insider</p>
    </footer>
  );
};
