import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import { ArrowUpRightIcon } from "@/components/icons";
import Lockup from "@/components/Lockup";
import { links, navLinks } from "@/lib/content";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "var(--nav-bg)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--nav-edge)",
      }}
    >
      <nav aria-label="Main">
        <Container
          style={{
            padding: "0 24px",
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <a href="#top" aria-label="Wiffletree home" style={{ display: "flex", alignItems: "center" }}>
            <Lockup height={24} />
          </a>
          <div className="wt-hide-sm" style={{ display: "flex", alignItems: "center", gap: 32, fontSize: 14, fontWeight: 500 }}>
            {navLinks.map((link) => (
              <a key={link.href} className="wt-navlink" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <ButtonLink href={links.repo} variant="ghost" size="sm" className="wt-hide-sm">
              GitHub
              <ArrowUpRightIcon size={12} />
            </ButtonLink>
            <ButtonLink href={links.download} variant="primary" size="sm">
              Download
            </ButtonLink>
          </div>
        </Container>
      </nav>
    </header>
  );
}
