import React from "react";
import { Helmet } from "react-helmet";

export default function Seo(props) {
  let { data } = props;
  return (
    <Helmet>
      {/* start seo tags */}
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,user-scalable=yes"
      />
      <link rel="profile" href="https://gmpg.org/xfn/11" />
      <meta name="ir-site-verification-token" value="-1088507391" />
      {data?.title && <title>{data?.title.replace("Archives", "")}</title>}
      {data?.metaDesc && <meta name="description" content={data?.metaDesc} />}
      <meta name="robots" content="index, follow" />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="bingbot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="google-site-verification"
        content="4iAPj_lH2EgCBAtDrTgWQL_R2kboAEpMXqzjG-lnCRQ"
      />
      <meta
        name="facebook-domain-verification"
        content="se678sbqe8v1edtyo7wzggrwl9xsr9"
      />
      {data?.canonical && (
        <link
          rel="canonical"
          href={
            data?.canonical
              ? data?.canonical.replace("cms.", "")
              : props?.link.replace("cms.", "")
          }
        />
      )}
      <meta property="og:locale" content="en_US" />
      {data?.opengraphType && (
        <meta property="og:type" content={data?.opengraphType} />
      )}
      {data?.opengraphTitle && (
        <meta
          property="og:title"
          content={data?.opengraphTitle.replace("Archives", "")}
        />
      )}
      {data?.metaDesc && (
        <meta property="og:description" content={data?.metaDesc} />
      )}
      {data?.opengraphUrl && (
        <meta
          property="og:url"
          content={data?.opengraphUrl.replace("cms.", "")}
        />
      )}
      <meta property="og:site_name" content="Very Good Light" />
      <meta
        property="article:publisher"
        content="http://www.facebook.com/verygoodlight"
      />
      {data?.opengraphPublishedTime && (
        <meta
          property="article:published_time"
          content={data?.opengraphPublishedTime}
        />
      )}
      {data?.opengraphModifiedTime && (
        <meta
          property="article:modified_time"
          content={data?.opengraphModifiedTime}
        />
      )}
      {props?.featuredImage && (
        <meta property="og:image" content={props?.featuredImage} />
      )}
      {props?.featuredImage && (
        <meta property="og:image:width" content="1920" />
      )}
      {props?.featuredImage && (
        <meta property="og:image:height" content="1080" />
      )}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@vgoodlight" />
      <meta name="twitter:site" content="@vgoodlight" />
      {props?.featuredImage && (
        <meta property="twitter:image" content={props?.featuredImage} />
      )}
      {data?.schema?.raw && (
        <script type="application/ld+json">
          {unescape(data?.schema?.raw)}
        </script>
      )}

      {/* end seo tags */}
    </Helmet>
  );
}
