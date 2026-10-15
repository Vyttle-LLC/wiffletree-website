import Image from "next/image";

// lockup-dark.svg is 653.4 × 96.4; callers set the rendered height.
export default function Lockup({ height, style }: { height: number; style?: React.CSSProperties }) {
  return (
    <Image
      src="/brand/lockup-dark.svg"
      alt="Wiffletree"
      width={653}
      height={96}
      style={{ height, width: "auto", display: "block", ...style }}
    />
  );
}
