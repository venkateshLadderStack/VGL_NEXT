import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      "linear-gradient(rgb(251, 198, 187) 0%, rgb(178, 158, 181) 100%)",
    inset: 0,
    transition: "all 1s ease-in-out 0s",
    paddingBottom: 50,
  },
  vglJustInner: {
    paddingLeft: 15,
    paddingRight: 15,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  vglJustInLeftColumn: {
    paddingLeft: 15,
    paddingRight: 45,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      paddingRight: 15,
    },
  },
  vglJustInPostsContainer: {
    paddingBottom: 16,
    marginLeft: 15,
    marginRight: 15,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  vglJustInHeading: {
    fontFamily: "SportingGrotesque",
    fontSize: 42,
    fontWeight: 400,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.37,
    letterSpacing: "normal",
    color: "#000",
    position: "relative",
    marginBottom: 30,
    zIndex: 100,
    top: 0,
    left: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: 34,
    },
  },
  vglImgEmoji: {
    display: "inline !important",
    border: "none !important",
    boxShadow: "none !important",
    height: "1em !important",
    width: "1em !important",
    margin: "0 .07em !important",
    verticalAlign: "-0.1em !important",
    background: "none !important",
    padding: "0 !important",
  },
  vglStickyAds: {
    marginTop: 72,
    maxWidth: "410px !important",
    paddingBottom: 150,
  },
  vglColumnInner: {
    paddingLeft: 15,
    paddingRight: 15,
    width: "100%",
  },
  vglSticky: {
    position: "-webkit-sticky",
    position: "sticky",
    top: 80,
  },
}));
