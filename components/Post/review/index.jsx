import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "./style";
import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"), {
  loading: () => <p></p>,
});

export default function Post({ data }) {
  const router = useRouter();
  const classes = useStyles();
  return (
    // <Grid item xs={12} md={4} lg={4} xl={4}>
    <div className={classes.itemCard}>
      <div className={classes.itemThumbnail}>
        <Link href={data?.uri} title={data?.title} passHref>
          <div className="imageContainer pointer">
            <Image
              className="image"
              alt=""
              src={
                data?.featuredImage?.node?.mediaItemUrl ||
                data?.featured_image_2?.featuredImage2?.mediaItemUrl
              }
              placeholder="blur"
              blurDataURL={
                data?.featuredImage?.node?.mediaItemUrl ||
                data?.featured_image_2?.featuredImage2?.mediaItemUrl
              }
              quality={75}
              loading="lazy"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </div>
      <div>
        <h2 className={`${classes.title} ${classes.fontSporting}`}>
          <Link href={data?.uri} title={data?.title} passHref>
            <div className={`${classes.fontSporting}`}>{data?.title}</div>
          </Link>
        </h2>
        <p id="by">
          <span className={`${classes.by} ${classes.fontLato}`}>by</span>
          <a
            className={classes.author}
            href="#"
            title={data?.author?.node?.name}
          >
            <span className={classes.fontLato}>
              {data?.bylines?.edges.length > 0
                ? data?.bylines?.edges[0]?.node?.name
                : data?.author?.node?.name}
            </span>
          </a>
          |
          <a
            className={classes.category}
            href="#"
            title={data?.categories?.edges[0]?.node?.name}
          >
            <span className={classes.fontLato}>
              {data?.categories?.edges[0]?.node?.name}
            </span>
          </a>
        </p>
      </div>
    </div>
    // </Grid>
  );
}
