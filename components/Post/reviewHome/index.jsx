import React from "react";
import { useStyles } from "./style";
import Link from "next/link";

export default function Post({ post }) {
  const classes = useStyles();
  return (
    <div className={classes.vglPost}>
      <div className={classes.vglFeaturedImage}>
        <Link href={post?.uri} title={post.title}>
          <div
            style={{
              backgroundImage: `url(${post?.featuredImage?.node?.mediaItemUrl})`,
            }}
          ></div>
        </Link>
      </div>
      <div className={classes.vglPostInfo}>
        <Link href={post?.uri} title={post.title}>
          <p>{post?.title}</p>
        </Link>
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
        <Link
          className={classes.vglPostReadMore}
          title={post.title}
          href={post?.uri}
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
