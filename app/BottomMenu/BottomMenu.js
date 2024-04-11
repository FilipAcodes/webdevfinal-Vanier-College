"use client";
import React, { useState, useEffect } from "react";
import "./BottomMenu.css";
import { TwitterLogo } from "./TwitterLogo";
import { Email } from "./Email";
import { FaceBook } from "./FaceBook";
import { GitHub } from "./GitHub";
import { LinkedIn } from "./LinkedIn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const BottomMenu = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showMenu &&
        !document.getElementById("bottomMenu").contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div className="bottomMenu" id="bottomMenu">
      <div className="routers">
        <Link href="/" className={`link${pathname === "/" ? " active" : ""}`}>
          Home
        </Link>{" "}
        <Link
          href="/projects"
          className={`link${pathname === "/projects" ? " active" : ""}`}
        >
          Projects
        </Link>
        <Link
          href="/services"
          className={`link${pathname === "/services" ? " active" : ""}`}
        >
          Services
        </Link>
        <Link
          href="/blog"
          className={`link${pathname === "/blog" ? " active" : ""}`}
        >
          Blog
        </Link>
      </div>
      <div className={`contactflex${showMenu ? "" : " active"}`}>
        {showMenu ? (
          <>
            <button onClick={toggleMenu} className="closebtn">
              X
            </button>
            <TwitterLogo />
            <FaceBook />
            <GitHub />
            <LinkedIn />
            <Email />
          </>
        ) : (
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
        )}
      </div>
    </div>
  );
};
