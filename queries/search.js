import { gql } from "@apollo/client";

export const SEARCH_POSTS = gql`
  query ($title: String!) {
    posts(
      where: { search: $title, orderby: { field: DATE, order: DESC } }
      first: 30
    ) {
      edges {
        node {
          id
          title
          uri
          featuredImage {
            node {
              mediaItemUrl
              date
            }
          }
          excerpt
          date
          author {
            node {
              name
            }
          }
        }
      }
    }
  }
`;
