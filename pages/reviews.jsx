import React from "react";
import { ApolloClient, gql, InMemoryCache, useLazyQuery } from "@apollo/client";
import client from "../apollo/client";
import { getReviews } from "../queries/get-reviews";
import Seo from "../components/SeoHead";
import Navbar from "../components/Navbar/Desktop";
import Footer from "../components/Footer/Desktop";
import { getPosts } from "../queries/get-posts";
import Masonry from "react-masonry-css";
import PropagateLoader from "react-spinners/PropagateLoader";
import { Grid, Container } from "@material-ui/core";
import { css } from "@emotion/react";
import {
  GET_MORE_REVIEW_POSTS,
  GET_MORE_REVIEW_POSTS_BY_CATEGORY,
  GET_REVIEW_POSTS,
  GET_REVIEW_POSTS_BY_CATEGORY,
} from "../queries/review";
import Post from "../components/Post/review";
import PostFilter from "../components/PostFilter/main";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

// default Category is ALL
const allCategory = 11700;

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Reviews = ({ data }) => {
  console.log(data, "REVIEWS");

  const [posts, setPosts] = React.useState([]);
  const [endCursor, setEndCursor] = React.useState("");
  const [hasNextPage, setHasNextPage] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState(allCategory);

  React.useEffect(() => {
    if (data?.posts?.edges.length > 0) {
      setPosts([...data?.posts?.edges]);
      setHasNextPage(data?.posts?.pageInfo?.hasNextPage);
      setEndCursor(data?.posts?.pageInfo?.endCursor);
    }
  }, []);

  // Fetch Review Posts for all category
  const [getReviewsPosts, { data: renewPosts, error }] =
    useLazyQuery(GET_REVIEW_POSTS);

  React.useEffect(() => {
    if (renewPosts && renewPosts?.posts?.edges.length > 0) {
      setPosts([...posts, ...renewPosts?.posts?.edges]);
      setHasNextPage(renewPosts?.posts?.pageInfo?.hasNextPage);
      setEndCursor(renewPosts?.posts?.pageInfo?.endCursor);
      setLoading(false);
    }
  }, [renewPosts]);

  // Fetch Review More Posts for all category

  const queryParams = {
    cursorId: endCursor,
  };

  const [getMoreReviewsPosts, { data: newData, error: dMRP }] = useLazyQuery(
    GET_MORE_REVIEW_POSTS,
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

  // fetch posts by category
  const [getReviewsPostsByCategory, { data: newDatabycat, error: gRPBC }] =
    useLazyQuery(GET_REVIEW_POSTS_BY_CATEGORY, {
      variables: { categoryId: selectedCategory },
    });

  React.useEffect(() => {
    if (newDatabycat && newDatabycat?.posts?.edges.length > 0) {
      setPosts([...posts, ...newDatabycat?.posts?.edges]);
      setHasNextPage(newDatabycat?.posts?.pageInfo?.hasNextPage);
      setEndCursor(newDatabycat?.posts?.pageInfo?.endCursor);
      setLoading(false);
    }
  }, [newDatabycat]);

  // fetch paginated posts by category
  const [
    getMoreReviewsPostsByCategory,
    { data: morePostsByCategory, error: gMRPBC },
  ] = useLazyQuery(GET_MORE_REVIEW_POSTS_BY_CATEGORY, {
    variables: { categoryId: selectedCategory, cursorId: endCursor },
  });

  React.useEffect(() => {
    if (morePostsByCategory && morePostsByCategory?.posts?.edges.length > 0) {
      setPosts([...posts, ...morePostsByCategory?.posts?.edges]);
      setHasNextPage(morePostsByCategory?.posts?.pageInfo?.hasNextPage);
      setEndCursor(morePostsByCategory?.posts?.pageInfo?.endCursor);
      setLoading(false);
    }
  }, [morePostsByCategory]);

  const OnPageChanged = () => {
    setLoading(true);
    if (selectedCategory === allCategory) {
      getMoreReviewsPosts();
    } else {
      getMoreReviewsPostsByCategory();
    }
  };

  const onCategoryChanged = (value) => {
    setLoading(true);
    setPosts([]);
    setSelectedCategory(value);
    if (value === allCategory) {
      getReviewsPosts();
    } else {
      getReviewsPostsByCategory();
    }
  };

  return (
    <div>
      <Seo />
      <Navbar />
      <main className="review-main-container" style={{ overflowX: "hidden" }}>
        <Container className="wrapper-main">
          <div>
            <Grid container>
              <Grid item xs={12} md={12} lg={12} xl={12}>
                <div className="review-vgl-title-container">
                  <h1 className="review-vgl-title">Reviews</h1>
                </div>
              </Grid>
              {/* <Grid item xs={12} sm={6} md={6} lg={6} xl={6}></Grid> */}
            </Grid>
            <div>
              <PostFilter
                list={data?.categories?.edges}
                slCat={selectedCategory}
                onCategoryChanged={onCategoryChanged}
              />
            </div>
          </div>
          <div className="rv-post-wrapper">
            {/* <Grid container spacing={2}> */}
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="vgl__secondary-masonry-grid"
              columnClassName="vgl__secondary-masonry-grid_column"
            >
              {posts.map(({ node }) => (
                <Post data={node} />
              ))}
            </Masonry>
            {/* </Grid> */}
          </div>
          {hasNextPage && (
            <div className="vgl_pageable-load-more-btn">
              <div className="vgl_btn-container vgl-btn-load_more vgl_btn-inline">
                {!loading && (
                  <a onClick={OnPageChanged} className="vgl_general vgl_btn3">
                    Load more
                  </a>
                )}
              </div>
            </div>
          )}
          <div style={{ textAlign: "center" }}>
            <PropagateLoader
              color={"#59D8B7"}
              loading={loading}
              css={override}
              size={15}
            />
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;

export const getStaticProps = async (context) => {
  const { data } = await client.query({
    query: getReviews,
  });
  return {
    props: {
      data,
    },
  };
};
