import { useState, useEffect } from "react";
import client from "../apollo/client";
import { getPosts } from "../queries/get-posts";
import _ from "lodash";
import useWindowSize from "../hooks/useWindowSize";
import Seo from "../components/SeoHead";
// import Navbar from "../components/Navbar/Desktop";
// import HeroSlider from "../components/HeroSlider";
// import CelebStories from "../sections/celebrityStories";
// import MainNewsLetter from "../components/Newsletter/Main";
// import SecondaryNewsLetter from "../components/Newsletter/Main/Secondary";
// import ReviewsSection from "../sections/reviews";
// import JustIn from "../sections/justin";
// import Footer from "../components/Footer/Desktop";
import dynamic from "next/dynamic";
import useInView from "react-cool-inview";

const NavbarLarge = dynamic(() => import("../components/Navbar/Desktop"));
const CelebStories = dynamic(() => import("../sections/celebrityStories"));
const HeroSlider = dynamic(() => import("../components/HeroSlider"));
const MainNewsLetter = dynamic(() => import("../components/Newsletter/Main"));
const SecondaryNewsLetter = dynamic(() =>
  import("../components/Newsletter/Main/Secondary")
);
const ReviewsSection = dynamic(() => import("../sections/reviews"));
const JustIn = dynamic(() => import("../sections/justin"));
const Footer = dynamic(() => import("../components/Footer/Desktop"));

export default function Home({ data, postsData, seoData, reviews, celebs }) {
  const size = useWindowSize();
  const [scrollActive, setScrollActive] = useState(false);

  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });

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
    <div ref={observe}>
      <Seo data={seoData?.seo} link={seoData?.link} />
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
          {inView && <HeroSlider data={sliderData} />}
        </div>

        {inView && <CelebStories data={masonryGridData} />}

        {inView && <MainNewsLetter />}

        {inView && (
          <ReviewsSection data={reviewsPosts} rev={true} title="Reviews" />
        )}

        {inView && (
          <ReviewsSection
            data={celebs?.edges}
            rev={false}
            title="Celeb stories"
          />
        )}

        {inView && <JustIn data={justInSectionData} pageInfo={pageInfo} />}

        {inView && <SecondaryNewsLetter />}
      </main>
      {inView && <Footer bg={"#f8b195"} />}
    </div>
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
