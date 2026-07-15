import PasswordGate from "@/components/PasswordGate";
import TopBar from "@/components/TopBar";
import SectionNav from "@/components/SectionNav";
import Footer from "@/components/Footer";

import Hero from "@/components/sections/Hero";
import Team from "@/components/sections/Team";
import Leadership, { LeaderById } from "@/components/sections/Leadership";
import Advisors from "@/components/sections/Advisors";
import Thesis from "@/components/sections/Thesis";
import Market from "@/components/sections/Market";
import InvestorDeal from "@/components/sections/InvestorDeal";
import Structure from "@/components/sections/Structure";
import Macs from "@/components/sections/Macs";
import ValueCreation from "@/components/sections/ValueCreation";
import LocalMarket from "@/components/sections/LocalMarket";
import Empire from "@/components/sections/Empire";
import Ask from "@/components/sections/Ask";

export default function Home() {
  return (
    <PasswordGate>
      <TopBar />
      <SectionNav />
      <main>
        <Hero />
        <Team />
        <Leadership />
        <Advisors />
        <Thesis />
        <Structure />
        <LeaderById id="tiffany" compact />
        <Market />
        <InvestorDeal />
        <Macs />
        <ValueCreation />
        <LocalMarket />
        <Empire />
        <Ask />
      </main>
      <Footer />
    </PasswordGate>
  );
}
