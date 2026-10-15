import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import ScreenGallery from "@/components/ScreenGallery";
import SectionHeading from "@/components/SectionHeading";

export default function Screens() {
  return (
    <section style={{ padding: "160px 24px 0" }}>
      <Container>
        <Eyebrow>INSIDE THE APP</Eyebrow>
        <SectionHeading style={{ maxWidth: 760 }}>Know where every agent is, and what it costs.</SectionHeading>
        <ScreenGallery />
      </Container>
    </section>
  );
}
