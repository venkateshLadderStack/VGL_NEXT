import React from "react";
import { useStyles } from "./style";
import { Grid } from "@material-ui/core";
import Link from "next/link";
import styled from "styled-components";
import ImageComponent from "../ImageComponent";

export default function CelebStory({ post }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={6} lg={3} xl={3} style={{ marginBottom: 80 }}>
      <div className={classes.container}>
        <Link href={post?.uri} title={post?.title}>
          <div className={classes.imgBox}>
            <div className={classes.img}>
              <ImageComponent
                src={post?.featuredImage?.node?.mediaItemUrl}
                alt={post?.title}
                width={250}
                height={250}
                loading="lazy"
              />
            </div>
          </div>
        </Link>
        <div className={classes.bottomItem}>
          <p className={classes.title}>{post?.title}</p>
        </div>
      </div>
    </Grid>
  );
}
