import React from "react";
import twitterIcon from "./Twitter.png";
import "./ImageLogo.css";

export const TwitterLogo = () => {
  return (
    <button className="iconbtn">
      <img src={twitterIcon.src} alt="Twitter Icon" className="imgicon" />
    </button>
  );
};
