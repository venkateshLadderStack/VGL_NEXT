import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  vglPost: {
    marginBottom: 50,
    "&::before , &::after": {
      content: '""',
      display: "table",
      clear: "both",
    },
  },
  vglFeaturedImg: {
    width: "50%",
    float: "left",
    paddingRight: 15,
    position: "relative",
    "& div": {
      paddingTop: "50%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50%",
      transition: "all 1.5s",
      "-webkit-transition": "all 1.5s",
      "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "calc(100% - 15px)",
        height: "100%",
        background: "#000",
        opacity: 0,
      },

      "& a": {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        textDecoration: "none",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      float: "none",
      paddingRight: 0,
    },
  },
  vglPostInfo: {
    width: "50%",
    float: "left",
    paddingLeft: 15,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      float: "none",
      paddingLeft: 0,
      paddingTop: 10,
    },
  },
  vglPostTitle: {
    fontSize: 28,
    fontWeight: 800,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#000",
    marginTop: 0,
    marginBottom: 0,
  },
  vglPostInfo__excerpt: {
    margin: "10px 0",
    "& span": {
      lineHeight: 1.15,
      fontFamily: "Muli",
    },
  },
  vglPostNameCategory: {
    fontSize: 14,
    fontWeight: 300,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#424242",
    display: "block",
    marginTop: 10,
    marginBottom: 28,
    "& b": {
      color: "#000",
    },
  },
  vglPostAuthor: {
    color: "#424242",
    textTransform: "capitalize",
    marginLeft: 5,
    marginRight: 5,
  },
  vglPostCategory: {
    textTransform: "uppercase",
    marginLeft: 5,
  },
  vglPostReadMore: {
    fontSize: 16,
    fontWeight: 400,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#000000",
    textTransform: "uppercase !important",
    textDecoration: "underline #000 !important",
    "&:hover": {
      color: "#000 !important",
    },
  },
  postHeight: {
    width: "300px",
    height: "325px",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "280px",
    },
  },
}));
