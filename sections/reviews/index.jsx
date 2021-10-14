import React from "react";
import { useStyles } from "./style";
import { Container } from "@material-ui/core";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Post from "../../components/Post/reviewHome";

export default function ReviewsSection({ data, rev, title }) {
  const classes = useStyles();

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    slidesPerView: 4,
    spacing: 15,
    breakpoints: {
      "(max-width: 992px)": {
        slidesPerView: 2,
      },
      "(max-width: 768px)": {
        slidesPerView: 1,
      },
    },
  });

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: rev
          ? "linear-gradient(rgb(152, 157, 205) 0%, rgb(255, 255, 255) 100%)"
          : "linear-gradient(rgb(255, 255, 255) 0%, rgb(251, 198, 187) 100%)",
      }}
    >
      <h2 className="review__section-heading">{title}</h2>
      <div style={{ padding: "60px 30px" }}>
        <Container>
          <div className="navigation-wrapper">
            <div
              ref={sliderRef}
              className="keen-slider"
              style={{ paddingLeft: 15, paddingRight: 15 }}
            >
              {data.map(({ node }, i) => (
                <div className="keen-slider__slide" key={i}>
                  <Post post={node} />
                </div>
              ))}
            </div>
            {slider && (
              <>
                <ArrowLeft
                  onClick={(e) => e.stopPropagation() || slider.prev()}
                  disabled={currentSlide === 0}
                />
                <ArrowRight
                  onClick={(e) => e.stopPropagation() || slider.next()}
                  disabled={currentSlide === slider.details().size - 2}
                  slide={currentSlide}
                />
              </>
            )}
          </div>
          {slider && (
            <div className="dots">
              {[...Array(slider.details().size - 3).keys()].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      slider.moveToSlideRelative(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  />
                );
              })}
            </div>
          )}
        </Container>
      </div>
    </div>
  );
}

function ArrowLeft(props) {
  // const disabeld = props.disabled ? "arrow--disabled" : "";
  return (
    <KeyboardArrowLeftIcon
      onClick={props.onClick}
      className={"arrow arrow--left"}
      style={{
        opacity: props.disabled ? 0.25 : 1,
      }}
    />
    // <svg
    //   onClick={props.onClick}
    //   className={"arrow arrow--left" + disabeld}
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 24 24"
    // >
    //   <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    // </svg>
  );
}

function ArrowRight(props) {
  // const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <KeyboardArrowRightIcon
      onClick={props.onClick}
      className={"arrow arrow--right"}
      style={{ opacity: props.disabled ? 0.25 : 1 }}
    />
    // <svg
    //   onClick={props.onClick}
    //   className={"arrow arrow--right" + disabeld}
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 24 24"
    // >
    //   <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    // </svg>
  );
}
