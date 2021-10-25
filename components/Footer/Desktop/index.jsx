import React, { memo, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./style";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Link from "next/link";
import Axios from "axios";
import useLocalStorage from "../../../hooks/useLocalStorage";
import ImageComponent from "../../ImageComponent";

const defaultState = {
  isOpen: false,
  isClose: false,
  setOpen: () => {},
  setIsClose: () => {},
};

export const FloatingBannerContext = React.createContext(defaultState);

const Footer = ({ bg, showBannerModal }) => {
  const classes = useStyles();
  const [scrollEnd, setScrollEnd] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [isCLose, setIsClose] = useLocalStorage("bannerCLosed", false);

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

  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError(false);
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      let body = {
        api_key: "pk_4bc3ef005d166379eca153d06ca519a338",
        profiles: [
          {
            email: email,
            property: "vgl newsletter",
          },
        ],
      };
      await Axios.post("http://localhost:3000/", body)
        .then((res) => {
          setError(false);
          setSuccess(true);
          setMessage("Check your email box!");
          setEmail("");
        })
        .catch((err) => {
          setError(true);
          setSuccess(false);
          setMessage("Something went wrong!");
        });
    } else {
      setError(true);
      setSuccess(false);
      setMessage("Email is required!");
    }
  };

  useEffect(() => {
    if (window !== undefined) {
      window.onbeforeunload = function () {
        setIsClose(false);
      };
    }
  }, []);

  return (
    <>
      <div style={{ backgroundColor: `${bg}` }}>
        <div
          className={classes.clipPolygon}
          style={{ display: !scrollEnd ? "block" : "none" }}
        ></div>
        <div
          className={classes.root}
          style={{
            backgroundImage: `url(https://media.verygoodlight.com/wp-content/uploads/2020/06/bottom-logo.png)`,
          }}
        >
          <Grid container>
            <Grid item xs={12} md={8} lg={8} style={{ marginBottom: 50 }}>
              <div className={classes.topright}>
                <ImageComponent
                  src={"/assets/footer-logo.png"}
                  className={classes.logo}
                  alt=""
                  width={80}
                  height={88}
                  layout="fixed"
                  loading="lazy"
                />
                <p className={classes.text}>
                  Add a handsome wink{" "}
                  <span role="img" aria-label="">
                    ⚡️
                  </span>{" "}
                  every week by subscribing to our newsletter.
                </p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    required={true}
                    placeholder="Enter your email"
                    className={classes.input}
                    onChange={handleChange}
                  />
                  <br />
                  {error && (
                    <p
                      style={{
                        textAlign: "start",
                        color: "white",
                        marginTop: 5,
                        fontSize: 15,
                      }}
                    >
                      {message}
                    </p>
                  )}
                  {success && (
                    <p
                      style={{
                        textAlign: "start",
                        color: "white",
                        marginTop: -25,
                        marginTop: 5,
                        fontSize: 15,
                      }}
                    >
                      {message}
                    </p>
                  )}
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
                  <Link href="/blog/face">Face</Link>
                </li>
                <li>
                  <Link href="/blog/body">Body </Link>
                </li>
                <li>
                  <Link href="/blog/hair">Hair</Link>
                </li>
                <li>
                  <Link href="/blog/real-life">True Life</Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={6} md={2} lg={2} style={{ marginTop: 130 }}>
              <p className={classes.heading}>Company</p>
              <ul>
                <li>
                  <Link href="/press-old">Press</Link>
                </li>
                <li>
                  <Link href="/about-redesign/">About</Link>
                </li>
                <li>
                  <Link href="/terms-of-use-old/">Term of use</Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} md={12}>
              <div className={classes.footerBottom}>
                <p className={classes.btext}>&#169; 2021 very good light</p>
                <div>
                  <a
                    href="https://www.facebook.com/verygoodlight/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="facebook-link"
                  >
                    {" "}
                    <FacebookIcon className={classes.icon} />
                  </a>
                  <a
                    href="https://www.instagram.com/verygoodlight"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="insta-link"
                  >
                    {" "}
                    <InstagramIcon className={classes.icon} />
                  </a>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Footer;
