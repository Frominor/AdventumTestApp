import React from "react";
import { useInView } from "react-intersection-observer";
import { Loader } from "../Loader/Loader";
import { useTypedSelector } from "../../store";
import "./Footer.css";

export const Footer: React.FC = ({}) => {
  const State = useTypedSelector((state) => state.Posts);
  const [IsLoading, SetisLoading] = React.useState<boolean>(false);
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  React.useEffect(() => {
    if (inView) {
    }
    SetisLoading(true);
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
