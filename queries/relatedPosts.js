import { gql } from "@apollo/client";

export const RELATED_POSTS = gql`
  query ($categoryId: Int!) {
    posts(where: { categoryId: $categoryId }, first: 5) {
      edges {
        node {
          title
          uri
          id
          categories {
            edges {
              isPrimary
              node {
                name
              }
            }
          }
          featuredImage {
            node {
              mediaItemUrl
              date
            }
          }
        }
      }
    }
  }
`;
