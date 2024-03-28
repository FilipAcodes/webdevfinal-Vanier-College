import React from "react";
import twitterIcon from "../BottomMenu/Images/Twitter.png";
import "./ImageLogo.css";

export const TwitterLogo = () => {
  return (
    <a
      href="https://www.twitter.com/"
      className="iconbtn"
      target="blank"
      rel="noopener noreferrer"
    >
      <img src={twitterIcon.src} alt="Twitter Icon" className="imgicon" />
    </a>
  );
};
