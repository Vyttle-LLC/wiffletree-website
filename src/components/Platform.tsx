import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import { nativeFacts } from "@/lib/content";

const mono = "var(--font-mono)";

export default function Platform() {
  return (
    <section style={{ padding: "160px 24px 0" }}>
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(460px, 100%), 1fr))",
          gap: 28,
        }}
      >
        <Card eyebrow="BRING YOUR OWN CLI" title="Runs the agents you already use." body="Claude Code, Codex, or both, on the plans you already have.">
          <Terminal />
        </Card>
        <Card eyebrow="NATIVE" title="It should feel instant." body="Native Rust on GPUI. Not a web view.">
          <div
            style={{
              marginTop: "auto",
              paddingTop: 32,
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 1,
              background: "var(--edge)",
              border: "1px solid var(--edge)",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            {nativeFacts.map((fact) => (
              <div key={fact.label} style={{ background: "var(--surface-blue)", padding: 18 }}>
                <p style={{ margin: 0, fontFamily: mono, fontSize: 11, color: "var(--muted)" }}>{fact.label}</p>
                <p style={{ margin: "6px 0 0", fontSize: 17, fontWeight: 600 }}>{fact.value}</p>
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
}

function Card({ eyebrow, title, body, children }: { eyebrow: string; title: string; body: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: "clamp(28px, 4vw, 48px)",
        border: "1px solid var(--edge)",
        borderRadius: 24,
        background: "var(--surface)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h3 style={{ margin: "18px 0 0", fontSize: "clamp(26px, 2.6vw, 34px)", lineHeight: 1.1, fontWeight: 600, letterSpacing: "-0.03em" }}>
        {title}
      </h3>
      <p style={{ margin: "14px 0 0", fontSize: 16, lineHeight: 1.6, color: "var(--text-subtle)" }}>{body}</p>
      {children}
    </div>
  );
}

function Terminal() {
  const windowDot = <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--edge)" }} />;
  const comment = { color: "var(--muted)" };
  const prompt = { color: "var(--accent)" };
  return (
    <div style={{ marginTop: 32, border: "1px solid var(--edge)", borderRadius: 14, background: "var(--well)", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "12px 14px", borderBottom: "1px solid var(--raised)" }}>
        {windowDot}
        {windowDot}
        {windowDot}
        <span style={{ marginLeft: 10, fontFamily: mono, fontSize: 11, color: "var(--muted)" }}>zsh</span>
      </div>
      <pre className="wt-scroll" style={{ margin: 0, padding: "18px 18px 22px", fontFamily: mono, fontSize: 13, lineHeight: 1.9, color: "var(--text)" }}>
        <span style={comment}># sign in once</span>
        {"\n"}
        <span style={prompt}>$</span> claude auth login
        {"\n"}
        <span style={prompt}>$</span> codex login
        {"\n"}
        <span style={comment}># then press ⌘N, add a repository,</span>
        {"\n"}
        <span style={comment}># and tell the coordinator what to build</span>
      </pre>
    </div>
  );
}
