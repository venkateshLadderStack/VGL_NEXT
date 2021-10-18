import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "./style";
import Link from "next/link";
import ImageComponent from "../../ImageComponent";

export default function Post({ data }) {
  const classes = useStyles();
  return (
    // <Grid item xs={12} md={4} lg={4} xl={4}>
    <div className={classes.itemCard}>
      <div className={classes.itemThumbnail}>
        <Link href={data?.uri} title={data?.title}>
          <div className={classes.smallImg}>
            <ImageComponent
              alt=""
              src={data?.featuredImage?.node?.mediaItemUrl}
              loading={"lazy"}
              width={300}
              height={300}
              layout="responsive"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </Link>
      </div>
      <div>
        <h2 className={`${classes.title} ${classes.fontSporting}`}>
          <Link
            className={`${classes.fontSporting}`}
            href={data?.uri}
            title={data?.title}
          >
            {data?.title}
          </Link>
        </h2>
        <p id="by">
          <span className={`${classes.by} ${classes.fontLato}`}>by</span>
          <Link
            className={classes.author}
            href="/"
            title={data?.author?.node?.name}
          >
            <span className={classes.fontLato}>
              {data?.bylines?.edges.length > 0
                ? data?.bylines?.edges[0]?.node?.name
                : data?.author?.node?.name}
            </span>
          </Link>
          |
          <Link
            className={classes.category}
            href=""
            title={data?.categories?.edges[0]?.node?.name}
          >
            <span className={classes.fontLato}>
              {data?.categories?.edges[0]?.node?.name}
            </span>
          </Link>
        </p>
      </div>
    </div>
    // </Grid>
  );
}
