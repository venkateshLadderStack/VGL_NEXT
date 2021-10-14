import React from "react";

const TopBar = () => {
  return (
    <div>
      <nav className={`navbar-expand-lg fixed-top`}>
        <div
          className="d-lg-none"
          style={{
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "black",
            color: "white",
            fontFamily: "Lato",
            fontWeight: "bolder",
          }}
        >
          <a
            href="https://goodlight.world/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <h4 style={{ padding: "0px", margin: "0px" }}>SHOP GOOD LIGHT</h4>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
