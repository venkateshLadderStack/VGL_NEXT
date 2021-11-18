import { gql } from "@apollo/client";

export const PRESS_OLD = gql`
  {
    page(id: "806", idType: DATABASE_ID) {
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
      content
    }
  }
`;
