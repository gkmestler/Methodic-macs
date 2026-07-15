import Section, { Kicker } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { industry } from "@/content/site-data";

// PRESERVED FROM A PARALLEL EDITING SESSION (2026-07-14), not currently
// rendered. Industry-level market framing: why landscaping, why
// Massachusetts. To use it, import and place in app/page.tsx (it was
// designed to sit between InvestorDeal (ink) and Macs).
export default function Industry() {
  const [before] = industry.title.split(industry.titleAccent);

  return (
    <Section id="industry" tone="paper">
      {/* Kicker + title */}
      <Reveal>
        <Kicker>{industry.kicker}</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-4xl font-display text-3xl font-semibold leading-tight sm:text-5xl">
          {before}
          <span className="text-deepblue">{industry.titleAccent}</span>
        </h2>
      </Reveal>

      {/* Intro paragraph */}
      <Reveal delay={0.08}>
        <p className="mt-6 max-w-2xl leading-relaxed text-ink/70">
          {industry.intro}
        </p>
      </Reveal>

      {/* 2×2 stat grid — figures as strings, no CountUp needed */}
      <div className="mt-16 grid gap-px overflow-hidden border border-slate/20 bg-slate/20 sm:grid-cols-2">
        {industry.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={(i % 2) * 0.06} className="bg-paper">
            <div className="flex h-full flex-col items-center justify-center gap-4 px-6 py-16 text-center">
              <p className="font-display text-5xl font-semibold leading-none text-deepblue sm:text-6xl">
                {stat.figure}
              </p>
              <p className="max-w-xs leading-relaxed text-ink/70">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Why Massachusetts — heading + four bullet rows */}
      <Reveal delay={0.05}>
        <h3 className="mt-20 border-t border-slate/20 pt-12 font-display text-2xl font-semibold">
          {industry.whyMa.heading}
        </h3>
      </Reveal>

      <ol className="mt-8 space-y-0">
        {industry.whyMa.points.map((point, i) => (
          <Reveal key={point.lead} delay={i * 0.05} as="li">
            <div className="grid grid-cols-[auto_1fr] gap-6 border-t border-slate/20 py-7">
              <span className="font-display text-lg text-deepblue">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="md:grid md:grid-cols-[1fr_2.2fr] md:gap-10">
                <h4 className="font-display text-base font-semibold text-ink">
                  {point.lead}
                </h4>
                <p className="mt-2 leading-relaxed text-ink/70 md:mt-0">
                  {point.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
