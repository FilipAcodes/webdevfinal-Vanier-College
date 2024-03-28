"use client";
import mailIcon from "../BottomMenu/Images/mailLogo.png";
import "./ImageLogo.css";

export const Email = () => {
  return (
    <a className="iconbtn" href="mailto:placeholderemail@gmail.com">
      <img src={mailIcon.src} className="imgicon" alt="emailIcon" />
    </a>
  );
};
