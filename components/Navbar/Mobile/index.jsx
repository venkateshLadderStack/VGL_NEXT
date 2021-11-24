import React from "react";
import { useStyles } from "./style";
import { Container, Grid } from "@material-ui/core";
import Link from "next/link";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

// const Image = dynamic(() => import("next/image"), {
//   loading: () => <p></p>,
// });

import Image from "next/image";

const SearchInput = dynamic(() => import("../../SearchInput"), {
  loading: () => <p></p>,
});

export default function MobileNavbar({ handelMenu, isMenuOpen, menuItems }) {
  const classes = useStyles();
  const router = useRouter();

  const [isSearch, setIsSearch] = React.useState(false);
  const [isDarkMode, setDarkMode] = React.useState(false);
  return (
    <header
      className={`${classes.root} ${classes.header}`}
      style={{
        display: isMenuOpen ? "block" : "none",
        backgroundImage: isDarkMode && "linear-gradient(#000 0%, #ffe6b7 100%)",
      }}
    >
      <div className={classes.mainHeader}>
        <Container>
          <Grid container>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <div className={classes.mobileAction}>
                <SearchIcon
                  style={{ fontSize: 35, color: isDarkMode ? "#fff" : "#000" }}
                  onClick={() => setIsSearch(!isSearch)}
                />
              </div>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link
                  className={classes.headerLogoAnchor}
                  href="/"
                  aria-label="logo"
                  passHref
                >
                  <Image
                    src={"/assets/logo.png"}
                    className={classes.headerLogo}
                    alt=""
                    width={54}
                    height={63}
                    layout="fixed"
                    priority={true}
                  />
                </Link>
              </div>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <div
                className={classes.mobileAction}
                style={{ justifyContent: "flex-end" }}
              >
                <CloseIcon
                  style={{ fontSize: 35, color: isDarkMode ? "#fff" : "#000" }}
                  onClick={handelMenu}
                />
              </div>
            </Grid>
          </Grid>
          <div className={classes.mobileMenu}>
            <div
              style={{
                maxWidth: "250px",
                marginTop: "65px",
                marginBottom: "15px",
                background: isDarkMode ? "#fff" : "transparent",
                borderRadius: "11px",
              }}
            >
              {isSearch && <SearchInput classes={classes} />}
            </div>
            <div>
              <div
                style={{
                  display: "block",
                  borderBottom: "1px solid rgba(248, 177, 149, .47)",
                  height: "100%",
                }}
              >
                <div>
                  <Link
                    href="/blog/features"
                    className={classes.primaryMenuLink}
                    style={{
                      fontWeight: 700,
                      color: isDarkMode ? "#fff" : "#000",
                    }}
                    passHref
                  >
                    <div
                      className={classes.primaryMenuLink}
                      style={{
                        fontWeight: 700,
                        color: isDarkMode ? "#fff" : "#000",
                      }}
                    >
                      Read
                    </div>
                  </Link>
                </div>
                <div className={classes.subMenu}>
                  <Grid container>
                    {menuItems &&
                      menuItems.map((menuItem, index) => (
                        <Grid item xs={6} sm={6} md={6} lg={6} key={index}>
                          <Link
                            href={`/blog/${menuItem.slug}`}
                            style={{
                              color: isDarkMode ? "#fff" : "#000",
                            }}
                          >
                            {menuItem.name}
                          </Link>
                        </Grid>
                      ))}
                  </Grid>
                </div>
              </div>
              <div
                className={classes.subMenu}
                style={{
                  paddingTop: 2.5,
                  paddingBottom: 2.5,
                  borderBottom: "1px solid rgba(248, 177, 149, .47)",
                }}
              >
                <Link
                  href="/reviews"
                  style={{
                    color: isDarkMode ? "#fff" : "#000",
                  }}
                >
                  Reviews
                </Link>
              </div>

              <div>
                <a
                  href="#"
                  className={classes.primaryMenuLink}
                  aria-label="good-light"
                  rel="noreferrer"
                  style={{
                    fontWeight: 700,
                    color: isDarkMode ? "#fff" : "#000",
                  }}
                >
                  Shop
                </a>
                <div className={classes.subMenu}>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <a
                        href="https://goodlight.world/"
                        target="__blank"
                        aria-label="good-light"
                        rel="noreferrer"
                        style={{
                          color: isDarkMode ? "#fff" : "#000",
                        }}
                      >
                        good light
                      </a>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <a
                        href="https://shop.verygoodlight.com/"
                        target="__blank"
                        aria-label="good-light"
                        rel="noreferrer"
                        style={{
                          color: isDarkMode ? "#fff" : "#000",
                        }}
                      >
                        VGL merch
                      </a>
                    </Grid>
                  </Grid>
                </div>
              </div>

              <div className={classes.darkModeContainer}>
                <div className={classes.darkModeStatus}>
                  <Image
                    src={
                      !isDarkMode
                        ? "https://cms.verygoodlight.com/wp-content/uploads/2020/06/night-mode.svg"
                        : "https://cms.verygoodlight.com/wp-content/uploads/2020/06/night-mode-activated.svg"
                    }
                    alt="Dark Mode"
                    width={40}
                    height={24}
                    layout="fixed"
                    objectPosition="bottom"
                  />
                  <span
                    style={{
                      color: isDarkMode ? "#fff" : "#000",
                    }}
                  >
                    Dark Mode
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    className="apple-switch"
                    type="checkbox"
                    value={isDarkMode}
                    onChange={(e) => setDarkMode(e.target.checked)}
                  />
                </div>
              </div>
              <div className={classes.socialPageContainer}>
                <div>
                  <a
                    href="#"
                    style={{
                      color: isDarkMode ? "#fff" : "#000",
                    }}
                    aria-label="icon"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="#"
                    style={{
                      color: isDarkMode ? "#fff" : "#000",
                    }}
                    aria-label="icon"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="#"
                    style={{
                      color: isDarkMode ? "#fff" : "#000",
                    }}
                    aria-label="icon"
                  >
                    <YouTubeIcon />
                  </a>
                  <a
                    href="#"
                    style={{
                      color: isDarkMode ? "#fff" : "#000",
                    }}
                    aria-label="icon"
                  >
                    <TwitterIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
