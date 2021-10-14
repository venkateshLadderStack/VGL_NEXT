import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  clipPolygon: {
    width: "100%",
    height: 100,
    clipPath: "polygon(50% 80%, 100% 5%, 100% 100%, 0 100%, 0 5%)",
    backgroundColor: "#000",
    marginBottom: -10,
    [theme.breakpoints.down("sm")]: {
      clipPath: "polygon(50% 30%, 100% 5%, 100% 100%, 0 100%, 0 5%)",
      height: 70,
    },
  },
  root: {
    flexGrow: 1,
    backgroundColor: "#000",
    padding: "50px 70px",
    position: "relative",
    // padding: 50px 0,
    backgroundRepeat: "no-repeat",
    backgroundSize: "10vw",
    backgroundPosition: "center",
    "& ul": {
      //   marginLeft: "-36px",
      marginTop: "30px",
    },
    "& li": {
      listStyle: "none",
      //   margin: "10px 0px",
      "& a": {
        fontWeight: 300,
        fontFamily: "Lato",
        letterSpacing: 0.63,
        lineHeight: 1.8,
        color: "#fff",
        fontSize: "15px",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "none",
          color: "#fff",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: "50px 45px",
    },
  },
  topright: {
    height: "350px",
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
  },
  text: {
    maxWidth: "280px",
    color: "#fff",
    fontFamily: "Lato",
    fontWeight: 400,
    lineHeight: "28px",
    margin: "16px 0px 0px",
    fontSize: 16,
  },
  logo: {
    width: "100%",
    maxWidth: "80px",
  },
  input: {
    border: "none",
    borderBottom: "1px solid #fff",
    padding: "10px 10px",
    outline: "none",
    color: "#fff",
    marginTop: "40px",
    fontSize: "16px",
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#000",
    "&::-webkit-input-placeholder": {
      /* WebKit, Blink, Edge */
      color: "#fff",
      opacity: 0.6,
    },
    "&:-moz-placeholder": {
      /* Mozilla Firefox 4 to 18 */
      color: "#fff",
      opacity: 0.6,
    },
    "&::-moz-placeholder": {
      /* Mozilla Firefox 19+ */
      color: "#fff",
      opacity: 0.6,
    },
    "&:-ms-input-placeholder": {
      /* Internet Exlorer 10-11 */
      color: "#fff",
      opacity: 0.6,
    },
  },
  btn: {
    fontFamily: "SportingGrotesque !important",
    fontWeight: "bold !important",
    backgroundColor: "#000",
    fontSize: "24px",
    color: "#fff",
    cursor: "pointer",
    padding: "10px 0px",
    border: "none",
    outline: "none",
    letterSpacing: 0,
    // wordBreak: "break-word",
  },

  heading: {
    color: "#fff",
    fontSize: "14px",
    fontWeight: "800",
    textTransform: "uppercase",
  },

  footerBottom: {
    display: "flex",
    padding: "10px",
    height: "auto",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid gray",
    borderTop: "1px solid gray",
  },
  btext: {
    fontFamily: "Lato",
    fontSize: "10px",
    fontWeight: 300,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "0.83px",
    color: "#fff",
    textTransform: "uppercase",
    marginBottom: "0px !important",
  },
  icon: {
    color: "#fff",
    cursor: "pointer",
    fontSize: "18px",
    margin: "0px 10px",
  },
}));
