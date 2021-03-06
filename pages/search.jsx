import React from "react";
import { useRouter } from "next/router";
import { SEARCH_POSTS } from "../queries/search";
import { useLazyQuery } from "@apollo/client";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/react";
import dynamic from "next/dynamic";
import { Context } from "../context";
import { Helmet } from "react-helmet";

const Navbar = dynamic(() => import("../components/Navbar/Desktop"));
const Footer = dynamic(() => import("../components/Footer/Desktop"), {
  loading: () => <p></p>,
});
const CelebStory = dynamic(() => import("../components/CelebStory"), {
  loading: () => <p></p>,
});
const Slideout = dynamic(() => import("../components/SlideOut"), {
  loading: () => <p></p>,
});
const BottomLeftPopUp = dynamic(
  () => import("../components/BottomPopup/BottomLeftPopup"),
  {
    loading: () => <p></p>,
  }
);
const BottomRightPopUp = dynamic(
  () => import("../components/BottomPopup/BottomRightPopup"),
  {
    loading: () => <p></p>,
  }
);

const Search = (props) => {
  const { query } = useRouter();

  const { open, closePopup, signup, closeSignup } = React.useContext(Context);

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
      <Helmet>
        {/* start seo tags */}
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=yes"
        />
        <link rel="profile" href="https://gmpg.org/xfn/11" />
        <meta name="ir-site-verification-token" value="-1088507391" />
        <title>{`You searched for ${searchQuery} - Very Good Light `}</title>
        <meta name="robots" content="noindex, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`You searched for ${searchQuery} - Very Good Light`}
        />
        <meta property="og:url" content={data?.opengraphUrl} />
        <meta property="og:site_name" content="Very Good Light" />
        <meta
          property="article:publisher"
          content="http://www.facebook.com/verygoodlight"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content={`You searched for ${searchQuery} - Very Good Light`}
        />
        <meta name="twitter:creator" content="@vgoodlight" />
        <meta name="twitter:site" content="@vgoodlight" />
      </Helmet>
      <Navbar />
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
                <div className="fof margin_zero_auto">
                  <h1>
                    OOPS! POSTS NOT FOUND
                    <span role="img" aria-label="">
                      ????
                    </span>
                  </h1>
                </div>
              )}
              <div className="margin_zero_auto">
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
        <Footer bg={"transparent"} />
        {signup && <BottomLeftPopUp onCancel={() => closeSignup()} />}
        <BottomRightPopUp />
      </main>
      <Slideout open={open} onCancel={() => closePopup()} />
    </>
  );
};

export default Search;
