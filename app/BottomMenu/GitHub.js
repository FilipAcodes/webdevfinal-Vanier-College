"use client";
import gitHubLogo from "../BottomMenu/Images/GitHubLogo.jpg";
import "./ImageLogo.css";

export const GitHub = () => {
  return (
    <a
      href="https://www.github.com/"
      className="iconbtn"
      target="blank"
      rel="noopener noreferrer"
    >
      <img src={gitHubLogo.src} className="imgicon" alt="githublogo" />
    </a>
  );
};
