import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import useWindowSize from "../../hooks/useWindowSize";

const BottomLeftPopUp = ({ onCancel }) => {
  const size = useWindowSize();

  return (
    <>
      <div className="left_popup_button" style={{ zIndex: 898 }}>
        <div className="sign_up_button">
          <a
            href="https://goodlight.world/"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bolder",
              fontFamily: "SportingGrotesque-Bold",
              whiteSpace: "no-wrap",
            }}
            rel="noreferrer"
          >
            SIGN UP
          </a>
          <CloseIcon
            style={{ marginTop: "-7px", marginLeft: "10px", zIndex: 98 }}
            onClick={onCancel}
          />
        </div>
      </div>
    </>
  );
};

export default BottomLeftPopUp;
