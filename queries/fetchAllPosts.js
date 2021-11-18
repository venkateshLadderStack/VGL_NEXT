import { gql } from "@apollo/client";

export const FETCH_ALL = gql`
  query ($cursor: String!) {
    posts(after: $cursor, first: 100) {
      edges {
        cursor
        node {
          id
          title
          uri
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

async function PostsData(query) {
  const URL = "https://cms.verygoodlight.com/graphql/";

  const options = {
    endpoint: URL,
    method: "POST",
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error("Products not fetched");
  }
}

export async function getPaginatedPosts(cursor) {
  const query = `{
      posts(after: "${cursor}", first: 100) {
        edges {
          cursor
          node {
            id
            
            
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }`;

  const response = await PostsData(query);

  return { posts: response };
}

export async function getFirstPaginatedPosts(cursor) {
  const query = `{
      posts(first: 100) {
        edges {
          cursor
          node {
            id
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }`;

  const response = await PostsData(query);

  return { response };
}
