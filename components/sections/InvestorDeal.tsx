import Section, { Kicker } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { methodic } from "@/content/site-data";

// Section 4. The Investor Deal. You own the platform, not one deal. Ink.
export default function InvestorDeal() {
  const { investorDeal } = methodic;
  return (
    <Section id="investor-deal" tone="ink">
      <Reveal>
        <Kicker>{investorDeal.kicker}</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/80 sm:text-xl">
          {investorDeal.lead}
        </p>
      </Reveal>

      {/* Three labeled blocks */}
      <div className="mt-16 grid gap-px overflow-hidden border border-paper/15 bg-paper/15 md:grid-cols-3">
        {investorDeal.blocks.map((block, i) => (
          <Reveal key={block.label} delay={i * 0.06} className="bg-ink">
            <div className="flex h-full flex-col gap-4 p-8">
              <p className="kicker text-deepblue">{block.label}</p>
              <p className="leading-relaxed text-paper/80">{block.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Pull quote */}
      <Reveal delay={0.1}>
        <blockquote className="mx-auto mt-16 max-w-3xl text-center font-display text-3xl italic leading-snug text-deepblue sm:text-4xl">
          {investorDeal.pullQuote}
        </blockquote>
      </Reveal>
    </Section>
  );
}
