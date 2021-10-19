import React from "react";
import { Grid, Container } from "@material-ui/core";
import { useLazyQuery } from "@apollo/client";
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/react";
import { useStyles } from "./style";
import Post from "../../components/Post/justin";
import { GET_MORE_POSTS } from "../../queries/justinPosts";
import NewNewsLetter from "../../components/Newsletter/NewNewsLetter";
import Image from "next/image";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function JustIn({ data, pageInfo }) {
  const classes = useStyles();
  const [posts, setPosts] = React.useState([...data]);
  const [nextPage, setNextPage] = React.useState(pageInfo);
  const [loading, setLoading] = React.useState(false);

  const queryParams = {
    cursorId: nextPage.endCursor,
  };

  const [getMorePosts, { data: morePosts, error }] = useLazyQuery(
    GET_MORE_POSTS,
    { variables: queryParams }
  );
  const OnPageChanged = () => {
    setLoading(true);
    getMorePosts();
  };

  React.useEffect(() => {
    if (morePosts && morePosts?.posts?.edges.length > 0) {
      setPosts([...posts, ...morePosts?.posts?.edges]);
      setNextPage(morePosts?.posts?.pageInfo);
    }
    setLoading(false);
  }, [morePosts]);

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.vglJustInner}>
          <Grid container spacing={1}>
            <Grid item sm={12} md={8} lg={8} xl={8}>
              <div className={classes.vglJustInLeftColumn}>
                <div className={classes.vglJustInPostsContainer}>
                  <h2 className={classes.vglJustInHeading}>
                    This Just In{" "}
                    <Image
                      className={classes.vglImgEmoji}
                      width={42}
                      height={42}
                      layout="fixed"
                      alt="⚡️"
                      src="https://s.w.org/images/core/emoji/13.0.1/svg/26a1.svg"
                    />
                  </h2>
                  <div>
                    {posts.map(({ node }, i) => (
                      <Post post={node} key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item sm={12} md={4} lg={4} xl={4}>
              <div className={`${classes.vglStickyAds} ${classes.vglSticky}`}>
                <div className={classes.vglColumnInner}>
                  <div style={{ marginBottom: 35 }}>
                    <NewNewsLetter right={"-5px"} top={"-20px"} />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="vgl_pageable-load-more-btn">
          <div className="vgl_btn-container vgl-btn-load_more vgl_btn-inline">
            {loading ? (
              <PropagateLoader
                color={"#59D8B7"}
                loading={loading}
                css={override}
                size={15}
              />
            ) : (
              <a
                onClick={OnPageChanged}
                className="vgl_general vgl_btn3"
                style={{ backgroundColor: "rgb(255, 241, 214)" }}
              >
                Gimme More!
              </a>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
