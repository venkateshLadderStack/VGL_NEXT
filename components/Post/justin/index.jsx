import React from "react";
import Link from "next/link";
import { useStyles } from "./style";
import ImageComponent from "../../ImageComponent";
import Image from "next/image";

const regex = /(<([^>]+)>)/gi;

export default function Post({ post }) {
  const classes = useStyles();
  const postExcerpt = post.excerpt.replace(regex, "");

  return (
    <div className={classes.vglPost}>
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
        <Link href={post?.uri}>
          <p className={classes.vglPostTitle}>{post?.title}</p>
        </Link>
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
        <Link className={classes.vglPostReadMore} href={post?.uri}>
          Read More
        </Link>
      </div>
    </div>
  );
}
