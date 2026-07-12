import Section, { Kicker } from "@/components/Section";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { methodic } from "@/content/site-data";

// Section 2. The Thesis / The Opportunity. The worldview, told in stats. Paper.
export default function Thesis() {
  const { thesis } = methodic;
  const [before, after] = thesis.title.split(thesis.titleAccent);

  return (
    <Section id="thesis" tone="paper">
      <Reveal>
        <Kicker>{thesis.kicker}</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-4xl font-display text-3xl font-semibold leading-tight sm:text-5xl">
          {before}
          <span className="text-deepblue">{thesis.titleAccent}</span>
          {after}
        </h2>
      </Reveal>

      {/* Four headline stats, count up on scroll */}
      <div className="mt-16 grid gap-px overflow-hidden border border-slate/20 bg-slate/20 sm:grid-cols-2">
        {thesis.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={(i % 2) * 0.06} className="bg-paper">
            <div className="flex h-full flex-col items-center justify-center gap-4 px-6 py-16 text-center">
              <CountUp
                value={stat.value}
                format="percent"
                className="font-display text-6xl font-semibold leading-none text-deepblue sm:text-7xl"
              />
              <p className="max-w-xs leading-relaxed text-ink/70">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
