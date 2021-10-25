import React, { useState, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Image from "next/image";

const Slideout = ({ onCancel, open }) => {
  return (
    <>
      <div
        className={`Modal ${open ? "Show" : ""}`}
        style={{
          boxShadow: "5px 5px 0 black",
        }}
      >
        <div className="Close" onClick={onCancel}>
          <CloseIcon />
        </div>
        <div>
          <div
            style={{
              width: "100%",
              height: "90px",
            }}
          >
            <Image
              src={"/assets/goodLightLogo.png"}
              alt=""
              layout="fixed"
              width={265}
              height={88}
              objectFit="contain"
            />
          </div>
          <div>
            <p
              style={{
                fontWeight: "600",
                textAlign: "center",
                whiteSpace: "nowrap",
                fontSize: "25px",
                fontFamily: "adobe-garamond-pro, serif",
              }}
            >
              beauty beyond the binary
            </p>
          </div>
          <div
            className="popup-action"
            style={{ width: "100%", padding: "0px" }}
          >
            <a
              className="white"
              target="_blank"
              href="https://goodlight.world/"
              style={{ maxWidth: "unset", padding: "0px" }}
              rel="noreferrer"
            >
              <p
                style={{
                  boxShadow: "5px 5px 0 black",
                }}
              >
                <span className="bg"></span>
                <span className="base"></span>
                <span className="text">SHOP</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slideout;
