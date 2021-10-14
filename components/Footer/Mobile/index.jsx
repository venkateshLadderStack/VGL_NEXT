import React, { memo } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./style";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
// import Logo from "../../../images/footer-logo.png";
import Link from "next/link";
import Image from "next/image";

export default memo(({ bg }) => {
  const classes = useStyles();
  const [scrollEnd, setScrollEnd] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("scroll", _scrolling);
    return () => {
      document.removeEventListener("scroll", _scrolling);
    };
  }, []);
  const _scrolling = (e) => {
    if (
      document.documentElement.scrollTop + window.innerHeight ===
      document.documentElement.scrollHeight
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };
  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} md={8} lg={8} style={{ marginBottom: 50 }}>
            <div className={classes.topright}>
              <Image
                src={"/assets/footer-logo.png"}
                className={classes.logo}
                alt=""
                width={80}
                height={88}
                layout="fixed"
              />
              <p className={classes.text}>
                Add a handsome wink{" "}
                <span role="img" aria-label="">
                  ⚡️
                </span>{" "}
                every week by subscribing to our newsletter.
              </p>
              <form>
                <input
                  type="email"
                  required={true}
                  placeholder="Enter your email"
                  className={classes.input}
                />
                <br />
                <div style={{ padding: "10px 0px" }}>
                  <button type="submit" className={classes.btn}>
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </Grid>
          <Grid item xs={6} md={2} lg={2} style={{ marginTop: 130 }}>
            <p className={classes.heading}>Topic</p>
            <ul>
              <li>
                <Link
                  href="/blog/face"
                  title="Face"
                  state={{ category: "Face" }}
                >
                  Face
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/body"
                  title="Body"
                  state={{ category: "Body" }}
                >
                  Body{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/hair"
                  title="Hair"
                  state={{ category: "Hair" }}
                >
                  Hair
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/real-life"
                  title="Real Life"
                  state={{ category: "Real Life" }}
                >
                  True Life
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} md={2} lg={2} style={{ marginTop: 130 }}>
            <p className={classes.heading}>Company</p>
            <ul>
              <li>
                <Link href="/press-old" title="Press">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/about-redesign/" title="About">
                  About
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use-old/" title="Terms Of Use">
                  Term of use
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={12}>
            <div className={classes.footerBottom}>
              <p className={classes.btext}>&#169; 2021 very good light</p>
              <div>
                <Link
                  href="https://www.facebook.com/verygoodlight/"
                  title="Very Good Light"
                  target="_blank"
                >
                  {" "}
                  <FacebookIcon className={classes.icon} />
                </Link>
                <Link
                  href="https://www.instagram.com/verygoodlight"
                  title="Very Good Light"
                  target="_blank"
                >
                  {" "}
                  <InstagramIcon className={classes.icon} />
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
});
