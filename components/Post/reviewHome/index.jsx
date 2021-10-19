import React from "react";
import { useStyles } from "./style";
import Link from "next/link";
import Image from "next/image";

export default function Post({ post }) {
  const classes = useStyles();
  return (
    <div className={classes.vglPost}>
      <div className={classes.vglFeaturedImage}>
        <Link href={post?.uri} title={post.title}>
          <div>
            <Image
              src={post?.featuredImage?.node?.mediaItemUrl}
              placeholder="blur"
              blurDataURL={post?.featuredImage?.node?.mediaItemUrl}
              alt=""
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              loading="lazy"
              quality={80}
            />
          </div>
        </Link>
      </div>
      <div className={classes.vglPostInfo}>
        <a href={post?.uri} title={post.title}>
          <p>{post?.title}</p>
        </a>
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
