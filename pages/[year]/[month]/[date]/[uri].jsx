import React from "react";
import { ApolloClient, gql, InMemoryCache, useLazyQuery } from "@apollo/client";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import Masonry from "react-masonry-css";
import Link from "next/link";
import dynamic from "next/dynamic";
import { RELATED_POSTS } from "../../../../queries/relatedPosts";
import NextSeo from "../../../../components/SeoHead/seo";
import useWindowSize from "../../../../hooks/useWindowSize";
import { fetchAllPosts } from "../../../api/fetchPosts";

const Image = dynamic(() => import("next/image"), {
  loading: () => <p></p>,
});
const Navbar = dynamic(() => import("../../../../components/Navbar/Desktop"));
const Footer = dynamic(() => import("../../../../components/Footer/Desktop"), {
  loading: () => <p></p>,
});
const Author = dynamic(() => import("../../../../components/Avatar"), {
  loading: () => <p></p>,
});
const Post = dynamic(() => import("../../../../components/Post/review"), {
  loading: () => <p></p>,
});
const NewSidebar = dynamic(() => import("../../../../components/SideBar"), {
  loading: () => <p></p>,
});

const BlogArticle = ({ post, realtedCat }, ...props) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  const { width } = useWindowSize();

  let { data } = props;

  const [catId, setCatId] = React.useState(
    post?.categories?.edges.length &&
      post?.categories?.edges[0]?.node?.databaseId
  );

  const queryParams = {
    categoryId: catId,
  };

  const [getRelatedPosts, { data: relatedPosts, error }] = useLazyQuery(
    RELATED_POSTS,
    {
      variables: queryParams,
    }
  );

  React.useEffect(() => {
    getRelatedPosts();
  }, [catId]);

  const feat1 = post?.featured_image_2?.featuredImage2?.mediaItemUrl;
  const feat2 = post?.featuredImage?.node?.mediaItemUrl;

  return (
    <>
      <NextSeo
        seo={post?.seo}
        link={post?.link}
        featuredImage={post?.featuredImage?.node?.mediaItemUrl}
      />
      <Navbar />
      <div className="single-blog-container single-blog">
        <main className="main-content">
          <article>
            <Container className="article_container">
              <div className="hero_area">
                <div className="hero_left">
                  <div>
                    <h1
                      className="hero_text_h1"
                      dangerouslySetInnerHTML={{ __html: post?.title }}
                    />
                  </div>

                  {width >= 768 && <Author post={post} />}

                  {width >= 768 && (
                    <div className="share_btns_wrapper">
                      <div className="share_text">SHARE</div>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=https://verygoodlight.com/${post?.uri}`}
                        className="social_share_icon first share_btns"
                        target="_blank"
                        rel="noreferrer"
                        title={post?.title}
                      >
                        <FacebookIcon className="share_btns" />
                      </a>
                      <a
                        href={`https://twitter.com/share?url=https://verygoodlight.com/${post?.uri}&amp;text=${post?.title}&amp;hashtags=verygoodlight`}
                        className="social_share_icon share_btns"
                        title={post?.title}
                      >
                        <TwitterIcon className="share_btns" />
                      </a>
                      <a
                        href={`http://pinterest.com/pin/create/button/?url=https://verygoodlight.com/${post?.uri}&media=${post?.featuredImage?.node?.mediaItemUrl}&description=${post?.title}`}
                        className="social_share_icon last share_btns"
                        title={post?.title}
                      >
                        <PinterestIcon className="share_btns" />
                      </a>
                    </div>
                  )}
                </div>
                <div
                  className={`hero_right ${
                    feat1 ? "feat_img_rc" : "feat_img_sq"
                  }`}
                >
                  {width > 786 ? (
                    <Image
                      src={
                        post?.featured_image_2?.featuredImage2?.mediaItemUrl ||
                        post?.featuredImage?.node?.mediaItemUrl
                      }
                      placeholder="blur"
                      blurDataURL={
                        post?.featured_image_2?.featuredImage2?.mediaItemUrl ||
                        post?.featuredImage?.node?.mediaItemUrl
                      }
                      alt=""
                      layout="fill"
                      objectFit="contain"
                      objectPosition="right"
                      priority={true}
                      quality={80}
                    />
                  ) : (
                    <Image
                      src={
                        post?.featured_image_2?.featuredImage2?.mediaItemUrl ||
                        post?.featuredImage?.node?.mediaItemUrl
                      }
                      placeholder="blur"
                      blurDataURL={
                        post?.featured_image_2?.featuredImage2?.mediaItemUrl ||
                        post?.featuredImage?.node?.mediaItemUrl
                      }
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      priority={true}
                      quality={30}
                    />
                  )}
                </div>
              </div>
              {width > 768 && <div className="blog_shad" />}
              {width < 768 && <Author post={post} />}
              <div className="dangerously_set">
                <div className="entry-main">
                  <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                      <div
                        className="entry-content"
                        dangerouslySetInnerHTML={{ __html: post?.content }}
                      ></div>
                      <div className="shar_wrap">
                        <div className="share_text">SHARE</div>
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=https://verygoodlight.com/${post?.uri}`}
                          className="social_share_icon first"
                          target="_blank"
                          rel="noreferrer"
                          title={post?.title}
                        >
                          <FacebookIcon />
                        </a>
                        <a
                          href={`https://twitter.com/share?url=https://verygoodlight.com/${post?.uri}&amp;text=${post?.title}&amp;hashtags=verygoodlight`}
                          className="social_share_icon"
                          title={post?.title}
                        >
                          <TwitterIcon />
                        </a>
                        <a
                          href={`http://pinterest.com/pin/create/button/?url=https://verygoodlight.com/${post?.uri}&media=${post?.featuredImage?.node?.mediaItemUrl}&description=${post?.title}`}
                          className="social_share_icon last"
                          title={post?.title}
                        >
                          <PinterestIcon />
                        </a>
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                      {relatedPosts?.posts?.edges?.length && (
                        <NewSidebar
                          posts={relatedPosts?.posts}
                          singlePost={post?.uri}
                        />
                      )}
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Container>
            {width >= 786 && (
              <>
                <h2 className="rel_art_title">Related Articles</h2>
                <div className="rel_art_div1">
                  <div className="rel_art_div2">
                    <Masonry
                      breakpointCols={breakpointColumnsObj}
                      className="vgl__secondary-masonry-grid"
                      columnClassName="vgl__secondary-masonry-grid_column"
                    >
                      {realtedCat?.nodes.length > 0 &&
                        realtedCat.nodes
                          .filter((item) => item.title !== post?.title)
                          .slice(0, 3)
                          .map((item, index) => (
                            <Post data={item} key={index} />
                          ))}
                    </Masonry>
                  </div>
                </div>
              </>
            )}
          </article>
          {width >= 768 ? (
            <div className="vgl_pageable-load-more-btn">
              <div className="vgl_btn-container vgl-btn-load_more vgl_btn-inline">
                <Link href="/blog/features" className="vgl_general vgl_btn3">
                  More articles
                </Link>
              </div>
            </div>
          ) : (
            <div className="ht_20" />
          )}
        </main>
      </div>
      <Footer bg={"transparent"} />
    </>
  );
};

