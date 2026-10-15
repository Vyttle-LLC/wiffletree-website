import Image from "next/image";
import RigLanes, { type LaneTiming } from "@/components/RigLanes";
import { rigCards, rigGoal, type RigCard, type RigLane } from "@/lib/content";

// RigLanes computes the lane bends from this gap, so the two stay in sync.
const CARD_GAP = 12;

// Animation delays (s) on the shared 9s loop; lanes start 3s apart, L → C → R.
// A card starts working when its packet lands, 1.9s after the packet leaves,
// so card = packet − 7.1s. The report packet leaves the moment the card is
// accepted, so it shares the card's delay.
const CARD_DELAY: Record<RigLane, number> = { L: -7.1, C: -4.1, R: -1.1 };
const PACKET_DELAY: Record<RigLane, number> = { L: 0, C: -6, R: -3 };

const lanes: LaneTiming[] = rigCards.map(({ lane }) => ({
  lane,
  packetDelay: PACKET_DELAY[lane],
  reportDelay: CARD_DELAY[lane],
}));

const STATUSES = [
  { className: "wt-st-1", color: "var(--warning)", label: "● working" },
  { className: "wt-st-2", color: "var(--info)", label: "● verifying" },
  { className: "wt-st-3", color: "var(--success)", label: "✓ accepted" },
];

const mono = "var(--font-mono)";

export default function HeroRig() {
  return (
    <div
      role="img"
      aria-label="Animation: a goal goes to one coordinator, which splits it into three tickets. Each ticket's agent implements, gets tested, and passes."
      className="wt-rise wt-rise-3 wt-rig"
      style={{
        flex: "1 1 440px",
        minWidth: 0,
        padding: 24,
        border: "1px solid var(--edge)",
        borderRadius: 22,
        background: "var(--surface-blue)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          height: 44,
          padding: "0 14px",
          border: "1px solid var(--edge)",
          borderRadius: 12,
          background: "var(--well)",
          overflow: "hidden",
        }}
      >
        <span aria-hidden="true" style={{ flex: "none", fontFamily: mono, fontSize: 13, color: "var(--accent)" }}>
          ›
        </span>
        <span
          className="wt-type"
          style={{ "--goal-chars": rigGoal.length, fontFamily: mono, fontSize: 13, color: "var(--text)" } as React.CSSProperties}
        >
          {rigGoal}
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="wt-line" aria-hidden="true" style={{ height: 32 }}>
          <span className="wt-pkt wt-pkt-down" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 16px 10px 10px",
            border: "1px solid var(--sea-glass)",
            borderRadius: 14,
            background: "var(--raised)",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 36,
              height: 36,
              borderRadius: 9,
              background: "var(--canvas)",
            }}
          >
            <Image src="/brand/symbol-dark.svg" alt="" width={444} height={214} style={{ width: 24, height: "auto", display: "block" }} />
          </span>
          <span style={{ fontSize: 15, fontWeight: 600 }}>Coordinator</span>
        </div>
      </div>

      <RigLanes cardGap={CARD_GAP} lanes={lanes} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: CARD_GAP }}>
        {rigCards.map((card) => (
          <AgentCard key={card.lane} card={card} delay={`${CARD_DELAY[card.lane]}s`} />
        ))}
      </div>
    </div>
  );
}

function AgentCard({ card, delay }: { card: RigCard; delay: string }) {
  return (
    <div
      className="wt-card"
      style={{
        padding: "14px 14px 16px",
        border: "1px solid var(--edge)",
        borderRadius: 14,
        background: "var(--surface)",
        animationDelay: delay,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
        <span style={{ fontSize: 15, fontWeight: 600 }}>{card.repo}</span>
        <span className="wt-model" style={{ fontFamily: mono, fontSize: 11, color: "var(--muted)" }}>
          {card.model}
        </span>
      </div>
      <div style={{ position: "relative", height: 18, marginTop: 12, fontFamily: mono, fontSize: 11, whiteSpace: "nowrap" }}>
        {STATUSES.map((status) => (
          <span key={status.className} className={`wt-st ${status.className}`} style={{ color: status.color, animationDelay: delay }}>
            {status.label}
          </span>
        ))}
      </div>
      <div aria-hidden="true" style={{ marginTop: 8, height: 3, borderRadius: 3, background: "var(--raised)", overflow: "hidden" }}>
        <div className="wt-fill" style={{ height: "100%", animationDelay: delay }} />
      </div>
    </div>
  );
}
