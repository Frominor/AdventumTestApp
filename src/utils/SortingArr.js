export default function SortingAndSetScturctureArr(state) {
  state.Posts.sort((a, b) => {
    return (
      new Date(b.created_date).getTime() - new Date(a.created_date).getTime()
    );
  });
  let arr = [];
  for (let k of state.Posts) {
    if (!arr.includes(new Date(k.created_date).toLocaleDateString())) {
      arr.push(new Date(k.created_date).toLocaleDateString());
    }
  }
  let newarr = arr.map((item) => {
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
