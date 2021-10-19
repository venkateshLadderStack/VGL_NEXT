import { useState, useEffect } from "react";
import client from "../apollo/client";
import { getPosts } from "../queries/get-posts";
import _ from "lodash";
import useWindowSize from "../hooks/useWindowSize";
import Seo from "../components/SeoHead";
import Navbar from "../components/Navbar/Desktop";
import HeroSlider from "../components/HeroSlider";
import CelebStories from "../sections/celebrityStories";
import MainNewsLetter from "../components/Newsletter/Main";
import SecondaryNewsLetter from "../components/Newsletter/Main/Secondary";
import ReviewsSection from "../sections/reviews";
import JustIn from "../sections/justin";
import Footer from "../components/Footer/Desktop";
import dynamic from "next/dynamic";

const NavbarLarge = dynamic(() => import("../components/Navbar/Desktop"));

export default function Home({ data, postsData, seoData, reviews, celebs }) {
  const size = useWindowSize();
  const [scrollActive, setScrollActive] = useState(false);

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
