import { ApolloClient, gql, InMemoryCache, useLazyQuery } from "@apollo/client";
import { Container, Grid } from "@material-ui/core";
import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import Instagram from "@material-ui/icons/Instagram";

import dynamic from "next/dynamic";
import { Context } from "../../context";

const Image = dynamic(() => import("next/image"), {
  loading: () => <p></p>,
});
const CelebStory = dynamic(() => import("../../components/CelebStory"), {
  loading: () => <p></p>,
});
const Navbar = dynamic(() => import("../../components/Navbar/Desktop"), {
  loading: () => <p></p>,
});

const BottomLeftPopUp = dynamic(
  () => import("../../components/BottomPopup/BottomLeftPopup"),
  {
    loading: () => <p></p>,
  }
);

const BottomRightPopUp = dynamic(
  () => import("../../components/BottomPopup/BottomRightPopUp"),
  {
    loading: () => <p></p>,
  }
);

const Slideout = dynamic(() => import("../../components/SlideOut"), {
  loading: () => <p></p>,
});

const DesktopFooter = dynamic(() => import("../../components/Footer/Desktop"), {
  loading: () => <p></p>,
});

const Author = ({ data }) => {
  const { byline } = data;
  const byLineImage = byline?.bylineImage;

  const { open, closePopup, signup, closeSignup } = React.useContext(Context);
  return (
    <>
      <Navbar />
      <div>
        <main className="search-main-container">
          <article>
            <Container className="article_container">
              <h1 className="author_name_page">{byline?.name}</h1>
              <div className="author_wrapper">
                <div className="author_img_wrap">
                  <Image
                    src={byLineImage?.image?.mediaItemUrl}
                    alt=""
                    layout="fixed"
                    width={300}
                    height={360}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="author_right_wrapper">
                  <div className="social_icons_wrapper">
                    <p>Follow:</p>

                    {byLineImage?.pintreset && (
                      <a
                        target="_blank"
                        href={byLineImage?.pintreset}
                        rel="noreferrer"
                      >
                        <PinterestIcon />
                      </a>
                    )}
                    {byLineImage?.twitter && (
                      <a
                        target="_blank"
                        href={byLineImage?.twitter}
                        rel="noreferrer"
                      >
                        <TwitterIcon />
                      </a>
                    )}

                    {byLineImage?.instagram && (
                      <a
                        target="_blank"
                        href={byLineImage?.instagram}
                        rel="noreferrer"
                      >
                        <Instagram />
                      </a>
                    )}
                  </div>
                  <div className="author_info_small">
                    <p>
                      <span>Lives in</span>
                      {byLineImage?.livesIn}
                    </p>
                  </div>

                  <div className="author_info_small">
                    <p>
                      <span>EXPERTISE</span>
                      {byLineImage?.expertise}
                    </p>
                  </div>
                  <div className="line" />
                  <div className="author_info_small">
                    <ul className="pronouns">
                      {byLineImage?.fewLinesAboutAuthor?.line1 && (
                        <li>{byLineImage?.fewLinesAboutAuthor?.line1}</li>
                      )}
                      {byLineImage?.fewLinesAboutAuthor?.line2 && (
                        <li>{byLineImage?.fewLinesAboutAuthor?.line2}</li>
                      )}
                      {byLineImage?.fewLinesAboutAuthor?.line3 && (
                        <li>{byLineImage?.fewLinesAboutAuthor?.line3}</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bio">
                {byline?.description && <h2>Author Bio</h2>}

                <p
                  dangerouslySetInnerHTML={{
                    __html: byline?.description,
                  }}
                />
              </div>
              <h2 className="articles_by">Articles by {byline?.name}</h2>
              <Container>
                <Grid container spacing={4}>
                  {byline?.posts?.nodes.map((node, i) => (
                    <CelebStory post={node} key={i} />
                  ))}
                </Grid>
              </Container>
            </Container>
          </article>
        </main>
      </div>
      <DesktopFooter bg={"#ffe3af"} />
      {signup && <BottomLeftPopUp onCancel={closeSignup} />}
      <BottomRightPopUp />
      <Slideout open={open} onCancel={closePopup} />
    </>
  );
};

export default Author;

export async function getStaticProps(content) {
  const client = new ApolloClient({
    uri: "https://cms.verygoodlight.com/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query ($authorSlug: ID!) {
        byline(id: $authorSlug, idType: URI) {
          name
          slug
          uri
          link
          description
          bylineImage {
            fewLinesAboutAuthor {
              line1
              line2
              line3
            }
            instagram
            expertise
            livesIn
            pintreset
            pronouns
            twitter
            image {
              mediaItemUrl
            }
          }
          count
          posts(first: 20) {
            nodes {
              title
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
              uri
              slug
              categories {
                edges {
                  isPrimary
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      authorSlug: `/byline/${content?.params?.author}`,
    },
  });

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: "https://cms.verygoodlight.com/graphql",
    cache: new InMemoryCache(),
  });

  const first = await client.query({
    query: gql`
      query fromFirst {
        bylines(first: 100) {
          nodes {
            uri
            slug
          }
        }
      }
    `,
  });

  const last = await client.query({
    query: gql`
      query fromLast {
        bylines(last: 50) {
          nodes {
            uri
            slug
          }
        }
      }
    `,
  });

  const allPaths = [...first?.data.bylines.nodes, ...last?.data.bylines.nodes];

  const paths = allPaths.map((path) => {
    const link = path.uri.split("/");
    return {
      params: { byline: "byline", author: link[2] },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}
