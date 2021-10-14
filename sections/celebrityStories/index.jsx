import React from "react";
import { Grid, Container } from "@material-ui/core";
import CelebStory from "../../components/CelebStory";
import styled from "styled-components";

export default function CelebStories({ data }) {
  return (
    <Wrapper>
      <Container>
        <H2>What's New</H2>
        <Container>
          <Grid container spacing={4}>
            {data.map(({ node }, i) => (
              <CelebStory post={node} key={i} />
            ))}
          </Grid>
        </Container>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: linear-gradient(
    rgb(255, 230, 183) 0%,
    rgb(251, 198, 187) 10%,
    rgb(178, 158, 181) 100%
  );

  inset: 0;
  transition: all 1s ease-in-out 0s;
  padding-top: 150px;
  padding-bottom: 150px;
`;

const H2 = styled.h2`
  color: black;
  font-family: "SportingGrotesque";
  font-weight: 400;
  font-style: normal;
  font-size: 42px;
  text-align: center;
  font-stretch: normal;
  letter-spacing: normal;
  line-height: 1.37;
  position: relative;
  margin-bottom: 50px;
  z-index: 4;
  top: 0;

  &:before {
    left: 0;
  }

  &:before,
  &:after {
    content: "";
    border-bottom: 4px solid;
    width: 100%;
    height: 1;
    display: block;
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    width: 33%;
  }

  &:after {
    right: 0;
  }
`;
