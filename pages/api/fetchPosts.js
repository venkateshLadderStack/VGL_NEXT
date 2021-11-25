// export const fetchAllPosts = async () => {
//   let bigArr = [];
//   let i = 1;
//   do {
//     const pageres = await fetch(
//       `https://cms.verygoodlight.com/wp-json/wp/v2/posts?per_page=100&page=${i}`
//     );
//     const pageposts = await pageres.json();
//     bigArr = [...bigArr, ...pageposts];
//     i++;
//   } while (i < 11);

//   return {
//     products: bigArr,
//   };
// };
import client from "../../apollo/client";
import { getPaginatedPosts } from "../../queries/fetchAllPosts";
import { getAfterPosts, getFirstPosts } from "../../queries/get-posts";

export const fetchAllPosts = async () => {
  let currCursor;
  let bigArr = [];
  const { data } = await client.query({
    query: getFirstPosts,
  });
  currCursor = data?.posts?.edges[data?.posts?.edges.length - 1]?.cursor;
  bigArr = [...bigArr, ...data?.posts?.edges];

  let newCursor = currCursor;
  let hasNext = data?.posts?.pageInfo?.hasNextPage;
  let i = 0;
  let newOne;
  do {
    newCursor = bigArr[bigArr.length - 1].cursor;
    newOne = await client.query({
      query: getAfterPosts,
      variables: {
        cursor: newCursor,
      },
    });

    bigArr = [...bigArr, ...newOne.data.posts.edges];
    hasNext = newOne?.data.posts.pageInfo?.hasNextPage;
    i++;
  } while (hasNext);

  return {
    posts: bigArr,
  };
};
