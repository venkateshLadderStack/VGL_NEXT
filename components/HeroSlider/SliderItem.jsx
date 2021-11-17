import React from "react";
import Link from "next/link";
import useWindowSize from "../../hooks/useWindowSize";
import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"), {
  loading: () => <p>...</p>,
});

const SliderItemOptionTwo = ({ data }) => {
  const { width } = useWindowSize();

  return (
    <Link href={data?.uri} title={data?.title} passHref>
      <div className="hero-area">
        <div className="hero-img hero-mobile pointer">
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
            priority={true}
            quality={40}
          />
        </div>
        <div className="hero-containt">
          <h3>{data?.title}</h3>
          <Link href={data?.uri} title={data?.title}>
            READ MORE
          </Link>
        </div>

        {width > 787 && (
          <div style={{ width: "50%", height: "unset" }} className="pointer">
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
              priority={true}
              quality={40}
            />
          </div>
        )}
      </div>
    </Link>
  );
};

export default SliderItemOptionTwo;
