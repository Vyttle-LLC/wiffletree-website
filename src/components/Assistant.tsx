import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import Illustrative from "@/components/Illustrative";
import Lede from "@/components/Lede";
import SectionHeading from "@/components/SectionHeading";
import { assistantThread, boardOutputs, jobRecipe, type Row } from "@/lib/content";

const mono = "var(--font-mono)";

export default function Assistant() {
  return (
    <section id="assistant" style={{ padding: "0 24px 160px" }}>
      <Container>
        <Eyebrow>ASSISTANT, JOBS AND BOARDS</Eyebrow>
        <SectionHeading style={{ maxWidth: 820, textWrap: "balance" }}>Quick questions don’t need a project.</SectionHeading>
        <Lede>
          Ask in plain words on your own subscriptions. Threads are read-only, with the provider enforcing it. When a question turns into real work,
          make it a project.
        </Lede>

        <div
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(330px, 100%), 1fr))",
            gap: 20,
          }}
        >
          <Tile
            eyebrow="ASSISTANT"
            title="It files itself."
            body="A small model routes each message to the right thread and Space. When it’s unsure, it asks."
          >
            <div style={{ padding: "9px 11px", borderRadius: 10, background: "var(--raised)" }}>{assistantThread.question}</div>
            <div style={{ margin: "10px 0", fontFamily: mono, fontSize: 11.5, color: "var(--muted)" }}>{assistantThread.route}</div>
            {assistantThread.answer} <span style={{ color: "var(--sea-glass)" }}>{assistantThread.action}</span>
          </Tile>
          <Tile
            eyebrow="JOBS"
            title="Recurring work you approve."
            body="Ask for a brief every weekday. Nothing is scheduled until you read the recipe and save it."
          >
            <Lines rows={jobRecipe} />
            <div
              style={{ marginTop: 12, padding: 8, borderRadius: 9, background: "var(--accent)", color: "var(--canvas)", fontWeight: 600, textAlign: "center" }}
            >
              Save job
            </div>
          </Tile>
          <Tile
            eyebrow="BOARDS"
            title="A place for what they make."
            body="Every thread and job output, with its history, kept on your Mac or shared with its Space."
          >
            <Lines rows={boardOutputs} />
          </Tile>
        </div>
        <Illustrative />
      </Container>
    </section>
  );
}

function Tile({ eyebrow, title, body, children }: { eyebrow: string; title: string; body: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 26, border: "1px solid var(--edge)", borderRadius: 22, background: "var(--surface)" }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h3 style={{ margin: "12px 0 0", fontSize: 24, fontWeight: 600, letterSpacing: "-0.025em" }}>{title}</h3>
      <p style={{ margin: "10px 0 22px", fontSize: 15, lineHeight: 1.55, color: "var(--text-subtle)" }}>{body}</p>
      <div
        style={{
          marginTop: "auto",
          padding: 14,
          border: "1px solid var(--edge)",
          borderRadius: 14,
          background: "var(--well)",
          fontSize: 13.5,
          lineHeight: 1.5,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Lines({ rows }: { rows: Row[] }) {
  return rows.map((row, i) => (
    <div
      key={row.label}
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
        padding: "9px 0",
        borderTop: i === 0 ? undefined : "1px solid var(--surface)",
      }}
    >
      <span>{row.label}</span>
      <span style={{ fontFamily: mono, fontSize: 11.5, color: "var(--muted)", textAlign: "right" }}>{row.value}</span>
    </div>
  ));
}
