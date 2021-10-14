import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      "linear-gradient(rgb(152, 157, 205) 0%, rgb(255, 255, 255) 100%)",
    inset: 0,
    transition: "all 1s ease-in-out 0s",
    position: "relative",
  },
  vglSliderArrow: {
    paddingLeft: 60,
    paddingRight: 60,
  },
}));
