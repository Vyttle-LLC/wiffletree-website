import Eyebrow from "@/components/Eyebrow";
import SectionHeading from "@/components/SectionHeading";
import { principles } from "@/lib/content";

// The page's one Tidal Light section.
export default function Principles() {
  return (
    <section id="principles" className="wt-light" style={{ background: "var(--light-canvas)", color: "var(--light-text)", padding: "140px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px 64px" }}>
          <div style={{ flex: "1 1 520px" }}>
            <Eyebrow color="var(--light-rust)">PRINCIPLES</Eyebrow>
            <SectionHeading>Opinions about how agent work should be organized.</SectionHeading>
          </div>
        </div>

        <div
          style={{
            marginTop: 72,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(480px, 100%), 1fr))",
            columnGap: 64,
            borderTop: "1px solid var(--light-edge)",
          }}
        >
          {principles.map((principle, i) => (
            <div key={principle.title} style={{ display: "flex", gap: 24, padding: "32px 0", borderBottom: "1px solid var(--light-edge)" }}>
              <span
                style={{
                  flex: "none",
                  width: 32,
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: "var(--light-rust)",
                  paddingTop: 4,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 style={{ margin: 0, fontSize: 21, fontWeight: 600, letterSpacing: "-0.015em" }}>{principle.title}</h3>
                <p style={{ margin: "10px 0 0", fontSize: 15, lineHeight: 1.6, color: "var(--light-subtle)" }}>{principle.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
