import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import SectionHeading from "@/components/SectionHeading";
import { eventLog, type LogEntry, type LogTone } from "@/lib/content";

const TONE_COLOR: Record<LogTone, string> = {
  text: "var(--text)",
  subtle: "var(--text-subtle)",
  info: "var(--info)",
  success: "var(--success)",
  accent: "var(--accent)",
};

const mono = "var(--font-mono)";

export default function EventLog() {
  return (
    <section id="how" style={{ padding: "0 24px 160px" }}>
      <Container style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "56px 80px" }}>
        <div style={{ flex: "1 1 400px", minWidth: 0 }}>
          <Eyebrow>UNDER THE HOOD</Eyebrow>
          <SectionHeading style={{ textWrap: "balance" }}>Nothing gets lost between agents.</SectionHeading>
          <p style={{ margin: "20px 0 0", maxWidth: 420, fontSize: 17, lineHeight: 1.55, color: "var(--text-subtle)" }}>
            Every message is saved before it’s acknowledged. Restart the app and each agent resumes its exact session.
          </p>
        </div>
        <div
          role="img"
          aria-label="A scrolling event log: a goal is planned, implemented, the app restarts, the tester resumes its session, tests pass, and the merge waits for you."
          style={{
            flex: "1 1 520px",
            minWidth: 0,
            border: "1px solid var(--edge)",
            borderRadius: 22,
            background: "var(--well)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 20px",
              borderBottom: "1px solid var(--surface)",
            }}
          >
            <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.08em", color: "var(--muted)" }}>EVENTS · TIDE ALERTS</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: mono, fontSize: 11, color: "var(--success)" }}>
              <span className="wt-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor" }} />
              live
            </span>
          </div>
          <div className="wt-logmask" aria-hidden="true" style={{ height: 420, overflow: "hidden", padding: "0 20px" }}>
            {/* Two copies: .wt-log slides up by exactly one copy, then repeats. */}
            <div className="wt-log">
              {[...eventLog, ...eventLog].map((entry, i) => (
                <LogRow key={i} entry={entry} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function LogRow({ entry }: { entry: LogEntry }) {
  if (entry.kind === "divider") {
    const rule = <span style={{ flex: 1, height: 1, background: "var(--warning-edge)" }} />;
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "14px 0",
          fontFamily: mono,
          fontSize: 11,
          letterSpacing: "0.08em",
          color: "var(--warning)",
        }}
      >
        {rule}
        {entry.label}
        {rule}
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "64px minmax(0, 1fr)",
        gap: 16,
        padding: "11px 0",
        borderBottom: "1px solid var(--surface)",
        fontFamily: mono,
        fontSize: 12.5,
        lineHeight: 1.5,
      }}
    >
      <span style={{ color: "var(--muted)" }}>{entry.time}</span>
      <span style={{ minWidth: 0 }}>
        <span style={{ display: "inline-flex", flexWrap: "wrap", gap: 6 }}>
          <span style={{ color: "var(--text)" }}>{entry.from}</span>
          {entry.to && (
            <>
              <span style={{ color: "var(--muted)" }}>→</span>
              <span style={{ color: "var(--sea-glass)" }}>{entry.to}</span>
            </>
          )}
        </span>
        <span style={{ display: "block", color: TONE_COLOR[entry.tone] }}>{entry.text}</span>
      </span>
    </div>
  );
}
