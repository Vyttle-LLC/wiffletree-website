const mono = "var(--font-mono)";

export default function Panel({
  label,
  status,
  children,
}: {
  label?: string;
  status?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div style={{ border: "1px solid var(--edge)", borderRadius: 22, background: "var(--well)", overflow: "hidden" }}>
      {label && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            padding: "14px 20px",
            borderBottom: "1px solid var(--surface)",
            fontFamily: mono,
            fontSize: 11,
            letterSpacing: "0.08em",
            color: "var(--muted)",
          }}
        >
          <span>{label}</span>
          {status}
        </div>
      )}
      {children}
    </div>
  );
}
