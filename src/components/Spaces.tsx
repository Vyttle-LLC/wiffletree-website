import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import Illustrative from "@/components/Illustrative";
import Lede from "@/components/Lede";
import Panel from "@/components/Panel";
import SectionHeading from "@/components/SectionHeading";
import { spaceFacts, spaceSettings, spaceTabs } from "@/lib/content";

export default function Spaces() {
  return (
    <section id="spaces" style={{ padding: "0 24px 160px" }}>
      <Container style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "56px 72px" }}>
        <div style={{ flex: "1 1 440px", minWidth: 0 }}>
          <Eyebrow>SPACES</Eyebrow>
          <SectionHeading style={{ textWrap: "balance" }}>One home for each part of your work.</SectionHeading>
          <Lede>
            A Space answers “where does this go?” It holds the instructions, brain, repositories, models and issues for one company, client or
            side project. Every project, thread and job belongs to one.
          </Lede>
        </div>
        <div style={{ flex: "1 1 440px", minWidth: 0 }}>
          <Panel>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, padding: "14px 20px", borderBottom: "1px solid var(--surface)" }}>
              {spaceTabs.map((tab, i) => (
                <span
                  key={tab}
                  style={{
                    padding: "5px 11px",
                    border: "1px solid var(--edge)",
                    borderRadius: 999,
                    fontSize: 13,
                    background: i === 0 ? "var(--raised)" : "transparent",
                    color: i === 0 ? "var(--text)" : "var(--text-subtle)",
                  }}
                >
                  {tab}
                </span>
              ))}
            </div>
            {spaceSettings.map((row, i) => (
              <div
                key={row.label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "128px minmax(0, 1fr)",
                  gap: 16,
                  padding: "13px 20px",
                  borderTop: i === 0 ? undefined : "1px solid var(--surface)",
                  fontSize: 14.5,
                  lineHeight: 1.45,
                }}
              >
                <span style={{ paddingTop: 2, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)" }}>{row.label}</span>
                <span>{row.value}</span>
              </div>
            ))}
          </Panel>
          <Illustrative />
        </div>
      </Container>

      <Container
        style={{
          margin: "64px auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
          gap: 1,
          background: "var(--edge)",
          border: "1px solid var(--edge)",
          borderRadius: 18,
          overflow: "hidden",
        }}
      >
        {spaceFacts.map((fact) => (
          <div key={fact.title} style={{ padding: 26, background: "var(--canvas)" }}>
            <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600, letterSpacing: "-0.015em" }}>{fact.title}</h3>
            <p style={{ margin: "8px 0 0", fontSize: 15, lineHeight: 1.55, color: "var(--text-subtle)" }}>{fact.body}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
