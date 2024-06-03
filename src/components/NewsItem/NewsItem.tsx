import React from "react";
import "./NewsItem.css";
import { useTypedSelector } from "../../store";
import { ItemProps } from "../../interfaces/Item";

interface NewsItemProps {
  item: { NewsFor: string; Posts: ItemProps[] };
  arrcount: number;
}
export const NewsItem: React.FC<NewsItemProps> = ({ item, arrcount }) => {
  const State = useTypedSelector((state: any) => state.Posts);

  return (
    <div className="NewsItem" key={arrcount}>
      <h2 className="NewsItem_date">News for {item.NewsFor}</h2>
      {item.Posts.map((item: ItemProps, index: number) => {
        return (
          <a
            key={index}
            href={item.url}
            className={
              State.Posts[arrcount]?.Posts.length - 1 > index
                ? "NewsItem_main UnderLine"
                : "NewsItem_main"
            }
          >
            <div className="NewItem_main_content">
              <img
                className="NewsItem_img"
                src={item?.multimedia[0].url}
                loading="lazy"
                alt="img"
              ></img>
              <div>
                <h4 className="CNN">CNN</h4>
                <p className="NewsItem_main_desciption">{item.abstract}</p>
                <span className="NewsPostedDate">{item.created_at}</span>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};
