import { gql } from "@apollo/client";

export const GET_MORE_POSTS = gql`
  query ($cursorId: String!, $categoryId: Int!) {
    posts(
      where: {
        orderby: { field: DATE, order: DESC }
        status: PUBLISH
        categoryId: $categoryId
      }
      after: $cursorId
      first: 9
    ) {
      edges {
        node {
          author {
            node {
              name
            }
          }
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          categories {
            edges {
              node {
                databaseId
                uri
                slug
                name
              }
            }
          }

          uri
          id
          title
          slug
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
