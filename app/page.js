import { TopMenu } from "./TopMenu";
import { BottomMenu } from "./BottomMenu";
import "./cssreset.css";
export default function Home() {
  return (
    <main>
      <TopMenu />
      <h1>Welcome to Filip's Portofolio!</h1>
      <h2>Projects</h2>
      <h2>Languages</h2>
      <h2>About me</h2>
      <BottomMenu />
    </main>
  );
}
