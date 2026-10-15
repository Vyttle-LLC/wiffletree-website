import Eyebrow from "@/components/Eyebrow";
import ScreenGallery from "@/components/ScreenGallery";
import SectionHeading from "@/components/SectionHeading";

export default function Screens() {
  return (
    <section style={{ padding: "160px 24px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Eyebrow>INSIDE THE APP</Eyebrow>
        <SectionHeading style={{ maxWidth: 760 }}>Know where every agent is, and what it costs.</SectionHeading>
        <ScreenGallery />
      </div>
    </section>
  );
}
