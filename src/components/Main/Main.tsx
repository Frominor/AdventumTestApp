import React from "react";
import "./Main.css";
import { NewsItem } from "../NewsItem/NewsItem";
import { LoadingSkeleton } from "../Skeleton/LoadingSkeleton";
import { useTypedSelector } from "../../store";

export const Main: React.FC = () => {
  const State = useTypedSelector((state) => state.Posts);
  return (
    <main>
      {State.Posts.length > 0 ? (
        State.Posts.map((item: any, index: number) => {
          return <NewsItem item={item} arrcount={index}></NewsItem>;
        })
      ) : (
        <>
          {Array(4)
            .fill(0)
            .map((item) => {
              return <LoadingSkeleton></LoadingSkeleton>;
            })}
        </>
      )}
    </main>
  );
};
