import React from "react";
import { useStyles } from "./style";
import { Grid, Container } from "@material-ui/core";
import dynamic from "next/dynamic";

const CelebStory = dynamic(() => import("../../components/CelebStory"), {
  loading: () => <p>...</p>,
});

export default function CelebStories({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ minHeight: "600px" }}>
      <Container>
        <h2 className={classes.vglCelebHeading}>What's New</h2>
        <Container>
          <Grid container spacing={4}>
            {data.map(({ node }, i) => (
              <CelebStory post={node} key={i} />
            ))}
          </Grid>
        </Container>
      </Container>
    </div>
  );
}
