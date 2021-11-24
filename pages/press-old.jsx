import Container from "@material-ui/core/Container";
import dynamic from "next/dynamic";
import React from "react";
import client from "../apollo/client";
import { PRESS_OLD } from "../queries/press";
import NextSeo from "../components/SeoHead/seo";
import { Context } from "../context";
const Navbar = dynamic(() => import("../components/Navbar/Desktop"));
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

const Press = ({ data }) => {
  const { page } = data;
  const { open, closePopup, signup, closeSignup } = React.useContext(Context);
  return (
    <>
      <NextSeo seo={page?.seo} link={page?.link} />
      <Navbar />
      <main className="pt_150 pb_50">
        <Container>
          <div
            dangerouslySetInnerHTML={{
              __html: page?.content,
            }}
            className="press-old-content"
          />
        </Container>
      </main>
      <Footer />
      {signup && <BottomLeftPopUp onCancel={closeSignup} />}
      <BottomRightPopUp />
      <Slideout open={open} onCancel={closePopup} />
    </>
  );
};

export default Press;

export const getStaticProps = async (context) => {
  const { data } = await client.query({
    query: PRESS_OLD,
  });

  return {
    props: {
      data,
    },
  };
};
