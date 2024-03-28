"use client";
import gitHubLogo from "../BottomMenu/Images/GitHubLogo.jpg";
import "./ImageLogo.css";

export const GitHub = () => {
  return (
    <button className="iconbtn">
      <img src={gitHubLogo.src} className="imgicon" />
    </button>
  );
};
