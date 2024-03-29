"use client";
import "./projectpage.css";
import { BottomMenu } from "../BottomMenu/BottomMenu";
import Carousel from "react-bootstrap/Carousel";
import bpmshowcase from "./projectimages/BPM.gif";
import alieninvader from "./projectimages/alieninvader.jpg";
import twitterclone from "./projectimages/critter.png";

import "./projectpage.css";
export default function Projects() {
  const sendUserToCritter = () => {
    window.open(
      "https://github.com/FilipAcodes/Critter-Twitter-Clone",
      "_blank"
    );
  };
  const sendUserToBPM = () => {
    window.open("https://github.com/FilipAcodes/Final-Bpm", "_blank");
  };
  const sendUserToAlienInvader = () => {
    window.open(
      "https://github.com/FilipAcodes/Alien-Invader-JavaScript-OOP",
      "_blank"
    );
  };
  return (
    <>
      <BottomMenu />
      <div className="carouselcontainer">
        <Carousel>
          <Carousel.Item onClick={sendUserToBPM}>
            <img
              src={bpmshowcase.src}
              text="BPM"
              alt="bpmshowcase"
              className="carouselimg"
            />
            <Carousel.Caption>
              <h3>Musical Search Engine</h3>
              <p>
                BPM was created using different front-end and back-end
                technologies.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item onClick={sendUserToAlienInvader}>
            <img
              text="Alien Invader"
              src={alieninvader.src}
              alt="alieninvader"
              className="carouselimg"
            />
            <Carousel.Caption>
              <h3>Alien Invader</h3>
              <p>Alien Invader was created using JavaScript OOP.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item onClick={sendUserToCritter}>
            <img
              text="Twitter Clone"
              src={twitterclone.src}
              alt="twitter clone"
              className="carouselimg"
            />
            <Carousel.Caption>
              <h3>"Critter" - Twitter Clone</h3>
              <p>"Critter" was used to practice React & API integrations.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
