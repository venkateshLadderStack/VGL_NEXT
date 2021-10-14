import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "255px",
    height: "420px",
    boxSizing: "border-box",
    margin: "0 auto",
  },
  imgBox: {
    width: "100%",
    height: "240px",
    maxWidth: "240px",
    position: "relative",
    border: "2px solid black",
    transition: theme.transitions.create(["border"], {
      duration: "0.1s",
      easing: theme.transitions.easing.easeInOut,
      delay: "0.4s",
    }),
    "&:hover": {
      border: "0px solid black",
    },
  },
  img: {
    width: "100%",
    height: "237px",
    maxWidth: "237px",
    objectFit: "cover",
    transform: "translate(-20px, 20px)",
    transition: theme.transitions.create(["transform", "border"], {
      duration: "0.3s",
      easing: theme.transitions.easing.easeInOut,
    }),
    "&:hover": {
      transform: "translate(0px, 0px)",
      border: "10px solid #fcba03",
    },
    // transition-property: transform, border, max-width, height;
    // transition-duration: 0.3s, 0.1s, 0.1s, 0.1s;
    // transition-timing-function: ease-in-out;
    // transition-delay: 0s, 0.3s, 0.3s, 0.3s;
  },
  bottomItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  line: {
    width: 80,
    marginTop: -5,
    borderBottom: "2px solid black",
  },
}));
