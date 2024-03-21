import { TopMenu } from "./TopMenu/TopMenu";
import { BottomMenu } from "./BottomMenu/BottomMenu";
import "./cssreset.css";

export default function Home() {
  return (
    <main>
      <TopMenu />
      <h1>Welcome to Filip's Portofolio!</h1>
      <h2>Get started</h2>
      <BottomMenu />
    </main>
  );
}
