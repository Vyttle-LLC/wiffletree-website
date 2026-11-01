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
  { label: "Spaces", href: "#spaces" },
  { label: "Second brain", href: "#brain" },
  { label: "Assistant", href: "#assistant" },
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
  { kind: "event", time: "09:41:06", from: "Tide alerts", to: "Brain", text: "read 2 notes · thresholds are per station", tone: "info" },
  { kind: "event", time: "09:41:09", from: "Tide alerts", text: "planned 3 tickets · tidepool, tidepool-web", tone: "subtle" },
  { kind: "event", time: "09:41:10", from: "Tide alerts", to: "Implementer", text: "Add the tidepool alert command", tone: "subtle" },
  { kind: "event", time: "09:41:10", from: "Implementer", text: "started on Opus · first choice in Who runs what", tone: "info" },
  { kind: "event", time: "09:42:20", from: "Implementer", to: "Tide alerts", text: "committed 8d2cfeb · 19 tests pass", tone: "subtle" },
  { kind: "event", time: "09:42:21", from: "Tide alerts", to: "Full review", text: "Tests · Correctness · Regressions", tone: "subtle" },
  { kind: "divider", label: "APP RESTARTED" },
  { kind: "event", time: "09:42:58", from: "Reviewer · Regressions", text: "resumed exact session", tone: "info" },
  { kind: "event", time: "09:43:10", from: "Tester · Tests", to: "Tide alerts", text: "passed · no findings", tone: "success" },
  { kind: "event", time: "09:43:11", from: "Reviewer · Correctness", to: "Tide alerts", text: "passed · no findings", tone: "success" },
  { kind: "event", time: "09:43:40", from: "Reviewer · Regressions", to: "Tide alerts", text: "passed · no findings", tone: "success" },
  { kind: "event", time: "09:43:44", from: "Tide alerts", text: "ticket accepted · 1 of 3", tone: "success" },
  { kind: "event", time: "09:43:44", from: "Implementer", to: "Brain", text: "logged decision · alert once per crossing", tone: "info" },
  { kind: "event", time: "09:43:45", from: "Tide alerts", to: "you", text: "PR open; merging into main stays with you", tone: "accent" },
];

/* ---------- Spaces ---------- */

export type Row = { label: string; value: string };

export type Fact = { title: string; body: string };

// Illustrative rows for the Tidepool Space. The first tab is selected.
export const spaceTabs = ["Tidepool", "Station labs", "Personal"];

export const spaceSettings: Row[] = [
  { label: "INSTRUCTIONS", value: "Added to every agent’s, for every project here" },
  { label: "BRAIN", value: "tidepool-docs · second-brain/" },
  { label: "REPOSITORIES", value: "tidepool, tidepool-web" },
  { label: "MODELS", value: "Its own Who runs what rows, over your defaults" },
  { label: "ISSUES", value: "TIDE · 14 open" },
  { label: "JOBS", value: "Release dashboard · weekdays at 7" },
];

export const spaceFacts: Fact[] = [
  { title: "Yours alone, or your team’s.", body: "A Space stays on your Mac until you store it in a private GitHub repository. Teammates add it from there." },
  { title: "New projects start ready.", body: "Pick a Space and its repositories, brain and models come with it." },
  { title: "Only you edit one.", body: "No agent tool can change which repositories a Space covers." },
];

/* ---------- Second brain ---------- */

export const brainSteps: (Fact & { step: string })[] = [
  { step: "01 LOG", title: "Agents write it down.", body: "Coordinators and implementers log decisions at milestones, one file per entry. Never transcripts." },
  { step: "02 GATE", title: "Seven checks, no model.", body: "Entries reach main through a pull request that merges only when secret, personal-data and format checks pass." },
  { step: "03 COMPILE", title: "Claims get sources.", body: "Each claim is verified against commits, merged PRs and tags, then folded into notes that cite it." },
  { step: "04 RECALL", title: "The next agent starts informed.", body: "Agents query the brain with a tool. You search it with ⌘K, or read it on GitHub or in Obsidian." },
];

// Illustrative note: each claim cites the numbered source rendered under it.
export const brainNote = {
  kind: "decision",
  title: "Alerts fire once per crossing",
  claims: [
    { text: "A station alerts when it crosses its threshold, and not again until it drops back below.", source: "2026-10-28 · tidepool · a41f · PR #42" },
    { text: "Thresholds are stored per station.", source: "2026-10-27 · tidepool · 7c02 · PR #39" },
  ],
};

