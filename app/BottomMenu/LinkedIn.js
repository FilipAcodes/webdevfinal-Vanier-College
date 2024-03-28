import linkedLogo from "../BottomMenu/Images/linkedinlogo.png";
import "./ImageLogo.css";

export const LinkedIn = () => {
  return (
    <a
      href="https://www.linkedin.com/"
      className="iconbtn"
      target="blank"
      rel="noopener noreferrer"
    >
      <img src={linkedLogo.src} className="imgicon" />
    </a>
  );
};
