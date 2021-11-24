import React from "react";
import NextSeo from "../../components/SeoHead/seo";
import Masonry from "react-masonry-css";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { ApolloClient, gql, InMemoryCache, useLazyQuery } from "@apollo/client";
import { GET_MORE_POSTS } from "../../queries/categories";
import { css } from "@emotion/react";
import { PropagateLoader } from "react-spinners";
import dynamic from "next/dynamic";
import { Context } from "../../context";

const Navbar = dynamic(() => import("../../components/Navbar/Desktop"));
const DesktopFooter = dynamic(() => import("../../components/Footer/Desktop"), {
  loading: () => <p></p>,
});
const Post = dynamic(() => import("../../components/Post/review"), {
  loading: () => <p></p>,
});
const PostFilter = dynamic(() => import("../../components/PostFilter"), {
  loading: () => <p></p>,
});
const Slideout = dynamic(() => import("../../components/SlideOut"), {
  loading: () => <p></p>,
});
const BottomLeftPopUp = dynamic(
  () => import("../../components/BottomPopup/BottomLeftPopup"),
  {
    loading: () => <p></p>,
  }
);
const BottomRightPopUp = dynamic(
  () => import("../../components/BottomPopup/BottomRightPopup"),
  {
    loading: () => <p></p>,
  }
);

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Read = ({ categoryDBId, data, getCatId }) => {
  const { open, closePopup, signup, closeSignup } = React.useContext(Context);

  const [posts, setPosts] = React.useState([]);
  const [endCursor, setEndCursor] = React.useState("");
  const [hasNextPage, setHasNextPage] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  React.useEffect(() => {
    setSelectedCategory(categoryDBId);
    if (data?.posts?.edges.length > 0) {
      setPosts([...data?.posts?.edges]);
      setHasNextPage(data?.posts?.pageInfo?.hasNextPage);
      setEndCursor(data?.posts?.pageInfo?.endCursor);
    }
  }, [categoryDBId]);

  const queryParams = {
    cursorId: endCursor,
    categoryId: categoryDBId,
  };

  const [getMorePosts, { data: newData, error: dMRP }] = useLazyQuery(
    GET_MORE_POSTS,
    { variables: queryParams }
  );

  React.useEffect(() => {
    if (newData && newData?.posts?.edges.length > 0) {
      setPosts([...posts, ...newData?.posts?.edges]);
      setHasNextPage(newData?.posts?.pageInfo?.hasNextPage);
      setEndCursor(newData?.posts?.pageInfo?.endCursor);
      setLoading(false);
    }
  }, [newData]);

  const OnPageChanged = () => {
    setLoading(true);
    getMorePosts();
  };

  return (
    <>
      <NextSeo
        seo={data?.category?.seo}
        link={`https://verygoodlight.com/read/${data?.category?.slug}`}
      />
      <Navbar />
      <main className="review-main-container">
        <Container className="wrapper-main">
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={12} xl={12}>
                <div className="review-vgl-title-container">
                  <h1 className="review-vgl-title">
                    {getCatId.data.categories.nodes[0].name}
                  </h1>
                </div>
              </Grid>
              {/* <Grid item xs={12} sm={6} md={6} lg={6} xl={6}></Grid> */}
            </Grid>
            <div>
              <PostFilter list={data?.categories?.edges} slCat={categoryDBId} />
            </div>
          </div>
          <div className="rv-post-wrapper">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="vgl__secondary-masonry-grid"
              columnClassName="vgl__secondary-masonry-grid_column"
            >
              {posts.map(({ node }, i) => (
                <div key={i}>
                  <Post data={node} />
                </div>
              ))}
            </Masonry>
          </div>
          {hasNextPage && (
            <div className="vgl_pageable-load-more-btn">
              <div className="vgl_btn-container vgl-btn-load_more vgl_btn-inline">
                {!loading && (
                  <a onClick={OnPageChanged} className="vgl_general vgl_btn3">
                    Load more
                  </a>
                )}
                <PropagateLoader
                  color={"#59D8B7"}
                  loading={loading}
                  css={override}
                  size={15}
                />
              </div>
            </div>
          )}
        </Container>
        {signup && <BottomLeftPopUp onCancel={closeSignup} />}
        <BottomRightPopUp />
        <Slideout open={open} onCancel={closePopup} />
        <DesktopFooter bg={"transparent"} />
      </main>
    </>
  );
};

export default Read;

export async function getStaticProps(content) {
  const client = new ApolloClient({
    uri: "https://cms.verygoodlight.com/graphql",
    cache: new InMemoryCache(),
  });

  const getCatId = await client.query({
    query: gql`
      query ($slug: [String]) {
        categories(where: { slug: $slug }) {
          nodes {
            slug
            id
            databaseId
            name
          }
        }
      }
    `,
    variables: {
      slug: content.params.slug,
    },
  });

  const categoryId = getCatId.data.categories.nodes[0].id;
  const categoryDBId = getCatId.data.categories.nodes[0].databaseId;

  const { data } = await client.query({
    query: gql`
      query ($categoryId: Int!, $seoCategoryId: ID!) {
        categories {
          edges {
            node {
              name
              id
              databaseId
              slug
            }
          }
        }
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
              id
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    `,
    variables: {
      categoryId: categoryDBId,
      seoCategoryId: categoryDBId,
    },
  });

  return {
    props: {
      getCatId,
      data,
      categoryDBId,
    },
  };
}

export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: "https://cms.verygoodlight.com/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query {
        categories {
          nodes {
            name
            id
            databaseId
            slug
          }
        }
      }
    `,
  });

  const paths = data.categories.nodes.map((path) => {
    return {
      params: { slug: path.slug.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}
