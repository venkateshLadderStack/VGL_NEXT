import React from "react";
import Slider from "react-slick";
import SliderItemOptionTwo from "./SliderItem";
import SliderWrapper from "./_SlickSliderStyle";

function HeroSlider({ data }) {
  const settings = {
    dots: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    pauseOnHover: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        {/* <div className="loading" /> */}
      </div>
    ),
  };

  return (
    <div style={{ background: "#FFE4B7" }}>
      <SliderWrapper>
        <Slider {...settings}>
          {data.map(({ node }, i) => (
            <div className="testimoni--wrapper" key={i}>
              <SliderItemOptionTwo data={node} />
            </div>
          ))}
        </Slider>
      </SliderWrapper>
    </div>
  );
}
export default HeroSlider;
