import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import DownloadButton from "@/components/DownloadButton";
import InstallCommand from "@/components/InstallCommand";
import { links } from "@/lib/content";

export default function ClosingCta() {
  return (
    <section id="install" style={{ position: "relative", padding: "180px 24px 160px", textAlign: "center" }}>
      <div
        className="wt-dots"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          WebkitMaskImage: "radial-gradient(ellipse at center, #000 0%, transparent 70%)",
          maskImage: "radial-gradient(ellipse at center, #000 0%, transparent 70%)",
        }}
      />
      <div style={{ position: "relative", maxWidth: 820, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Image src="/brand/symbol-dark.svg" alt="" width={444} height={214} style={{ width: 72, height: "auto", display: "block" }} />
        <h2 style={{ margin: "36px 0 0", fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1, fontWeight: 600, letterSpacing: "-0.045em" }}>
          Hand it a goal.
        </h2>
        <p style={{ margin: "20px 0 0", maxWidth: 520, fontSize: 18, lineHeight: 1.55, color: "var(--text-subtle)" }}>Free and open source.</p>
        <InstallCommand style={{ marginTop: 40, width: "100%", textAlign: "left" }} />
        <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
          <DownloadButton />
          <ButtonLink href={links.repo} variant="ghost" size="lg">
            Star on GitHub
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
