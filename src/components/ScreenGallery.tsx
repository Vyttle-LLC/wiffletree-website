"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { screens } from "@/lib/content";

const ADVANCE_EVERY_MS = 6000;
const PANEL_ID = "wt-shots";

// Tabs crossfade between screenshots and auto-advance until the visitor picks
// one. Reduced motion keeps the gallery still.
export default function ScreenGallery() {
  const [current, setCurrent] = useState(0);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    if (pinned || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setCurrent((i) => (i + 1) % screens.length), ADVANCE_EVERY_MS);
    return () => clearInterval(timer);
  }, [pinned]);

  function pick(i: number) {
    setPinned(true);
    setCurrent(i);
  }

  return (
    <>
      <div style={{ marginTop: 48, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px 32px" }}>
        <div
          role="tablist"
          aria-label="App screens"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            padding: 5,
            border: "1px solid var(--edge)",
            borderRadius: 14,
            background: "var(--well)",
          }}
        >
          {screens.map((screen, i) => (
            <button
              key={screen.tab}
              type="button"
              className="wt-tab"
              role="tab"
              id={`wt-tab-${i}`}
              aria-controls={PANEL_ID}
              aria-selected={i === current}
              onClick={() => pick(i)}
            >
              {screen.tab}
            </button>
          ))}
        </div>
        <p aria-live="polite" style={{ margin: 0, maxWidth: 520, fontSize: 16, lineHeight: 1.5, color: "var(--text-subtle)" }}>
          {screens[current].caption}
        </p>
      </div>
      <div style={{ position: "relative", marginTop: 28 }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "10%",
            right: "10%",
            top: "15%",
            bottom: "-2%",
            background: "var(--deep-teal)",
            filter: "blur(90px)",
            opacity: 0.4,
            borderRadius: 40,
          }}
        />
        <div style={{ position: "relative", padding: 10, border: "1px solid var(--edge)", borderRadius: 20, background: "var(--frame-bg)" }}>
          <div id={PANEL_ID} role="tabpanel" aria-labelledby={`wt-tab-${current}`} style={{ display: "grid" }}>
            {screens.map((screen, i) => (
              <Image
                key={screen.src}
                className={i === current ? "wt-shotimg is-on" : "wt-shotimg"}
                src={screen.src}
                alt={screen.alt}
                width={1280}
                height={820}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