// Illustrative conflict. The first ruling is the recommended one.
export const brainConflict = {
  kind: "contradiction",
  title: "Thresholds per station, or per region?",
  body: "A new entry says regions set thresholds. The decision on record says stations do. Nothing changes until you rule.",
  rulings: ["Uphold existing", "Keep new", "Keep both", "Defer"],
};

/* ---------- Issues ---------- */

export type IssueColumn = { title: string; cards: { title: string; meta: string }[] };

// Illustrative board for the Tidepool Space.
export const issueColumns: IssueColumn[] = [
  {
    title: "BACKLOG",
    cards: [
      { title: "Quiet hours for alerts", meta: "TIDE-31" },
      { title: "Export station history", meta: "TIDE-34" },
    ],
  },
  { title: "IN PROGRESS", cards: [{ title: "Alert when a station crosses its threshold", meta: "TIDE-27 · Tide alerts" }] },
  { title: "DONE", cards: [{ title: "Store thresholds per station", meta: "TIDE-22" }] },
];

/* ---------- Assistant, jobs and boards ---------- */

// Illustrative assistant thread, job recipe and Boards listing.
export const assistantThread = {
  question: "Why do alerts wait for a second reading?",
  route: "→ moved to “Alert rules” · Tidepool · Change",
  answer: "Stations debounce one reading so a noisy gauge can’t alert twice.",
  action: "Make this a project",
};

export const jobRecipe: Row[] = [
  { label: "Morning release brief", value: "weekdays 07:00" },
  { label: "Reads", value: "gh pr list · gh pr view" },
  { label: "Next runs", value: "Mon · Tue · Wed" },
];

export const boardOutputs: Row[] = [
  { label: "Morning release brief", value: "Shared in Tidepool" },
  { label: "Station coverage map", value: "Only on this Mac" },
  { label: "Q4 alert volume", value: "Shared in Tidepool" },
];

/* ---------- Principles ---------- */

export const principles: Fact[] = [
  { title: "Projects are outcomes, not repositories.", body: "A feature or a bug, across any repositories." },
  { title: "You talk to one coordinator.", body: "It manages the agents so you don’t." },
  { title: "Every ticket is its own workspace.", body: "One repo, one branch, one worktree." },
  { title: "Tested by someone else.", body: "“The turn ended” never counts as “it works.”" },
  { title: "Blocked is not the same as needs-you.", body: "The coordinator resolves most. The rest wait in one Inbox." },
  { title: "Any model can play any role.", body: "You decide who runs each job, and what happens when a subscription runs low." },
  { title: "Messages are durable.", body: "Saved before acknowledged. Sessions resume exactly after a restart." },
  { title: "Humans own integration.", body: "Agents deliver reviewed pull requests. You merge into main." },
  { title: "You decide how thorough a review is.", body: "Full or Light, with your own rule for when to use each." },
  { title: "Nothing runs behind your back.", body: "Dev servers and watchers agents leave running are listed, and stoppable." },
  { title: "You change how agents work, not what they may do.", body: "Behaviors set the workflow by Space and repository. The app enforces the rules." },
  { title: "Software does the routine work.", body: "Git, status and polling are plain code. Models wake only to reason." },
];

/* ---------- Screens gallery ---------- */

export type Screen = { tab: string; src: string; alt: string; caption: string };

// Re-export the screenshots (1280×820) when the app UI changes.
export const screens: Screen[] = [
  {
    tab: "Agents",
    src: "/screens/tickets.png",
    alt: "The Agents panel beside the coordinator’s chat, listing three tickets by stage with their agents, models and progress",
    caption: "Every ticket gets its own branch, implementer and independent reviewers.",
  },
  {
    tab: "Who runs what",
    src: "/screens/models.png",
    alt: "The Models page: when a subscription runs low, and the Who runs what table, with a first choice, a next choice and a Right now column for each job",
    caption: "You decide who runs each job, and what happens when a subscription runs low.",
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
  { kind: "will", text: "Pushes reviewed branches and opens their pull requests" },
  { kind: "will", text: "Merges into feature branches, only at the reviewed commit" },
  { kind: "will", text: "Keeps PRs rebased and free of conflicts, if you ask" },
  { kind: "will", text: "Lets a brain’s pull requests auto-merge once its checks pass" },
  { kind: "wont", text: "Never merges into a protected branch" },
  { kind: "wont", text: "Never approves, closes or comments on a ticket’s PR" },
  { kind: "wont", text: "Assistant threads and jobs never edit code or start agents" },
  { kind: "wont", text: "Never scrapes account pages or spends tokens to check limits" },
  { kind: "caution", text: "Project agents run unattended and can run any command on your Mac. Add repos you trust." },
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
