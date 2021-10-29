import React from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const Seo = ({ seo, link, featuredImage }) => {
  const APP_DESCRIPTION =
    "A more inclusive definition of beauty, and the leading genderless beauty and skincare publication for Generation Z and young Millennials.";
  const APP_NAME = "Very Good Light";
  const APP_TITLE =
    "Beauty for all spectrums with how-to's, grooming tips, product reviews, celebrity interviews and more!- Very Good Light";

  const site = "https://verygoodlight.com";
  const canonicalURL = site + useRouter().asPath;

  console.log(seo);

  return (
    <>
      <NextSeo
        title={seo?.metaTitle || seo?.opengraphTitle || APP_TITLE}
        description={
          seo?.metaDesc || seo?.opengraphDescription || APP_DESCRIPTION
        }
        canonical={canonicalURL}
        noindex={false}
        openGraph={{
          title: seo?.opengraphTitle || APP_NAME,
          description: seo?.opengraphDescription || APP_DESCRIPTION,
          url: canonicalURL,
          locale: "en_US",
          images: [
            {
              url: featuredImage || "/assets/logo.webp",
              width: 850,
              height: 650,
              alt: "featuredImage",
            },
          ],
          twitter: {
            handle: "@vgoodlight",
            site: "@vgoodlight",
            cardType: "summary",
            image: featuredImage || "/assets/logo.webp",
          },
        }}
      />
    </>
  );
};

export default Seo;
