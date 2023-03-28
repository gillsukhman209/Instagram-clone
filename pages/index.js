import LeftBar from "../components/LeftBar";
import MiddleSection from "../components/MiddleSection";
import RightBar from "../components/RightBar";

export default function Home() {
  return (
    <div className="w-full h-screen flex">
      <LeftBar />
      <MiddleSection />
      <RightBar />
    </div>
  );
}
