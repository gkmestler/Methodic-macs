import PasswordGate from "@/components/PasswordGate";
import TopBar from "@/components/TopBar";
import SectionNav from "@/components/SectionNav";
import Footer from "@/components/Footer";

import Hero from "@/components/sections/Hero";
import Team from "@/components/sections/Team";
import Leadership from "@/components/sections/Leadership";
import Advisors from "@/components/sections/Advisors";
import Thesis from "@/components/sections/Thesis";
import InvestorDeal from "@/components/sections/InvestorDeal";
import Macs from "@/components/sections/Macs";
import ValueCreation from "@/components/sections/ValueCreation";
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
        <InvestorDeal />
        <Macs />
        <ValueCreation />
        <Empire />
        <Ask />
      </main>
      <Footer />
    </PasswordGate>
  );
}
