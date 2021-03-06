import { gql } from "@apollo/client";

export const getReviews = gql`
  query {
    page(id: "14156", idType: DATABASE_ID) {
      seo {
        canonical
        metaDesc
        title
        schema {
          raw
        }
        twitterDescription
        twitterTitle
        twitterImage {
          mediaItemUrl
        }
        opengraphUrl
        opengraphType
        opengraphTitle
        opengraphPublishedTime
        opengraphModifiedTime
        opengraphImage {
          mediaItemUrl
        }
        metaRobotsNoindex
        metaRobotsNofollow
        metaKeywords
        opengraphDescription
      }
      link
    }
    categories {
      edges {
        node {
          id
          slug
          name
          databaseId
        }
      }
    }
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
