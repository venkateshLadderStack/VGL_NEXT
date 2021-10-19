import React from "react";
import { useRouter } from "next/router";
import { SEARCH_POSTS } from "../queries/search";
import { ApolloClient, gql, InMemoryCache, useLazyQuery } from "@apollo/client";
import Seo from "../components/SeoHead";
import Navbar from "../components/Navbar/Desktop";
import Footer from "../components/Footer/Desktop";
import { Grid, Container } from "@material-ui/core";
import CelebStory from "../components/CelebStory";
import { PropagateLoader } from "react-spinners";
import { css } from "@emotion/react";

const search = (props) => {
  const { query } = useRouter();
  console.log(query.s, "QUERY");

  const [searchQuery, setSearchQuery] = React.useState("");
  const [posts, setPosts] = React.useState([]);
  // const [notFound, setNotFound] = React.useState(false);

  React.useEffect(() => {
    setPosts([]);
    const q = query?.s;
    setSearchQuery(
      decodeURIComponent(q).replace(/'/g, "%27").replace(/"/g, "%22")
    );
    searchPosts();
  }, [query.s]);

  const [searchPosts, { loading, data, error }] = useLazyQuery(SEARCH_POSTS, {
    variables: { title: searchQuery },
  });

  React.useEffect(() => {
    if (data && data?.posts?.edges.length > 0) {
      setPosts([...data?.posts?.edges]);
    }
  }, [data]);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <>
      <Seo />
      <main className="search-main-container">
        <Container>
          <div>
            <div className="search-vgl-results-container">
              <h1 className="search-vgl-results-title">
                Search Results for {searchQuery}
              </h1>
            </div>
          </div>
          <div className="sr-post-wrapper">
            <Grid container spacing={4}>
              {posts.map(({ node }, i) => (
                <CelebStory post={node} key={i} />
              ))}
            </Grid>

            <div
              style={{
                padding: "20px 0px",
                textAlign: "center",
                marginBottom: 50,
                display: "flex",
              }}
            >
              {!loading && posts.length === 0 && (
                <div className="fof" style={{ margin: "0 auto" }}>
                  <h1>
                    OOPS! POSTS NOT FOUND
                    <span role="img" aria-label="">
                      😔
                    </span>
                  </h1>
                </div>
              )}
              <div style={{ margin: "0 auto" }}>
                <PropagateLoader
                  color={"#59D8B7"}
                  loading={loading}
                  css={override}
                  size={15}
                />
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer bg={"#ffe3af"} />
    </>
  );
};

export default search;
