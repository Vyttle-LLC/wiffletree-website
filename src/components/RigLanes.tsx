"use client";

import { useEffect, useRef, useState } from "react";
import type { RigLane } from "@/lib/content";

const HEIGHT = 56;
const BEND_Y = 24;
const BEND_RADIUS = 10;
const FALLBACK_WIDTH = 492;

export type LaneTiming = { lane: RigLane; packetDelay: number; reportDelay: number };

// Connector paths from the coordinator down to each card. The bends must land
// on the card centres, so they are measured from the rendered width.
function lanePaths(width: number, cardGap: number): Record<RigLane, string> {
  const cardWidth = (width - 2 * cardGap) / 3;
  const left = cardWidth / 2;
  const mid = width / 2;
  const right = width - cardWidth / 2;
  const [r, y, h] = [BEND_RADIUS, BEND_Y, HEIGHT];
  return {
    L: `M${mid} 0V${y - r}Q${mid} ${y} ${mid - r} ${y}H${left + r}Q${left} ${y} ${left} ${y + r}V${h}`,
    C: `M${mid} 0V${h}`,
    R: `M${mid} 0V${y - r}Q${mid} ${y} ${mid + r} ${y}H${right - r}Q${right} ${y} ${right} ${y + r}V${h}`,
  };
}

export default function RigLanes({ cardGap, lanes }: { cardGap: number; lanes: LaneTiming[] }) {
  const container = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(FALLBACK_WIDTH);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setWidth(Math.round(entry.contentRect.width) || FALLBACK_WIDTH);
    });
    observer.observe(container.current!);
    return () => observer.disconnect();
  }, []);

  const paths = lanePaths(width, cardGap);

  return (
    <div ref={container} aria-hidden="true" style={{ position: "relative", height: HEIGHT }}>
      <svg width="100%" height={HEIGHT} viewBox={`0 0 ${width} ${HEIGHT}`} style={{ display: "block", overflow: "visible" }} fill="none">
        {lanes.map(({ lane }) => (
          <path key={lane} d={paths[lane]} stroke="var(--edge)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        ))}
        {lanes.map(({ lane, packetDelay }) => (
          <path key={lane} className="wt-dot wt-dot-down" d={paths[lane]} pathLength={100} style={{ animationDelay: `${packetDelay}s` }} />
        ))}
        {lanes.map(({ lane, reportDelay }) => (
          <path key={lane} className="wt-dot wt-dot-up" d={paths[lane]} pathLength={100} style={{ animationDelay: `${reportDelay}s` }} />
        ))}
      </svg>
      <span
        className="wt-joint"
        style={{
          position: "absolute",
          left: "50%",
          top: 19,
          width: 10,
          height: 10,
          marginLeft: -5,
          borderRadius: 3,
          background: "var(--accent)",
        }}
      />
    </div>
  );
}
