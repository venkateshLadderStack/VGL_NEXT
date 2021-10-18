import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  navbarSafri: {
    transform: "translate3d(0,0,0)",
    position: "-webkit-sticky",
    transition: "all ease-in-out .5s",
    // zIndex: "99999 !important",
  },
  navbarActive: {
    backgroundColor: "#FFFFFF !important",
    borderBottom: "1px solid #F4F4F4 !important",
    // transition: "all 0.5s ease",
    // WebkitTransition: "all 0.5s ease",
    // MozTransition: "all 0.5s ease",
    // msTransition: "all 0.5s ease",
    // OTransition: "all 0.5s ease",
  },
  headerLogo: {
    maxHeight: 63,
    // marginLeft: auto,
    display: "block",
    // marginRight: auto;
    transition: "all 0.5s ease",
    WebkitTransition: "all 0.5s ease",
    MozTransition: "all 0.5s ease",
    msTransition: "all 0.5s ease",
    OTransition: "all 0.5s ease",
  },
  navLogoActive: {
    maxHeight: 43,
    // marginLeft: auto,
    display: "block",
    // marginRight: auto;
    transition: "all 0.5s ease",
    WebkitTransition: "all 0.5s ease",
    MozTransition: "all 0.5s ease",
    msTransition: "all 0.5s ease",
    OTransition: "all 0.5s ease",
  },
  input: {
    border: "none !important",
    backgroundColor: "transparent !important",
    outline: "none !important",
    outlineColor: "#fff !important",
    borderTopRightRadius: 11,
    borderBottomRightRadius: 11,
    maxWidth: 260,
    width: "100%",
    height: 41,
    padding: "10px 20px",
    "&:focus": {
      outline: "none !important",
      outlineWidth: 0,
      background: "transparent !important",
    },
    "&:active": {
      outline: "none !important",
      outlineWidth: 0,
      background: "transparent !important",
    },
  },
  searchIcon: {
    backgroundColor: "transparent !important",
    border: "none !important",
    borderRadius: "11px !important",
  },
  navSearchContainer: {
    background: "transparent !important",
    border: "solid 1px rgba(0, 0, 0, 0.14) !important",
    borderRadius: "11px !important",
    minWidth: 260,
  },
  primaryMenuLink: {
    position: "relative",
    zIndex: 10,
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "Lato, sans-serif",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: 0.7,
    textAlign: "center",
    textTransform: "uppercase",
    // textDecoration: "none",
    color: "black",
    "&:hover": {
      color: "black",
      backgroundImage: "linear-gradient(120deg, #fbc6bb 0%, #fbc6bb 100%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "80% 0.4em",
      backgroundPosition: "center 75%",
      //   transition: "0.5s ease-in",
      //   transform: "translateY(0)",
    },
  },

  activeUnderline: {
    backgroundImage: "linear-gradient(120deg, #fbc6bb 0%, #fbc6bb 100%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "80% 0.4em",
    backgroundPosition: "center 75%",
  },

  secondaryMenuLink: {
    position: "relative",
    zIndex: 10,
    fontSize: 16,
    fontWeight: 300,
    fontFamily: "Lato, sans-serif",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: 0.7,
    textAlign: "start",
    textTransform: "capitalize",
    // textDecoration: "none",
    color: "#000",
    "&:hover": {
      color: "#000",
      // backgroundImage: "linear-gradient(120deg, #fbc6bb 0%, #fbc6bb 100%)",
      // backgroundRepeat: "no-repeat",
      // backgroundSize: "80% 0.4em",
      // backgroundPosition: "center 75%",
      //   transition: "0.5s ease-in",
      //   transform: "translateY(0)",
    },
  },
  //   underlineMagical: {
  //     backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
  //     backgroundRepeat: "no-repeat",
  //     backgroundSize: "100% 0.2em",
  //     backgroundPosition: "0 88%",
  //     transition: "background-size 0.25s ease-in",
  //     &:hover {
  //       background-size: 100% 88%;
  //     }
  //   },
  mobileAction: {
    zIndex: 1,
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
});