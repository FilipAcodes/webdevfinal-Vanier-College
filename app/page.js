import { BottomMenu } from "./BottomMenu/BottomMenu";
import { MainBody } from "./MainBody/MainBody";
import "./cssreset.css";

export default function Home() {
  return (
    <main className="landingpage">
      <MainBody />
      <BottomMenu />
    </main>
  );
}
