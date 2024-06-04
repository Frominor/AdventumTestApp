import { ItemProps } from "./Item";

export interface InitialState {
  AllNotChangedPostStructure: ItemProps[];
  Posts: { NewsFor: string; Posts: ItemProps[] }[];
  RenderPosts: { NewsFor: string; Posts: ItemProps[] }[];
  Loading: boolean;
}
