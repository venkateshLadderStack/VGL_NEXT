import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 60.5,
    paddingRight: 60.5,
    backgroundImage:
      "linear-gradient(rgb(178, 158, 181) 0%, rgb(152, 157, 205) 100%)",
    // position: "absolute",
    inset: 0,
    transition: "all 1s ease-in-out 0s",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  rootSecondary: {
    paddingTop: "100px !important",
    paddingBottom: "50px !important",
    backgroundColor: "#f8b195 !important",
  },
  rootInner: {
    paddingBottom: 50,
  },
  vglInnerColumn: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  vglContentElement: {
    marginBottom: 35,
  },
  vglContentHeading: {
    fontFamily: "SportingGrotesque",
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
  },
  vglContentSecondaryHeading: {
    fontFamily: "SportingGrotesque",
    fontWeight: "normal",
    fontSize: 60,
    textAlign: "center",
    letterSpacing: "-0.1em",
    lineHeight: 1.15,
  },
  vglContentDesc: {
    lineHeight: "1.75em",
    textAlign: "center",
    fontSize: 24,
    margin: 0,
  },
  formContainer: {
    maxWidth: 700,
    margin: "0 auto",
    boxShadow: "5px 5px 0px #000",
    marginBottom: "50px !important",
  },
  vglFormOuter: {
    marginBottom: 0,
  },
}));
