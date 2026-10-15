const SIZES = {
  sm: { height: 38, borderRadius: 10, fontSize: 14, gap: 8 },
  lg: { height: 52, borderRadius: 12, fontSize: 16, gap: 10 },
};

const VARIANTS = {
  primary: {
    className: "wt-btn-primary",
    padding: { sm: "0 16px", lg: "0 22px" },
    style: { background: "var(--accent)", color: "var(--canvas)", fontWeight: 600 },
  },
  ghost: {
    className: "wt-btn-ghost",
    padding: { sm: "0 14px", lg: "0 20px" },
    style: { border: "1px solid var(--edge)", color: "var(--text)", fontWeight: 500 },
  },
};

export default function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
}: {
  href: string;
  variant: keyof typeof VARIANTS;
  size: keyof typeof SIZES;
  className?: string;
  children: React.ReactNode;
}) {
  const { className: variantClass, padding, style } = VARIANTS[variant];
  return (
    <a
      className={className ? `${variantClass} ${className}` : variantClass}
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: padding[size],
        ...SIZES[size],
        ...style,
      }}
    >
      {children}
    </a>
  );
}
