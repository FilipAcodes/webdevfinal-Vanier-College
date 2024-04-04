import { BottomMenu } from "../BottomMenu/BottomMenu";
import underConstruction from "../underconstruction.jpg";
import "../blog/underconstruction.css";
export default function BlogPage() {
  return (
    <>
      <BottomMenu />
      <img
        src={underConstruction.src}
        alt="under construction"
        className="underconstruction"
      />
    </>
  );
}
