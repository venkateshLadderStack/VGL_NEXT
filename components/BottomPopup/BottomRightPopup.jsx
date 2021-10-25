import React, { useState, useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Image from "next/image";

const BottomRightPopUp = () => {
  const size = useWindowSize();

  return (
    <>
      {size?.width > 991 && (
        <div className="right_popup_button">
          <a href="https://goodlight.world/" target="_blank" rel="noreferrer">
            <Image
              src={"/assets/VGL-Sticky-V2.png"}
              alt="Shop"
              width={250}
              height={250}
              objectFit="contain"
              objectPosition="center"
              loading="lazy"
              placeholder="blur"
              blurDataURL={"/assets/VGL-Sticky-V2.png"}
            />
          </a>
        </div>
      )}
    </>
  );
};

export default BottomRightPopUp;
