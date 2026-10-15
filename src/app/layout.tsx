import type { Metadata, Viewport } from "next";
import { Geist_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

const description =
  "A native Mac workspace where Claude and Codex agents work as a team. Give one coordinator a goal; it plans the work, staffs each repository and reports back with tested branches.";
const socialDescription = "A team lead for your coding agents. Open source, native on macOS.";
const socialImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Wiffletree: a team lead for your coding agents",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://wiffletree.com"),
  title: "Wiffletree — a team lead for your coding agents",
  description,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/favicon.ico", sizes: "any" },
    ],
    apple: "/brand/apple-touch-icon-180.png",
  },
  openGraph: {
    title: "Wiffletree",
    description: socialDescription,
    url: "/",
    siteName: "Wiffletree",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wiffletree",
    description: socialDescription,
    images: [socialImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#1A262D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Font variables sit on <html> so the :root tokens in globals.css can use them.
  return (
    <html lang="en" className={`${instrumentSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
