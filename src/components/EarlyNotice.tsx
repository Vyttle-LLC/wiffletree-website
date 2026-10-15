import Container from "@/components/Container";
import { links } from "@/lib/content";

export default function EarlyNotice() {
  return (
    <section style={{ padding: "160px 24px 0" }}>
      <Container
        style={{
          padding: "28px 32px",
          border: "1px solid var(--edge)",
          borderRadius: 18,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px 40px",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, flex: "1 1 560px" }}>
          <span
            style={{
              flex: "none",
              marginTop: 2,
              display: "inline-flex",
              alignItems: "center",
              height: 24,
              padding: "0 10px",
              borderRadius: 999,
              border: "1px solid var(--warning)",
              color: "var(--warning)",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.06em",
            }}
          >
            EARLY
          </span>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--text-subtle)" }}>
            <strong style={{ color: "var(--text)", fontWeight: 600 }}>Early software.</strong> It changes quickly.
          </p>
        </div>
        <div style={{ display: "flex", gap: 20, fontSize: 15, fontWeight: 500 }}>
          <a href={links.currentLimits}>Current limits →</a>
          <a href={links.roadmap}>Roadmap →</a>
        </div>
      </Container>
    </section>
  );
}
