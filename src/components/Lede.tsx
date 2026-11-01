export default function Lede({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <p style={{ margin: "20px 0 0", maxWidth: 560, fontSize: 17, lineHeight: 1.55, color: "var(--text-subtle)", ...style }}>
      {children}
    </p>
  );
}
