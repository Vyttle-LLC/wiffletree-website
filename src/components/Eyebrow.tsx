export default function Eyebrow({
  children,
  color = "var(--accent)",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        letterSpacing: "0.12em",
        color,
      }}
    >
      {children}
    </p>
  );
}
