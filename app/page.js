import { TopMenu } from "./TopMenu/TopMenu";
import { BottomMenu } from "./BottomMenu/BottomMenu";
import { MainBody } from "./MainBody/MainBody";
import "./cssreset.css";
import "./mainpage.css";

export default function Home() {
  return (
    <main className="landingpage">
      <TopMenu />
      <MainBody />
      <BottomMenu />
    </main>
  );
}
