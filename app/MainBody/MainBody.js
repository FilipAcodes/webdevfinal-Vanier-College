import React from "react";
import "./mainbody.css";
import randomman from "./randommansmiling.png";
import Link from "next/link";

export const MainBody = () => {
  return (
    <div className="pictureandtextcontainer">
      <div className="text-container">
        <div className="intro">
          <h1 className="headerintro">
            Hi, I'm John Doe,
            <br /> Full-Stack Web Developer.
          </h1>
          <br />
          <p className="aboutme">A little about me</p>
          <br />
          <p className="description">
            I am a full-stack web developer proficient in frontend frameworks
            like React.js and backend technologies like Node.js.
            <br /> Expertise with API integration.
            <br /> My strong communication, problem-solving and teamwork skills
            complement my technical proficiency.
          </p>
        </div>
        <Link href="/projects" className="learnmoreaboutme">
          My Projects
        </Link>
      </div>
      <div></div>
      <div className="img-container">
        <img src={randomman.src} className="profileimg" alt="randomMan" />
      </div>
    </div>
  );
};
