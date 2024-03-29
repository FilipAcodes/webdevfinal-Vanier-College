import { MainBody } from "./MainBody/MainBody";
import { BottomMenu } from "./BottomMenu/BottomMenu";
import "./cssreset.css";

export default function Home() {
  return (
    <main>
      <BottomMenu />
      <MainBody />
    </main>
  );
}
