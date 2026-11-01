import Assistant from "@/components/Assistant";
import Brain from "@/components/Brain";
import ClosingCta from "@/components/ClosingCta";
import EarlyNotice from "@/components/EarlyNotice";
import EventLog from "@/components/EventLog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Issues from "@/components/Issues";
import Platform from "@/components/Platform";
import Policies from "@/components/Policies";
import Principles from "@/components/Principles";
import Screens from "@/components/Screens";
import Spaces from "@/components/Spaces";
import Why from "@/components/Why";

export default function Home() {
  // overflow: clip (not hidden) trims the glows and dot grids without
  // becoming a scroll container, so the header stays sticky.
  return (
    <div style={{ overflow: "clip" }}>
      <Header />
      <main>
        <Hero />
        <Why />
        <EventLog />
        <Spaces />
        <Brain />
        <Issues />
        <Assistant />
        <Principles />
        <Screens />
        <Platform />
        <Policies />
        <EarlyNotice />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
