import React from "react";
import { NewsItem } from "../NewsItem/NewsItem";
import { LoadingSkeleton } from "../Skeleton/LoadingSkeleton";
import { useTypedSelector } from "../../store";
import { ItemProps } from "../../interfaces/Item";
import "./Main.css";
export const Main: React.FC = () => {
  const State = useTypedSelector((state) => state.Posts);

  return (
    <main>
      {State.Posts.length > 0 ? (
        State.RenderPosts.map(
          (item: { NewsFor: string; Posts: ItemProps[] }, index: number) => {
            return (
              <NewsItem item={item} arrcount={index} key={index}></NewsItem>
            );
          }
        )
      ) : (
        <>
          {Array(4)
            .fill(0)
            .map((item, index) => {
              return <LoadingSkeleton key={index}></LoadingSkeleton>;
            })}
        </>
      )}
    </main>
  );
};
