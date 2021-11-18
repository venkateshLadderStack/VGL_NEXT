import React from "react";
import { useStyles } from "./style";
import Link from "next/link";
import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"), {
  loading: () => <p></p>,
});

export default function Post({ post }) {
  const classes = useStyles();
  return (
    <div className={`${classes.vglPost} pointer`}>
      <div className={classes.vglFeaturedImage}>
        <Link href={post?.uri} title={post.title} passHref>
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src={post?.featuredImage?.node?.mediaItemUrl}
              placeholder="blur"
              blurDataURL={post?.featuredImage?.node?.mediaItemUrl}
              alt=""
              width="400"
              height="400"
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
        <Link href={post?.uri} title={post.title} passHref>
          <p className={classes.vglPostDesc}>{post?.title}</p>
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
        <Link title={post.title} href={post?.uri} passHref>
          <div className={`${classes.vglPostReadMore}`}>Read More</div>
        </Link>
      </div>
    </div>
  );
}
