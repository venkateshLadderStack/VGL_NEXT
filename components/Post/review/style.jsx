import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  fontLato: {
    fontFamily: "Lato",
    fontWeight: "normal",
  },
  fontSporting: {
    fontFamily: "SportingGrotesque",
    fontWeight: "normal",
  },
  itemCard: {
    padding: 10,
  },
  itemThumbnail: {
    marginBottom: 15,
  },
  smallImg: {
    width: "100%",
    display: "block",
    // visibility: "hidden",
    height: "auto",
  },
  title: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
    "& a": {
      color: "#000",
      "&:hover": {
        color: "#000",
      },
    },
  },
  by: {
    marginRight: 10,
  },
  author: {
    marginRight: 5,
    color: "#424242",
    lineHeight: "1rem",
    fontSize: "0.9rem",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      color: "#424242",
    },
  },
  category: {
    marginLeft: 5,
    textTransform: "uppercase",
    color: "#424242",
    fontSize: "100%",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      color: "#424242",
    },
  },
});
