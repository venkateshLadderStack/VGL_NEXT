import React from "react";
import Link from "next/link";
import ImageComponent from "../ImageComponent";

const SliderItemOptionTwo = ({ data }) => {
  return (
    <Link href="/" title={data?.title}>
      <div className="hero-area">
        <div className="hero-img hero-mobile">
          <ImageComponent
            src={data?.featuredImage?.node?.mediaItemUrl}
            alt=""
            width={500}
            height={500}
            layout="responsive"
            objectFit="contain"
            objectPosition="center"
            loading="lazy"
          />
        </div>
        <div className="hero-containt">
          <h3>{data?.title}</h3>
          <Link href="/" title={data?.title}>
            READ MORE
          </Link>
        </div>
        <div className="hero-img">
          <ImageComponent
            className="hero-img-img"
            src={data?.featuredImage?.node?.mediaItemUrl}
            alt=""
            height={400}
            width={400}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </Link>
  );
};

export default SliderItemOptionTwo;
