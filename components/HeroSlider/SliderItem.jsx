import React from "react";
import Link from "next/link";
import ImageComponent from "../ImageComponent";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";

const SliderItemOptionTwo = ({ data }) => {
  const { width } = useWindowSize();

  return (
    <Link href="/" title={data?.title}>
      <div className="hero-area">
        <div className="hero-img hero-mobile">
          <Image
            src={data?.featuredImage?.node?.mediaItemUrl}
            placeholder="blur"
            blurDataURL={data?.featuredImage?.node?.mediaItemUrl}
            alt=""
            width={500}
            height={500}
            layout="responsive"
            objectFit="contain"
            objectPosition="center"
            loading="lazy"
            quality={60}
          />
        </div>
        <div className="hero-containt">
          <h3>{data?.title}</h3>
          <Link href="/" title={data?.title}>
            READ MORE
          </Link>
        </div>

        {width > 787 && (
          <div style={{ width: "50%", height: "unset" }}>
            <Image
              src={data?.featuredImage?.node?.mediaItemUrl}
              placeholder="blur"
              blurDataURL={data?.featuredImage?.node?.mediaItemUrl}
              alt=""
              height={400}
              width={400}
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              loading="lazy"
              quality={60}
            />
          </div>
        )}
      </div>
    </Link>
  );
};

export default SliderItemOptionTwo;
