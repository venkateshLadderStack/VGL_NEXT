import { gql } from "@apollo/client";

export const GET_REVIEW_POSTS = gql`
  query {
    posts(
      where: {
        orderby: { field: DATE, order: DESC }
        status: PUBLISH
        tag: "reviews,review"
      }
      first: 15
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

export const GET_MORE_REVIEW_POSTS = gql`
  query ($cursorId: String!) {
    posts(
      where: {
        orderby: { field: DATE, order: DESC }
        status: PUBLISH
        tag: "reviews,review"
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

export const GET_REVIEW_POSTS_BY_CATEGORY = gql`
  query ($categoryId: Int!) {
    posts(
      where: {
        orderby: { field: DATE, order: DESC }
        status: PUBLISH
        tag: "reviews,review"
        categoryId: $categoryId
      }
      first: 15
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

export const GET_MORE_REVIEW_POSTS_BY_CATEGORY = gql`
  query ($cursorId: String!, $categoryId: Int!) {
    posts(
      where: {
        orderby: { field: DATE, order: DESC }
        status: PUBLISH
        tag: "reviews,review"
        categoryId: $categoryId
      }
      after: $cursorId
      first: 9
    ) {
      edges {
        node {
          id
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
