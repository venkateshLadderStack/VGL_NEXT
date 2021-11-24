import dynamic from "next/dynamic";

import { Helmet } from "react-helmet";
const Navbar = dynamic(() => import("../components/Navbar/Desktop"));
const Footer = dynamic(() => import("../components/Footer/Desktop"), {
  loading: () => <p></p>,
});

const Pagenotfound = () => {
  return (
    <>
      <Helmet>
        {/* start seo tags */}
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=yes"
        />
        <link rel="profile" href="https://gmpg.org/xfn/11" />
        <meta name="ir-site-verification-token" value="-1088507391" />
        <title>Page not found - Very Good Light</title>
        <meta name="robots" content="noindex, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Page not found - Very Good Light" />
        <meta property="og:site_name" content="Very Good Light" />
        <meta
          property="article:publisher"
          content="http://www.facebook.com/verygoodlight"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Page not found - Very Good Light" />
        <meta name="twitter:creator" content="@vgoodlight" />
        <meta name="twitter:site" content="@vgoodlight" />
      </Helmet>
      <div className="bg_main_color">
        <Navbar />
        <div className="container">
          <div id="main">
            <div className="fof">
              <h1>
                OOPS! PAGE NOT FOUND{" "}
                <span role="img" aria-label="">
                  😔
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer bg={"#FFE4B2"} />
    </>
  );
};

export default Pagenotfound;
