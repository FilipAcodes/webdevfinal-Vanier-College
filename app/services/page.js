import { BottomMenu } from "../BottomMenu/BottomMenu";
import underConstruction from "../underconstruction.jpg";

export default function ServicesPage() {
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
