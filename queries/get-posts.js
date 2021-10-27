import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  createHttpLink,
} from "@apollo/client";

export const getPosts = gql`
  query {
    posts(
      where: { orderby: { field: DATE, order: DESC }, status: PUBLISH }
      first: 21
    ) {
      edges {
        node {
          id
          subHeading {
            dontShowOnHomePage
          }
          featured_image_2 {
            featuredImage2 {
              mediaItemUrl
            }
          }
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
    reviews: posts(
      where: {
        tag: "reviews"
        orderby: { field: DATE, order: DESC }
        status: PUBLISH
      }
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
    }
    celebs: posts(
      where: {
        tag: "celebrities"
        orderby: { field: DATE, order: DESC }
        status: PUBLISH
      }
      first: 10
    ) {
      edges {
        node {
          id
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          excerpt
          date
          slug
          title
          author {
            node {
              name
            }
          }
          categories {
            nodes {
              name
            }
          }
          databaseId
          status
          uri
          subHeading {
            celebrity
          }
        }
      }
    }
    seoData: page(id: "cG9zdDoxODIxMg==") {
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
  }
`;
