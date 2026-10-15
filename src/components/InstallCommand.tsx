import CopyButton from "@/components/CopyButton";
import { installCommand } from "@/lib/content";

export default function InstallCommand({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        padding: "6px 6px 6px 16px",
        border: "1px solid var(--edge)",
        borderRadius: 12,
        background: "var(--well)",
        ...style,
      }}
    >
      <span aria-hidden="true" style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--accent)", flex: "none" }}>
        $
      </span>
      <code
        className="wt-scroll"
        style={{
          flex: "1 1 auto",
          minWidth: 0,
          padding: "0 8px",
          fontFamily: "var(--font-mono)",
          fontSize: 13,
          color: "var(--text)",
          whiteSpace: "nowrap",
        }}
      >
        {installCommand}
      </code>
      <CopyButton text={installCommand} />
    </div>
  );
}
