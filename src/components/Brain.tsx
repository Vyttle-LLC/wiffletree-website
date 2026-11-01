import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import Illustrative from "@/components/Illustrative";
import Lede from "@/components/Lede";
import Panel from "@/components/Panel";
import SectionHeading from "@/components/SectionHeading";
import { brainConflict, brainNote, brainSteps } from "@/lib/content";

const mono = "var(--font-mono)";

export default function Brain() {
  return (
    <section id="brain" style={{ padding: "0 24px 160px" }}>
      <Container>
        <Eyebrow>SECOND BRAIN</Eyebrow>
        <SectionHeading style={{ maxWidth: 820, textWrap: "balance" }}>Your agents remember what they learned.</SectionHeading>
        <Lede>
          Each Space names a brain: plain Markdown in a Git repository your team owns. Agents log what they decide. A model you choose compiles it
          into a wiki that every later session, on either provider, can read.
        </Lede>

        <div
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(230px, 100%), 1fr))",
            gap: 14,
          }}
        >
          {brainSteps.map((step) => (
            <div key={step.step} style={{ padding: 22, border: "1px solid var(--edge)", borderRadius: 16, background: "var(--surface)" }}>
              <p style={{ margin: 0, fontFamily: mono, fontSize: 12, color: "var(--accent)" }}>{step.step}</p>
              <h3 style={{ margin: "10px 0 0", fontSize: 18, fontWeight: 600, letterSpacing: "-0.015em" }}>{step.title}</h3>
              <p style={{ margin: "8px 0 0", fontSize: 14.5, lineHeight: 1.55, color: "var(--text-subtle)" }}>{step.body}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(440px, 100%), 1fr))",
            gap: 28,
          }}
        >
          <Panel label="NOTE · WIKI" status={<span>UPDATED TODAY</span>}>
            <Note kind={brainNote.kind} kindColor="var(--text-subtle)" title={brainNote.title}>
              <p style={noteBody}>
                {brainNote.claims.map((claim, i) => (
                  <span key={claim.source}>
                    {claim.text}
                    <sup style={{ fontFamily: mono, fontSize: 11, color: "var(--accent)" }}>[{i + 1}]</sup>{" "}
                  </span>
                ))}
              </p>
              <div
                style={{
                  marginTop: 14,
                  paddingTop: 12,
                  borderTop: "1px solid var(--surface)",
                  fontFamily: mono,
                  fontSize: 12,
                  lineHeight: 1.7,
                  color: "var(--muted)",
                }}
              >
                {brainNote.claims.map((claim, i) => (
                  <div key={claim.source}>
                    [{i + 1}] {claim.source} <Badge color="var(--success)">verified</Badge>
                  </div>
                ))}
              </div>
            </Note>
          </Panel>

          <Panel label="CONFLICT · INBOX" status={<span>NEEDS YOUR RULING</span>}>
            <Note kind={brainConflict.kind} kindColor="var(--warning)" title={brainConflict.title}>
              <p style={noteBody}>{brainConflict.body}</p>
              <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 8 }}>
                {brainConflict.rulings.map((ruling, i) => (
                  <span
                    key={ruling}
                    style={{
                      padding: "6px 11px",
                      border: `1px solid ${i === 0 ? "var(--sea-glass)" : "var(--edge)"}`,
                      borderRadius: 9,
                      fontSize: 13,
                      fontWeight: 500,
                      color: i === 0 ? "var(--sea-glass)" : "var(--text)",
                    }}
                  >
                    {ruling}
                  </span>
                ))}
              </div>
            </Note>
          </Panel>
        </div>
        <Illustrative />
      </Container>
    </section>
  );
}

const noteBody: React.CSSProperties = { margin: "10px 0 0", fontSize: 15, lineHeight: 1.6, color: "var(--text-subtle)" };

function Note({ kind, kindColor, title, children }: { kind: string; kindColor: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: 24 }}>
      <Badge color={kindColor}>{kind}</Badge>
      <h3 style={{ margin: "10px 0 0", fontSize: 20, fontWeight: 600, letterSpacing: "-0.015em" }}>{title}</h3>
      {children}
    </div>
  );
}

function Badge({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span style={{ display: "inline-flex", padding: "2px 8px", borderRadius: 6, fontFamily: mono, fontSize: 11, background: "var(--raised)", color }}>
      {children}
    </span>
  );
}
