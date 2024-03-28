"use client";
import mailIcon from "../BottomMenu/Images/mailLogo.png";
import "./ImageLogo.css";

export const Email = () => {
  return (
    <button className="iconbtn">
      <img src={mailIcon.src} className="imgicon" />
    </button>
  );
};
