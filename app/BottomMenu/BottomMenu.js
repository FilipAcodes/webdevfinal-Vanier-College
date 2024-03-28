"use client";
import "./BottomMenu.css";
import { TwitterLogo } from "./TwitterLogo";
import { Email } from "./Email";
import { FaceBook } from "./FaceBook";
import { GitHub } from "./GitHub";
import { LinkedIn } from "./LinkedIn";

export const BottomMenu = () => {
  return (
    <div className="bottomMenu">
      <TwitterLogo />
      <FaceBook />
      <GitHub />
      <LinkedIn />
      <Email />
    </div>
  );
};