export default BlogArticle;

export async function getStaticProps(content) {
  const client = new ApolloClient({
    uri: "https://cms.verygoodlight.com/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query ($postID: ID!) {
        post(idType: URI, id: $postID) {
          subHeading {
            h2Heading
          }
          content
          date
          uri
          id
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
                uri
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
          post_read_time {
            readTime
          }
        }
      }
    `,
    variables: {
      postID: `/${content?.params?.year}/${content?.params?.month}/${content?.params?.date}/${content?.params?.uri}`,
    },
  });

  const category = data.post.categories.edges.filter(
    (item) => item.isPrimary === true
  )[0]?.node?.name;

  const catData = await client.query({
    query: gql`
      query ($categoryName: String!) {
        posts(where: { categoryName: $categoryName }, first: 10) {
          nodes {
            title
            id
            uri
            author {
              node {
                name
              }
            }
            categories {
              edges {
                isPrimary
                node {
                  name
                }
              }
            }
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    `,

    variables: {
      categoryName:
        category === "Homepage" ? "main slider" : category || "Features",
    },
  });

  console.log(
    `/${content?.params?.year}/${content?.params?.month}/${content?.params?.date}/${content?.params?.uri}`,
    "content"
  );

  return {
    props: {
      post: data.post,
      realtedCat: catData.data.posts,
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await fetchAllPosts();

  const paths = posts
    ?.filter(
      ({ node }) =>
        node.uri !==
        "/2019/01/31/5-successful-guys-and-their-secrets-to-a-good-nights-sleep-%f0%9f%92%a4/"
    )
    ?.map(({ node }) => {
      const link = node.uri.replace("/", "").split("/");

      return {
        params: {
          year: link[0],
          month: link[1],
          date: link[2],
          uri: link[3],
        },
      };
    });

  return {
    paths,
    fallback: false,
  };
}
