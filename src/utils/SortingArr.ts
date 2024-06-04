import { ItemProps } from "../interfaces/Item";
export default function SortingAndSetScturctureArr(
  state: { Posts: ItemProps[] } | any //не знал,как типизировать :(
) {
  state.Posts.sort((a: ItemProps, b: ItemProps) => {
    return (
      new Date(b.created_date).getTime() - new Date(a.created_date).getTime()
    );
  });
  let arr: string[] = [];
  for (let k of state.Posts) {
    if (!arr.includes(new Date(k.created_date).toLocaleDateString())) {
      arr.push(new Date(k.created_date).toLocaleDateString());
    }
  }
  let newarr: { NewsFor: {}; Posts: {}[] }[] = arr.map((item) => {
    return { NewsFor: item, Posts: [] };
  });

  for (let k of state.Posts) {
    for (let z of newarr) {
      if (new Date(k.created_date).toLocaleDateString() == z.NewsFor) {
        z.Posts.push(k);
      }
    }
  }
  state.Posts = newarr;
}
