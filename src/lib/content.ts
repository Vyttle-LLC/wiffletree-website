// Page data and links.

const REPO = "https://github.com/Vyttle-LLC/wiffletree";

export const links = {
  repo: REPO,
  download: `${REPO}/releases/latest`,
  releases: `${REPO}/releases`,
  development: `${REPO}/blob/main/docs/DEVELOPMENT.md`,
  currentLimits: `${REPO}/blob/main/docs/DEVELOPMENT.md#current-limits`,
  roadmap: `${REPO}/blob/main/docs/PRD.md`,
  contributing: `${REPO}/blob/main/CONTRIBUTING.md`,
  security: `${REPO}/blob/main/SECURITY.md`,
  license: `${REPO}/blob/main/LICENSE`,
  issues: `${REPO}/issues`,
};

export const installCommand =
  "curl -fsSL https://raw.githubusercontent.com/Vyttle-LLC/wiffletree/main/scripts/install.sh | bash";

export type Link = { label: string; href: string };

export const navLinks: Link[] = [
  { label: "How it works", href: "#how" },
  { label: "Principles", href: "#principles" },
  { label: "Install", href: "#install" },
  { label: "Docs", href: links.development },
];

/* ---------- Hero rig ---------- */

// Illustrative demo data, based on the Tide alerts demo run.
export const rigGoal = "Add --json to every list command";

export type RigLane = "L" | "C" | "R";

export type RigCard = { lane: RigLane; repo: string; model: string };

export const rigCards: RigCard[] = [
  { lane: "L", repo: "api", model: "Codex" },
  { lane: "C", repo: "web", model: "Claude" },
  { lane: "R", repo: "cli", model: "Codex" },
];

/* ---------- Event log ---------- */

export type LogTone = "text" | "subtle" | "info" | "success" | "accent";

export type LogEntry =
  | {
      kind: "event";
      time: string;
      from: string;
      to?: string;
      text: string;
      tone: LogTone;
    }
  | { kind: "divider"; label: string };

// Illustrative rows from the Tide alerts demo run.
export const eventLog: LogEntry[] = [
  { kind: "event", time: "09:41:02", from: "you", to: "Tide alerts", text: "Alert when a station crosses its threshold", tone: "text" },
  { kind: "event", time: "09:41:09", from: "Tide alerts", text: "planned 3 tickets · tidepool, tidepool-web", tone: "subtle" },
  { kind: "event", time: "09:41:10", from: "Tide alerts", to: "Implementer", text: "Add the tidepool alert command", tone: "subtle" },
  { kind: "event", time: "09:41:10", from: "Tide alerts", text: "chose Opus at high: touches the CLI and prediction code", tone: "info" },
  { kind: "event", time: "09:42:20", from: "Implementer", to: "Tide alerts", text: "committed 8d2cfeb · 19 tests pass", tone: "subtle" },
  { kind: "event", time: "09:42:21", from: "Tide alerts", to: "Full review", text: "Tests · Correctness · Regressions", tone: "subtle" },
  { kind: "divider", label: "APP RESTARTED" },
  { kind: "event", time: "09:42:58", from: "Reviewer · Regressions", text: "resumed exact session", tone: "info" },
  { kind: "event", time: "09:43:10", from: "Tester · Tests", to: "Tide alerts", text: "passed · no findings", tone: "success" },
  { kind: "event", time: "09:43:11", from: "Reviewer · Correctness", to: "Tide alerts", text: "passed · no findings", tone: "success" },
  { kind: "event", time: "09:43:40", from: "Reviewer · Regressions", to: "Tide alerts", text: "passed · no findings", tone: "success" },
  { kind: "event", time: "09:43:44", from: "Tide alerts", text: "ticket accepted · 1 of 3", tone: "success" },
  { kind: "event", time: "09:43:45", from: "Tide alerts", to: "you", text: "nothing pushed; merging stays with you", tone: "accent" },
];

/* ---------- Principles ---------- */

export type Principle = { title: string; body: string };

export const principles: Principle[] = [
  { title: "Projects are outcomes, not repositories.", body: "A feature or a bug, across any repositories." },
  { title: "You talk to one coordinator.", body: "It manages the agents so you don’t." },
  { title: "Every ticket is its own workspace.", body: "One repo, one branch, one worktree." },
  { title: "Tested by someone else.", body: "“The turn ended” never counts as “it works.”" },
  { title: "Blocked is not the same as needs-you.", body: "The coordinator resolves most. The rest wait in one Inbox." },
  { title: "Any model can play any role.", body: "You list the models allowed. The coordinator picks one per job, and says why." },
  { title: "Messages are durable.", body: "Saved before acknowledged. Sessions resume exactly after a restart." },
  { title: "Humans own integration.", body: "Agents deliver branches. You merge." },
  { title: "You decide how thorough a review is.", body: "Full or Light, with your own rule for when to use each." },
  { title: "Nothing runs behind your back.", body: "Dev servers and watchers agents leave running are listed, and stoppable." },
];

/* ---------- Screens gallery ---------- */

export type Screen = { tab: string; src: string; alt: string; caption: string };

// Re-export the screenshots (1280×820) when the app UI changes.
export const screens: Screen[] = [
  {
    tab: "Crew",
    src: "/screens/tickets.png",
    alt: "The Crew panel beside the coordinator chat, listing three tickets by stage with their agents, models and progress",
    caption: "Every ticket gets its own branch, implementer and independent reviewers.",
  },
  {
    tab: "Models",
    src: "/screens/models.png",
    alt: "The Models page with the models allowed on this machine, the providers for each role and the Full and Light review levels",
    caption: "You allow exact models. The coordinator picks one for each assignment.",
  },
  {
    tab: "Usage",
    src: "/screens/usage.png",
    alt: "The Usage page with Claude and Codex 5-hour and weekly limits above a week of daily tokens",
    caption: "Provider limits side by side, above the tokens your agents used each day.",
  },
  {
    tab: "Context",
    src: "/screens/context.png",
    alt: "An implementer Context card showing how full its context window is, by category, with a Compact button",
    caption: "See what fills an agent’s context, and compact it when you choose.",
  },
];

/* ---------- Native ---------- */

export const nativeFacts: { label: string; value: string }[] = [
  { label: "LANGUAGE", value: "Rust" },
  { label: "UI", value: "GPUI · Metal" },
  { label: "UPDATES", value: "Automatic" },
  { label: "RUNS", value: "On your Mac" },
];

/* ---------- Will / won't ---------- */

export type PolicyKind = "will" | "wont" | "caution";

export const policies: { kind: PolicyKind; text: string }[] = [
  { kind: "will", text: "Pushes tested branches" },
  { kind: "will", text: "Keeps PRs rebased, if you ask" },
  { kind: "wont", text: "Never approves, merges or closes PRs" },
  { kind: "wont", text: "Never scrapes account pages or spends tokens to check limits" },
  { kind: "caution", text: "Agents run unattended. Add repos you trust." },
];

/* ---------- Footer ---------- */

export const footerColumns: { heading: string; links: Link[] }[] = [
  {
    heading: "PRODUCT",
    links: [
      { label: "Download", href: links.download },
      { label: "Releases", href: links.releases },
      { label: "Roadmap", href: links.roadmap },
    ],
  },
  {
    heading: "DEVELOPERS",
    links: [
      { label: "GitHub", href: links.repo },
      { label: "Development notes", href: links.development },
      { label: "Contributing", href: links.contributing },
    ],
  },
  {
    heading: "PROJECT",
    links: [
      { label: "Security", href: links.security },
      { label: "License", href: links.license },
      { label: "Issues", href: links.issues },
    ],
  },
];
