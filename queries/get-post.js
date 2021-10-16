import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  createHttpLink,
} from "@apollo/client";

export const getPost = gql`
  query ($postId: ID!) {
    post(id: $postId) {
      subHeading {
        h2Heading
      }
      content
      date
      uri
      title
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      featured_image_2 {
        featuredImage2 {
          sourceUrl
          mediaItemUrl
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      categories {
        edges {
          isPrimary
          node {
            databaseId
            name
          }
        }
      }
      bylines {
        edges {
          node {
            name
            databaseId
            bylineImage {
              image {
                sourceUrl
              }
            }
          }
        }
      }
      seo {
        metaDesc
        metaKeywords
        opengraphAuthor
        opengraphDescription
        opengraphPublishedTime
        opengraphModifiedTime
        opengraphTitle
        opengraphImage {
          mediaItemUrl
        }
        opengraphType
        opengraphUrl
        title
        twitterDescription
        twitterTitle
        twitterImage {
          mediaItemUrl
        }
        canonical
        schema {
          pageType
          raw
          articleType
        }
      }
      link
    }
  }
`;
