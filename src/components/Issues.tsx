import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import Illustrative from "@/components/Illustrative";
import Lede from "@/components/Lede";
import Panel from "@/components/Panel";
import SectionHeading from "@/components/SectionHeading";
import { issueColumns } from "@/lib/content";

const mono = "var(--font-mono)";

export default function Issues() {
  return (
    <section id="issues" style={{ padding: "0 24px 160px" }}>
      <Container style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "56px 72px" }}>
        <div style={{ flex: "1 1 440px", minWidth: 0 }}>
          <Panel label="ISSUES · TIDEPOOL" status={<span>BOARD</span>}>
            <div className="wt-board" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12, padding: 16 }}>
              {issueColumns.map((column) => (
                <div key={column.title}>
                  <p style={{ margin: "0 0 10px", fontFamily: mono, fontSize: 11, letterSpacing: "0.06em", color: "var(--muted)" }}>{column.title}</p>
                  {column.cards.map((card) => (
                    <div
                      key={card.meta}
                      style={{
                        marginBottom: 10,
                        padding: "11px 12px",
                        border: "1px solid var(--surface)",
                        borderRadius: 10,
                        background: "var(--surface-blue)",
                        fontSize: 13.5,
                        lineHeight: 1.4,
                      }}
                    >
                      {card.title}
                      <span style={{ display: "block", marginTop: 6, fontFamily: mono, fontSize: 11, color: "var(--muted)" }}>{card.meta}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Panel>
          <Illustrative />
        </div>
        <div style={{ flex: "1 1 440px", minWidth: 0 }}>
          <Eyebrow>ISSUES</Eyebrow>
          <SectionHeading style={{ textWrap: "balance" }}>A backlog that lives in your repository.</SectionHeading>
          <Lede>
            Each Space’s storage repository is its tracker, and each issue is a folder of plain files. Work from a list or a board, or edit on
            GitHub if you don’t use Wiffletree. Import your Linear issues to start.
          </Lede>
          <Lede style={{ fontSize: 15 }}>
            Issues are scanned for secrets and personal data before every push. Choose your repository with care: anyone with access can read them,
            and Git keeps them for good.
          </Lede>
        </div>
      </Container>
    </section>
  );
}
