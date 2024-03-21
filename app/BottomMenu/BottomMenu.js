"use client";
import "./BottomMenu.css";
import { TwitterLogo } from "./TwitterLogo";
import { Contactme } from "./Contactme";
import { Email } from "./Email";
import { FaceBook } from "./FaceBook";

export const BottomMenu = () => {
  return (
    <div className="bottomMenu">
      <TwitterLogo />
      <Contactme />
      <FaceBook />
      <Email />
    </div>
  );
};
