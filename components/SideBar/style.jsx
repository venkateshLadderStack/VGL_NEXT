import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  sidebar: {
    position: "relative",
    // width: "20%",
    zIndex: 0,
    marginLeft: "auto",
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  fixed: {
    position: "fixed",
  },
  blogPostSidebar: {
    position: "relative",
    width: "100%",
    zIndex: 90,
    background: "white",
    borderLeft: "solid 1px #f1f1f1",
    paddingBottom: 60,
    [theme.breakpoints.down("sm")]: {
      borderLeft: "none",
      // paddingBottom: 0,
    },
  },
  desktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobile: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  blogPost: {
    padding: 15,
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "row",
      padding: 0,
      height: 150,
    },
  },
  blogPostFeaturedImage: {
    paddingTop: "calc(100% / 6 * 3)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
      maxWidth: 161,
      width: "100%",
    },
  },
  blogPostTitle: {
    fontFamily: "Lato",
    fontSize: 12,
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.5,
    letterSpacing: "normal",
    color: "#000000",
    marginTop: 5,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
      //   maxWidth: "60%",
      padding: "0px 10px 0px 14px",
      fontSize: "0.75rem",
      width: "100%",
      display: "flex",
      alignItems: "center",
    },
  },
}));
