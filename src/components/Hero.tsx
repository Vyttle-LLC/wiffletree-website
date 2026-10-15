import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import DownloadButton from "@/components/DownloadButton";
import HeroRig from "@/components/HeroRig";
import { ArrowUpRightIcon } from "@/components/icons";
import InstallCommand from "@/components/InstallCommand";
import { links } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" style={{ position: "relative", padding: "112px 24px 0" }}>
      <div className="wt-dots" aria-hidden="true" style={{ position: "absolute", inset: "0 0 auto 0", height: 900, pointerEvents: "none" }} />
      <div
        style={{
          position: "relative",
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "64px 72px",
        }}
      >
        <div style={{ flex: "1 1 480px", minWidth: 0 }}>
          <h1
            className="wt-rise wt-rise-2"
            style={{
              margin: 0,
              maxWidth: 640,
              fontSize: "clamp(44px, 5.6vw, 80px)",
              lineHeight: 1,
              fontWeight: 600,
              letterSpacing: "-0.045em",
              textWrap: "balance",
            }}
          >
            A team lead for your coding agents.
          </h1>
          <p
            className="wt-rise wt-rise-3"
            style={{
              margin: "24px 0 0",
              maxWidth: 520,
              fontSize: "clamp(18px, 1.5vw, 20px)",
              lineHeight: 1.5,
              color: "var(--text-subtle)",
              textWrap: "pretty",
            }}
          >
            A native Mac workspace where Claude and Codex agents work as a team.
          </p>
          <div className="wt-rise wt-rise-4" style={{ marginTop: 40, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
            <DownloadButton />
            <ButtonLink href={links.repo} variant="ghost" size="lg">
              Read the source
              <ArrowUpRightIcon size={14} />
            </ButtonLink>
          </div>
          <InstallCommand className="wt-rise wt-rise-4" style={{ marginTop: 20, maxWidth: 760 }} />
          <p
            className="wt-rise wt-rise-4"
            style={{ margin: "14px 0 0", fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.02em", color: "var(--muted)" }}
          >
            macOS 13+ · Apple Silicon · MIT
          </p>
        </div>

        <HeroRig />
      </div>

      <div className="wt-rise wt-rise-4" style={{ position: "relative", maxWidth: 1200, margin: "80px auto 0" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "8%",
            right: "8%",
            top: "12%",
            bottom: "-4%",
            background: "var(--deep-teal)",
            filter: "blur(90px)",
            opacity: 0.55,
            borderRadius: 40,
          }}
        />
        <figure
          style={{
            position: "relative",
            margin: 0,
            padding: 10,
            border: "1px solid var(--edge)",
            borderRadius: 20,
            background: "var(--frame-bg)",
          }}
        >
          <Image
            src="/screens/coordinator.png"
            alt="The Tide alerts coordinator reporting an accepted ticket, under a progress strip that reads 1 of 3 tickets accepted"
            width={1280}
            height={820}
            loading="eager"
            style={{ display: "block", width: "100%", height: "auto", borderRadius: 12 }}
          />
        </figure>
      </div>
    </section>
  );
}
