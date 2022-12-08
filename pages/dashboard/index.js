import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../../components/Navigation"));
import SEO from "../../components/SEO";

export default function Home() {
  return (
    <div style={{
      height: "5000px"
    }}>
      <SEO />
      <Navigation />
    </div>
  );
}
