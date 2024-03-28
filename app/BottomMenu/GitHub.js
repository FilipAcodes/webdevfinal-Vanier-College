"use client";
import gitHubLogo from "./GitHubLogo.jpg";
import "./ImageLogo.css";

export const GitHub = () => {
  return (
    <button className="iconbtn">
      <img src={gitHubLogo.src} className="imgicon" />
    </button>
  );
};
