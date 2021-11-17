import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ReactPixel from "../../../utils/snapchatpixel";
import useWindowSize from "../../../hooks/useWindowSize";
import { useQuery } from "@apollo/client";
import { getCategories } from "../../../queries/get-categories";
import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"), {
  loading: () => <p>...</p>,
});

const TopBar = dynamic(() => import("../Topbar"), {
  loading: () => <p>...</p>,
});
const MobileMenu = dynamic(() => import("../Mobile"), {
  loading: () => <p>...</p>,
});
const SearchInput = dynamic(() => import("../../SearchInput"), {
  loading: () => <p>...</p>,
});
export default function Navbar() {
  const { loading, error, data } = useQuery(getCategories);

  const router = useRouter();

  const classes = useStyles();
  const size = useWindowSize();

  const [navActive, setNavActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = React.useState(false);
  const [linkActive, setLinkActive] = React.useState({
    read: false,
    shop: false,
  });

  // this piece of code is for menuitems
  const menuItems = data?.categories?.nodes
    .filter((node) => node.name !== "Uncategorized")
    .filter((node) => node.name !== "True Life");

  useEffect(() => {
    ReactPixel.init(
      "368548c6-79c2-4489-8c7a-7b399d1ca41e",
      {},
      { debug: false }
    );
    ReactPixel.pageView();
    ReactPixel.snaptr("track", "PAGE_VIEW");
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      // Remove the event listener when the component is unmount.
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setNavActive(true);
    } else {
      setNavActive(false);
    }
  };

  const handleCloseMobileMenu = () => {
    setIsMobile(false);
  };

  const handleOpenMobileMenu = () => {
    setIsSearch(false);
    setIsMobile(true);
  };

  const handleResize = (e) => {
    if (window.innerWidth > 991) {
      setIsSearch(false);
      setIsMobile(false);
    }
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          navActive && classes.navbarActive
        }`}
      >
        {/* visibile only on small screen with text shop good light */}

        <TopBar className={classes.navbarActive} />

        {/* added extra margin top for the sake of top bar */}
        <div className="d-lg-none" style={{ width: "100%", marginTop: "50px" }}>
          {/* <!--  Show this only on mobile to medium screens  --> */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px 10px",
            }}
          >
            <div className={classes.mobileAction}>
              <SearchIcon
                style={{ fontSize: 35, color: "rgba(0,0,0,.5)" }}
                onClick={() => setIsSearch(!isSearch)}
              />
            </div>

            <Link
              className="navbar-brand d-lg-none header-logo pointer"
              href="/"
              style={{ marginRight: 0 }}
              aria-label="logo"
              passHref
            >
              <Image
                src={
                  size?.width < 768 ? "/assets/logo.png" : "/assets/test.png"
                }
                className={`${
                  navActive ? classes.navLogoActive : classes.headerLogo
                }`}
                alt=""
                width={size?.width < 768 ? 54 : 250}
                height={navActive ? 43 : 63}
                layout="fixed"
                loading="lazy"
                objectFit="contain"
                placeholder="blur"
                blurDataURL={
                  size?.width < 768 ? "/assets/logo.png" : "/assets/test.png"
                }
              />
            </Link>

            <button
              className="navbar-toggler custom-toggler"
              type="button"
              data-toggle="collapse"
              // data-target="#navbarToggle"
              aria-controls="navbarToggle"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleOpenMobileMenu}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
        {isSearch && (
          <div
            style={{
              position: "absolute",
              background: "#fff",
              borderRadius: 61,
              top: 140,
              left: 30,
            }}
          >
            <SearchInput classes={classes} />
          </div>
        )}
        <Container>
          {/* <!--  Use flexbox utility classes to change how the child elements are justified  --> */}
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarToggle"
          >
            <div>
              <ul className="navbar-nav navbar-menu">
                <li
                  className="nav-item dropdown"
                  onMouseEnter={() =>
                    setLinkActive({ ...linkActive, read: true })
                  }
                  onMouseLeave={() => {
                    setLinkActive({ ...linkActive, read: false });
                  }}
                >
                  <div
                    className={`nav-link vgl__dropdown-option pointer ${classes.primaryMenuLink}`}
                    data-toggle="dropdown"
                    style={{ padding: 0 }}
                    aria-label="read-section"
                    onClick={() => router.push("/blog/features")}
                  >
                    <div
                      className={`nav-link vgl__dropdown-option ${
                        linkActive.read && classes.activeUnderline
                      }`}
                    >
                      read
                    </div>
                    <div className="nav-bg">
                      <ul
                        className="dropdown-menu-columns-2 multi-column "
                        style={{
                          paddingTop: 90,
                          background: "#fffcf2",
                        }}
                      >
                        <Grid
                          container
                          style={{
                            borderTop: "1px solid #fbc6bb",
                            borderBottom: "3px solid #fbc6bb",
                            paddingLeft: 15,
                          }}
                        >
                          {menuItems &&
                            menuItems.map((menuItem, index) => (
                              <Grid
                                item
                                xs={6}
                                sm={6}
                                md={6}
                                lg={6}
                                style={{
                                  padding: 0,
                                  margin: 0,
                                }}
                                key={index}
                              >
                                <ul className="multi-column-dropdown">
                                  <li
                                    className="nav-item"
                                    style={{
                                      padding: 0,
                                      margin: "16px 0",
                                    }}
                                  >
                                    <div
                                      aria-label="menu-items"
                                      className={`nav-link pointer ${classes.secondaryMenuLink}`}
                                      onClick={() =>
                                        router.push(`/blog/${menuItem.slug}`)
                                      }
                                    >
                                      {menuItem.name}
                                    </div>
                                  </li>
                                </ul>
                              </Grid>
                            ))}
                        </Grid>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className={`nav-link pointer ${classes.primaryMenuLink}`}
                    onClick={() => router.push("/reviews")}
                    aria-label="reviews"
                  >
                    Reviews
                  </div>
                </li>
                <li
                  className="nav-item dropdown"
                  onMouseEnter={() =>
                    setLinkActive({ ...linkActive, shop: true })
                  }
                  onMouseLeave={() => {
                    setLinkActive({ ...linkActive, shop: false });
                  }}
                >
                  <a
                    href="https://goodlight.world"
                    className={`nav-link vgl__dropdown-option ${classes.primaryMenuLink}`}
                    target="_blank"
                    rel="noreferrer"
                    data-toggle="dropdown"
                    aria-label="good-light"
                    style={{
                      padding: 0,
                    }}
                  >
                    <>
                      <a
                        className={`nav-link vgl__dropdown-option black ${
                          linkActive.shop && classes.activeUnderline
                        }`}
                        href="https://goodlight.world/"
                        target="_blank"
                        aria-label="good-light"
                        rel="noreferrer"
                      >
                        shop
                      </a>
                      <div className="nav-bg custom-width move-left">
                        <ul
                          className="dropdown-menu-columns-2 multi-column custom-width"
                          style={{
                            paddingTop: 90,
                            background: "#fffcf2",
                          }}
                        >
                          <Grid container>
                            <Grid
                              item
                              xs={12}
                              sm={12}
                              md={12}
                              lg={12}
                              style={{
                                borderTop: "1px solid #fbc6bb",
                                borderBottom: "3px solid #fbc6bb",
                                paddingLeft: 15,
                              }}
                            >
                              <ul className="multi-column-dropdown">
                                <a
                                  className={`nav-link ${classes.secondaryMenuLink}`}
                                  href="https://goodlight.world/"
                                  target="_blank"
                                  aria-label="good-light"
                                  rel="noreferrer"
                                >
                                  <li
                                    className="nav-item"
                                    style={{ textTransform: "lowercase" }}
                                  >
                                    good light
                                  </li>
                                </a>
                                <li className="nav-item">
                                  <a
                                    className={`nav-link ${classes.secondaryMenuLink}`}
                                    href="https://shop.verygoodlight.com/"
                                    target="_blank"
                                    aria-label="good-light"
                                    rel="noreferrer"
                                  >
                                    VGL merch
                                  </a>
                                </li>
                              </ul>
                            </Grid>
                          </Grid>
                        </ul>
                      </div>
                    </>
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--   Show this only lg screens and up   --> */}
            <Link
              className="navbar-brand d-none d-lg-block header-logo pointer"
              href="/"
              style={{ marginRight: 0 }}
              aria-label="logo"
              rel="noreferrer"
              passHref
            >
              <div>
                <Image
                  src={"/assets/test.png"}
                  className={`pointer ${
                    navActive ? classes.navLogoActive : classes.headerLogo
                  }`}
                  alt=""
                  width={250}
                  height={navActive ? 43 : 63}
                  layout="fixed"
                  loading="lazy"
                  objectFit="contain"
                  objectPosition="center"
                  placeholder="blur"
                  blurDataURL={"/assets/test.png"}
                />
              </div>
            </Link>

            <ul className="navbar-nav">
              <li className="nav-item">
                <SearchInput classes={classes} />
              </li>
            </ul>
          </div>
        </Container>
      </nav>
      <MobileMenu
        handelMenu={handleCloseMobileMenu}
        isMenuOpen={isMobile}
        menuItems={menuItems}
      />
    </>
  );
}
