import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "30%",
    // marginBottom: 70,
    // marginTop: 5,
    margin: "5px auto 70px !important",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  filterTextRight: {
    textAlign: "right",
  },
  filterGrid: {
    marginLeft: 0,
    marginBottom: 20,
    listStyle: "none",
    padding: 0,

    "& div": {
      cursor: "pointer",
      display: "inline-block",
      background: "0 0",
      //   padding: "4px 10px",
      "-webkit-transition": "background-color .1s linear",
      "-o-transition": "background-color .1s linear",
      transition: "background-color .1s linear",
    },
  },
  filterGridItem: {
    marginLeft: -1,
    marginTop: 12,
    margin: "10px 2% 0 0",
    border: "none",
    padding: "10px 20px",
    // width: "100%",
    border: "2px solid transparent",
    textAlign: "center",
    borderCollapse: "collapse",
    display: "block",
    whiteSpace: "nowrap",
    "& *": {
      fontFamily: "SportingGrotesque-Bold",
      fontSize: "1rem",
      lineHeight: "1.2rem",
      textTransform: "capitalize",
      textDecoration: "none",
      color: "#000",
      fontWeight: 700,
    },
    "& span": {
      "-webkit-transition": "color .1s linear",
      "-o-transition": "color .1s linear",
      transition: "color .1s linear",
      outline: 0,
      padding: 0,
      textDecoration: "none",
    },
    "&:hover": {
      fontWeight: 700,
      backgroundColor: "#FFE5BC !important",
      padding: "10px 20px",
      display: "block",
      border: "2px solid #000",
      "-webkit-box-shadow": "2px 5px 0 #000",
      "box-shadow": "2px 5px 0 #000",
      textAlign: "center",
      position: "relative",
      zIndex: 1,
    },
  },
  filterItemActive: {
    fontWeight: 700,
    backgroundColor: "#FFE5BC !important",
    padding: "10px 20px",
    display: "block",
    border: "2px solid #000",
    "-webkit-box-shadow": "2px 5px 0 #000",
    "box-shadow": "2px 5px 0 #000",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
  },
}));
