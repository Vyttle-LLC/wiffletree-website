export default function Container({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={className} style={{ maxWidth: 1200, margin: "0 auto", ...style }}>
      {children}
    </div>
  );
}
