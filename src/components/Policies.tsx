import Eyebrow from "@/components/Eyebrow";
import SectionHeading from "@/components/SectionHeading";
import { policies, type PolicyKind } from "@/lib/content";

const ICONS: Record<PolicyKind, { stroke: string; path: string; round: boolean }> = {
  will: { stroke: "var(--success)", path: "M3 7.5l2.5 2.5L11 4.5", round: true },
  wont: { stroke: "var(--error)", path: "M4 4l6 6M10 4l-6 6", round: false },
  caution: { stroke: "var(--warning)", path: "M7 3v5M7 10.6v.1", round: false },
};

// What it will and won't do.
export default function Policies() {
  return (
    <section style={{ padding: "160px 24px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "40px 80px" }}>
        <div style={{ flex: "1 1 420px" }}>
          <Eyebrow>WHAT IT WILL AND WON’T DO</Eyebrow>
          <SectionHeading>Merging stays yours.</SectionHeading>
          <p style={{ margin: "20px 0 0", maxWidth: 460, fontSize: 16, lineHeight: 1.6, color: "var(--text-subtle)" }}>
            Wiffletree opens the pull request. The merge button is yours.
          </p>
        </div>
        <div style={{ flex: "1 1 520px", display: "flex", flexDirection: "column", borderTop: "1px solid var(--edge)" }}>
          {policies.map((policy) => {
            const icon = ICONS[policy.kind];
            return (
              <div
                key={policy.text}
                style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "22px 0", borderBottom: "1px solid var(--edge)" }}
              >
                <svg
                  aria-hidden="true"
                  style={{ flex: "none", marginTop: 3 }}
                  width="16"
                  height="16"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke={icon.stroke}
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin={icon.round ? "round" : undefined}
                >
                  <path d={icon.path} />
                </svg>
                <span style={{ fontSize: 16, lineHeight: 1.5 }}>
                  <strong style={{ fontWeight: 600 }}>{policy.text}</strong>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
