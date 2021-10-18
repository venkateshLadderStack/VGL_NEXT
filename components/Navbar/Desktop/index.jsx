import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import MobileMenu from "../Mobile";
import { Container } from "@material-ui/core";
import SearchInput from "../../searchInput";
import { Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ReactPixel from "../../../utils/snapchatpixel";
import useWindowSize from "../../../hooks/useWindowSize";
import TopBar from "../TopBar";
import { useQuery } from "@apollo/client";
import { getCategories } from "../../../queries/get-categories";
import Link from "next/link";
import styled from "styled-components";
import ImageComponent from "../../ImageComponent";

export default function Navbar() {
  const { loading, error, data } = useQuery(getCategories);

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

        <TopBar
          navActive={navActive}
          classesNavbarActive={classes.navbarActive}
        />

        {/* added extra margin top for the sake of top bar */}
        <div className="d-lg-none" style={{ width: "100%", marginTop: "50px" }}>
          {/* <!--  Show this only on mobile to medium screens  --> */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* <ul className="navbar-nav">
              <li className="nav-item"> */}
            <div className={classes.mobileAction}>
              <SearchIcon
                style={{ fontSize: 35, color: "rgba(0,0,0,.5)" }}
                onClick={() => setIsSearch(!isSearch)}
              />
            </div>
            {/* </li>
            </ul> */}

            <Link
              className="navbar-brand d-lg-none header-logo"
              href="/"
              style={{ marginRight: 0 }}
            >
              <img
                src={
                  size?.width < 768 ? "/assets/logo.png" : "/assets/test.png"
                }
                alt=""
                className={`${
                  navActive ? classes.navLogoActive : classes.headerLogo
                }`}
              />

              {/* <ImageComponent
                src={
                  size?.width < 768 ? "/assets/logo.png" : "/assets/test.png"
                }
                className={`${
                  navActive ? classes.navLogoActive : classes.headerLogo
                }`}
                alt=""
                width={size?.width < 768 ? 54 : 250}
                height={navActive ? 63 : 43}
                layout="responsive"
                loading="lazy"
                objectFit="cover"
              /> */}
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
                  <a
                    className={`nav-link vgl__dropdown-option ${classes.primaryMenuLink}`}
                    href="/blog/features"
                    data-toggle="dropdown"
                    style={{ padding: 0 }}
                  >
                    <>
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
                                      <a
                                        className={`nav-link ${classes.secondaryMenuLink}`}
                                        href={`/blog/${menuItem.slug}`}
                                      >
                                        {menuItem.name}
                                      </a>
                                    </li>
                                  </ul>
                                </Grid>
                              ))}
                          </Grid>
                        </ul>
                      </div>
                    </>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${classes.primaryMenuLink}`}
                    href="/reviews"
                  >
                    Reviews
                  </a>
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
                    data-toggle="dropdown"
                    style={{
                      padding: 0,
                    }}
                  >
                    <>
                      <div
                        className={`nav-link vgl__dropdown-option ${
                          linkActive.shop && classes.activeUnderline
                        }`}
                      >
                        shop
                      </div>
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
            <a
              className="navbar-brand d-none d-lg-block header-logo"
              href="/"
              style={{ marginRight: 0 }}
            >
              <a>
                <img
                  src={"/assets/test.png"}
                  className={`${
                    navActive ? classes.navLogoActive : classes.headerLogo
                  }`}
                  alt=""
                />
                {/* <ImageComponent
                  src={"/assets/test.png"}
                  className={`${
                    navActive ? classes.navLogoActive : classes.headerLogo
                  }`}
                  alt=""
                  width={250}
                  height={63}
                  layout="fixed"
                  loading="lazy"
                /> */}
              </a>
            </a>

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
