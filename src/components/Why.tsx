import Eyebrow from "@/components/Eyebrow";
import SectionHeading from "@/components/SectionHeading";

export default function Why() {
  return (
    <section style={{ padding: "160px 24px 140px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Eyebrow>WHY WE BUILT THIS</Eyebrow>
        <SectionHeading style={{ maxWidth: 1040, lineHeight: 1.08, textWrap: "balance" }}>
          Coding agents got good enough that the bottleneck moved.{" "}
          <span style={{ color: "var(--muted)" }}>Now it’s keeping five of them pointed at one goal.</span>
        </SectionHeading>
      </div>
    </section>
  );
}
