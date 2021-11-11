import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  vglPost: {
    width: "100%",
    display: "inline-block",
    paddingLeft: 10,
    paddingRight: 10,
  },
  vglFeaturedImage: {
    width: "100%",
    "& div": {
      minHeight: 360,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50%",
    },
  },
  vglPostInfo: {
    marginTop: 15,
    "& div": {
      textDecoration: "none",
      color: "#000",
      "&:hover": {
        textDecoration: "none",
        color: "#000",
      },
      "& p": {
        fontWeight: 800,
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#000",
        fontSize: "29px !important",
      },
    },
  },
  vglPostDesc: {
    fontWeight: 800,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#000",
    fontSize: "29px !important",
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
}));
