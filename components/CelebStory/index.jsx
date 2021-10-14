import React from "react";
import { useStyles } from "./style";
import { Grid } from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function CelebStory({ post }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={6} lg={3} xl={3} style={{ marginBottom: 80 }}>
      <Container>
        <Link href={post?.uri} title={post?.title}>
          <ImgBox>
            <Img className={classes.img}>
              <Image
                src={post?.featuredImage?.node?.mediaItemUrl}
                alt={post?.title}
                width={250}
                height={250}
              />
            </Img>
          </ImgBox>
        </Link>
        <BottomItem>
          <p>{post?.title}</p>
        </BottomItem>
      </Container>
    </Grid>
  );
}

const Container = styled.div`
  width: 255px;
  height: 420px;
  box-sizing: border-box;
  margin: 0 auto;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 240px;
  max-width: 240px;
  position: relative;
  border: 2px solid black;

  &:hover {
    border: 0px solid black;
  }
`;

const Img = styled.div`
  width: 100%;
  height: 237px;
  max-width: 237px;
  object-fit: cover;
  transform: translate(-20px, 20px);
  /* transition: theme.transitions.create(["transform", "border"], {
      duration: "0.3s",
      easing: theme.transitions.easing.easeInOut,
    }), */
  &:hover {
    transform: translate(0px, 0px);
    border: 10px solid #fcba03;
  }
`;

const BottomItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;

  & p {
    font-size: 25px;
    font-weight: bold;
  }
`;
