import React from "react";

import { useInView } from "react-intersection-observer";

import { Loader } from "../Loader/Loader";

import { useAppDispatch, useTypedSelector } from "../../store";
import { LazyLoading } from "../../store/PostsSlice";

import "./Footer.css";

export const Footer: React.FC = ({}) => {
  // console.log(
  //   new Date("2024-06-03T13:41:50-04:00").toLocaleDateString("en-us", {
  //     month: "long",
  //   })
  // );
  // const dateObj = new Date("2024-06-03T13:41:50-04:00");
  // const month = dateObj.getUTCMonth() + 1; // months from 1-12
  // const day = dateObj.getUTCDate();
  // const year = dateObj.getUTCFullYear();

  // const newDate = year + "/" + month + "/" + day;

  // console.log(newDate);
  // console.log(new Date("2024-06-03T13:41:50-04:00").getUTCDay());
  // console.log(new Date("2024-06-03T13:41:50-04:00").getUTCFullYear());
  const [IsLoading, SetisLoading] = React.useState<boolean>(false);
  const State = useTypedSelector((state) => state.Posts);
  console.log(State);
  const [Count, SetCount] = React.useState(1);
  const dispatch = useAppDispatch();
  const { ref, inView } = useInView({
    threshold: 0.8,
  });
  React.useEffect(() => {
    dispatch(LazyLoading({ Count }));
  }, []);
  React.useEffect(() => {
    if (inView) {
      if (State.Posts.length !== Count) {
        SetCount((prev) => prev + 1);
        dispatch(LazyLoading(Count));
        SetisLoading(true);
      }
    }
  }, [inView]);
  return (
    <footer ref={ref}>
      {IsLoading && <Loader></Loader>}

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
