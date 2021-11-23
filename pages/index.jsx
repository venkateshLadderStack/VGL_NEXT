import { useState, useEffect, useContext } from "react";
import client from "../apollo/client";
import { getPosts } from "../queries/get-posts";
import _ from "lodash";
import useWindowSize from "../hooks/useWindowSize";
import NextSeo from "../components/SeoHead/seo";
import dynamic from "next/dynamic";
import { Context } from "../context";

const NavbarLarge = dynamic(() => import("../components/Navbar/Desktop"));
const HeroSlider = dynamic(() => import("../components/HeroSlider"), {
  ssr: false,
});
const CelebStories = dynamic(() => import("../sections/celebrityStories"), {
  ssr: false,
});

const MainNewsLetter = dynamic(() => import("../components/Newsletter/Main"), {
  ssr: false,
});
const SecondaryNewsLetter = dynamic(
  () => import("../components/Newsletter/Main/Secondary"),
  {
    ssr: false,
  }
);
const ReviewsSection = dynamic(() => import("../sections/reviews"), {
  ssr: false,
});
const JustIn = dynamic(() => import("../sections/justin"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/Footer/Desktop"), {
  ssr: false,
});
const Slideout = dynamic(() => import("../components/SlideOut"), {
  ssr: false,
});
const BottomLeftPopUp = dynamic(
  () => import("../components/BottomPopup/BottomLeftPopup"),
  {
    ssr: false,
  }
);
const BottomRightPopUp = dynamic(
  () => import("../components/BottomPopup/BottomRightPopup"),
  {
    ssr: false,
  }
);

export default function Home({ data, postsData, seoData, reviews, celebs }) {
  const size = useWindowSize();
  const [scrollActive, setScrollActive] = useState(false);

  const { open, closePopup, signup, closeSignup } = useContext(Context);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Remove the event listener when the component is unmount.
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  };

  const posts = _.filter(
    postsData?.edges,
    (post) => post.node.subHeading.dontShowOnHomePage === null
  );

  let sliderData = posts.slice(0, 3);
  let masonryGridData = posts.slice(3, 11);
  let justInSectionData = posts.slice(11, 21);
  let pageInfo = postsData?.pageInfo;
  let reviewsPosts = reviews?.edges;

  return (
    <>
      <NextSeo seo={seoData?.seo} link={seoData?.link} />
      <NavbarLarge />
      <main
        style={{
          backgroundColor: "rgb(255,228,183)",
          paddingTop: size?.width > 991 ? 68 : 110,
        }}
      >
        <div
          className={`vgl-hero-slider vgl-slider-container ${
            scrollActive && "scrolled"
          }`}
        >
          <div
            className="vgl-slider-item-border-bottom"
            style={{ background: "rgb(95, 100, 97)" }}
          ></div>
          <HeroSlider data={sliderData} />
        </div>

        <CelebStories data={masonryGridData} />

        <MainNewsLetter />

        <ReviewsSection data={reviewsPosts} rev={true} title="Reviews" />
        <ReviewsSection
          data={celebs?.edges}
          rev={false}
          title="Celeb stories"
        />

        <JustIn data={justInSectionData} pageInfo={pageInfo} />

        <SecondaryNewsLetter />

        <Footer bg={"#f8b195"} />

        {signup && <BottomLeftPopUp onCancel={closeSignup} />}
        <BottomRightPopUp />
        <Slideout open={open} onCancel={closePopup} />
      </main>
    </>
  );
}

export const getStaticProps = async (context) => {
  const { data } = await client.query({
    query: getPosts,
  });

  return {
    props: {
      data,
      postsData: data.posts,
      celebs: data.celebs,
      reviews: data.reviews,
      seoData: data.seoData,
    },
  };
};
