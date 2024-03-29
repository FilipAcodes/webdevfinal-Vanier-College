"use client";
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
  return (
    <div className="bottomMenu">
      <div className="routers">
        <Link href="/" className={`link${pathname === "/" ? "active" : ""}`}>
          Home
        </Link>{" "}
        <Link
          href="/projects"
          className={`link${pathname === "/projects" ? "active" : ""}`}
        >
          Projects
        </Link>
        <Link
          href="/services"
          className={`link${pathname === "/services" ? "active" : ""}`}
        >
          Services
        </Link>
        <Link
          href="/blog"
          className={`link${pathname === "/blog" ? "active" : ""}`}
        >
          Blog
        </Link>
      </div>
      <div className="contactflex">
        <TwitterLogo />
        <FaceBook />
        <GitHub />
        <LinkedIn />
        <Email />
      </div>
    </div>
  );
};
