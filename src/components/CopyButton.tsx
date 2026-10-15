"use client";

import { useEffect, useRef, useState } from "react";

const RESET_AFTER_MS = 1600;

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  function copy() {
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopied(true);
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopied(false), RESET_AFTER_MS);
  }

  return (
    <button
      type="button"
      aria-label="Copy install command"
      onClick={copy}
      style={{
        flex: "none",
        height: 36,
        minWidth: 76,
        padding: "0 12px",
        border: 0,
        borderRadius: 8,
        background: "var(--raised)",
        color: "var(--text)",
        font: "500 13px var(--font-sans)",
        cursor: "pointer",
      }}
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
