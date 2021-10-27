import { gql } from "@apollo/client";

export const GET_MORE_POSTS = gql`
  query ($cursorId: String!) {
    posts(
      where: { orderby: { field: DATE, order: DESC }, status: PUBLISH }
      after: $cursorId
      first: 10
    ) {
      edges {
        node {
          id
          categories {
            nodes {
              slug
              name
              databaseId
            }
          }
          featuredImage {
            node {
              link
              mediaItemUrl
              slug
              sourceUrl
            }
          }
          excerpt
          date
          slug
          title
          databaseId
          status
          uri
          author {
            node {
              name
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
