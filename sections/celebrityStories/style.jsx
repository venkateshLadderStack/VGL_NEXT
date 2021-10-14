import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      "linear-gradient(rgb(255, 230, 183) 0%,rgb(251, 198, 187) 10%, rgb(178, 158, 181) 100%)",
    // "linear-gradient(rgb(255, 255, 255) 0%, rgb(251, 198, 187) 100%)",
    inset: 0,
    transition: "all 1s ease-in-out 0s",
    paddingTop: 150,
    paddingBottom: 150,
  },
  vglCelebHeading: {
    fontFamily: "SportingGrotesque",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: 42,
    textAlign: "center",
    color: "rgb(0,0,0)",
    fontStretch: "normal",
    letterSpacing: "normal",
    lineHeight: 1.37,
    position: "relative",
    marginBottom: 50,
    zIndex: 4,
    top: 0,
    "&::before": {
      left: 0,
    },
    "&::before , &::after": {
      content: '""',
      borderBottom: "4px solid",
      // width: "100%",
      height: 1,
      display: "block",
      position: "absolute",
      top: "45%",
      transform: "translateY(-50%)",
      width: "33%",
    },
    "&::after": {
      right: 0,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 32,
      "&::before , &::after": {
        width: "20%",
      },
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 28,
      "&::before , &::after": {
        width: "10%",
      },
    },
  },
}));
