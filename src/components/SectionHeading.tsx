export default function SectionHeading({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <h2
      style={{
        margin: "20px 0 0",
        fontSize: "clamp(32px, 4.2vw, 56px)",
        lineHeight: 1.04,
        fontWeight: 600,
        letterSpacing: "-0.035em",
        ...style,
      }}
    >
      {children}
    </h2>
  );
}
