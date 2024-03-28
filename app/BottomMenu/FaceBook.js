"use client";
import facebookIcon from "../BottomMenu/Images/facebookicon.png";
import "./ImageLogo.css";

export const FaceBook = () => {
  return (
    <a
      href="https://www.facebook.com/"
      className="iconbtn"
      target="blank"
      rel="noopener noreferrer"
    >
      <img src={facebookIcon.src} className="imgicon" alt="facebook logo" />
    </a>
  );
};
