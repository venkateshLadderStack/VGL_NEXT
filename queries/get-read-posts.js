import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  createHttpLink,
} from "@apollo/client";

export const getReadPosts = gql`
  query ($seoCategoryId: ID!) {
    category(id: $seoCategoryId, idType: DATABASE_ID) {
      slug
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
    }
    posts(
      where: {
        orderby: { field: DATE, order: DESC }
        status: PUBLISH
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
          featured_image_2 {
            featuredImage2 {
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
          bylines {
            edges {
              node {
                name
                databaseId
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
