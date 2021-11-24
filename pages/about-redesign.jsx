import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import dynamic from "next/dynamic";
import React from "react";
import client from "../apollo/client";
import NextSeo from "../components/SeoHead/seo";
import { Context } from "../context";
const Navbar = dynamic(() => import("../components/Navbar/Desktop"));
import { GET_ABOUT } from "../queries/about";
const Footer = dynamic(() => import("../components/Footer/Desktop"), {
  loading: () => <p></p>,
});
const Slideout = dynamic(() => import("../components/SlideOut"), {
  loading: () => <p></p>,
});
const BottomLeftPopUp = dynamic(
  () => import("../components/BottomPopup/BottomLeftPopup"),
  {
    loading: () => <p></p>,
  }
);
const BottomRightPopUp = dynamic(
  () => import("../components/BottomPopup/BottomRightPopup"),
  {
    loading: () => <p></p>,
  }
);

const useStyles = makeStyles((theme) => ({
  borderAll: {
    border: "6px solid #000",
  },
  inner: {
    padding: "100px 50px",
  },
  contentElement: {
    marginBottom: 35,
  },
  heading: {
    fontFamily: "SportingGrotesque",
    fontWeight: "normal",
    fontSize: 52,
    lineHeight: "49px",
  },
  content: {
    lineHeight: "1.75em",
  },
}));

const About = ({ data }) => {
  const { page } = data;

  const classes = useStyles();
  const { open, closePopup, signup, closeSignup } = React.useContext(Context);

  return (
    <>
      <NextSeo seo={page?.seo} link={page?.link} />
      <Navbar />
      <main className="pt_100 pb_100">
        <Container>
          <Grid container>
            <Grid item sm={12} md={6} lg={6} xl={6}></Grid>
            <Grid
              item
              sm={12}
              md={6}
              lg={6}
              xl={6}
              className={classes.borderAll}
            >
              <div className={classes.inner}>
                <div className={classes.contentElement}>
                  <div>
                    <h2 className={classes.heading}>
                      About
                      <br />
                      Us
                    </h2>
                    <p className={classes.content}>
                      Since 2016, Very Good Light has championed a more
                      inclusive definition of beauty through community and
                      content.
                    </p>
                    <p className={classes.content}>
                      Today, Very Good Light is the leading beauty and skincare
                      publication for millions of Generation Z and young
                      Millennials who visit the website each month
                    </p>
                    <h2 className={`${classes.heading} mt_100`}>
                      Our
                      <br />
                      Founder
                    </h2>
                    <p className={classes.content}>
                      David is the editor and founder of Very Good Light, which
                      has been featured in the New York Times, Los Angeles
                      Times, USA Today, Allure, Vogue, and Teen Vogue, among
                      others.
                    </p>
                    <p className={classes.content}>
                      Prior to Very Good Light, David launched beauty and
                      fashion at Mashable and was nominated for a GLAAD and
                      Webby award for his work there. He’s worked at Women’s
                      Wear Daily, the New York Daily News, and has written for
                      GQ, the Wall Street Journal, Nylon, ELLE, InStyle,
                      Esquire, and Vogue.
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer />
      {signup && <BottomLeftPopUp onCancel={closeSignup} />}
      <BottomRightPopUp />
      <Slideout open={open} onCancel={closePopup} />
    </>
  );
};

export default About;

export const getStaticProps = async (context) => {
  const { data } = await client.query({
    query: GET_ABOUT,
  });

  return {
    props: {
      data,
    },
  };
};
