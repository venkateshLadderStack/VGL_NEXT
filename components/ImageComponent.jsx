import Image from "next/image";
import React from "react";

const ImageComponent = ({
  src,
  width,
  height,
  loading = "lazy",
  quality = 80,
  layout = "responsive",
  blurDataURL,
}) => {
  return (
    <Image
      src={src}
      alt="Picture of the author"
      width={width ? width : undefined}
      height={height ? height : undefined}
      layout={layout}
      quality={quality}
      blurDataURL={blurDataURL ? blurDataURL : undefined}
      loading={loading}
    />
  );
};

export default ImageComponent;
