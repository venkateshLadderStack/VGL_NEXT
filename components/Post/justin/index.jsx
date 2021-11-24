import Link from "next/link";
import { useStyles } from "./style";
import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"), {
  loading: () => <p></p>,
});

const regex = /(<([^>]+)>)/gi;

export default function Post({ post }) {
  const classes = useStyles();
  const postExcerpt = post.excerpt.replace(regex, "");

  return (
    <Link href={post?.uri} passHref>
      <div className={`${classes.vglPost} pointer`}>
        <div
          className={`${classes.vglFeaturedImg} `}
          id="vgl-justin-post-featured-img "
        >
          <div className={classes.postHeight}>
            <Image
              alt=""
              src={post?.featuredImage?.node?.mediaItemUrl}
              placeholder="blur"
              blurDataURL={post?.featuredImage?.node?.mediaItemUrl}
              layout="fill"
              loading="lazy"
              objectFit="contain"
              objectPosition="center"
              quality={80}
            />
          </div>
        </div>
        <div className={classes.vglPostInfo}>
          <p className={classes.vglPostTitle}>{post?.title}</p>

          <div className={classes.vglPostInfo__excerpt}>
            <span
              dangerouslySetInnerHTML={{
                __html: `${postExcerpt.substring(0, 150)}`,
              }}
            ></span>
          </div>
          <span className={classes.vglPostNameCategory}>
            <b>by</b>
            <span className={classes.vglPostAuthor}>
              {post?.bylines?.edges.length > 0
                ? post?.bylines?.edges[0]?.node?.name
                : post?.author?.node?.name}
            </span>
            |
            <span className={classes.vglPostCategory}>
              {post?.categories?.nodes[0]?.name}
            </span>
          </span>
          <Link href={post?.uri} passHref>
            <div className={classes.vglPostReadMore}>Read More</div>
          </Link>
        </div>
      </div>
    </Link>
  );
}
