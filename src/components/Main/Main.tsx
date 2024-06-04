import React from "react";
import { NewsItem } from "../NewsItem/NewsItem";
import { LoadingSkeleton } from "../Skeleton/LoadingSkeleton";
import { useTypedSelector } from "../../store";

import "./Main.css";
export const Main: React.FC = () => {
  const State = useTypedSelector((state) => state.Posts);

  return (
    <main>
      {State.Posts.length > 0 ? (
        State.RenderPosts.map((item, index) => {
          return <NewsItem item={item} arrcount={index} key={index}></NewsItem>;
        })
      ) : (
        <>
          {Array(6)
            .fill(0)
            .map((item, index) => {
              return (
                <LoadingSkeleton
                  Rows={1}
                  BlocksWidthAndHeight={[
                    { width: 170, height: 26 },
                    { width: 100, height: 75 },
                    { width: 210, height: 110 },
                    { width: 150, height: 17 },
                  ]}
                  key={index}
                ></LoadingSkeleton>
              );
            })}
        </>
      )}
    </main>
  );
};
