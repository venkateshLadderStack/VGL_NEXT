import { gql } from "@apollo/client";

export const getCategories = gql`
  query {
    categories {
      nodes {
        name
        slug
      }
    }
  }
`;
