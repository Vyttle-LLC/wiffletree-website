import Lockup from "@/components/Lockup";
import { footerColumns } from "@/lib/content";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--edge)", padding: "56px 24px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 40 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, flex: "1 1 260px" }}>
          <Lockup height={22} style={{ alignSelf: "flex-start" }} />
          <p style={{ margin: 0, fontSize: 14, color: "var(--muted)" }}>© 2026 Vyttle LLC · Released under the MIT License</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 72px", fontSize: 14 }}>
          {footerColumns.map((column) => (
            <div key={column.heading} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", color: "var(--muted)" }}>{column.heading}</span>
              {column.links.map((link) => (
                <a key={link.href} className="wt-navlink" href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
