import Section, { Kicker } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { market } from "@/content/site-data";

// The Local Market. Commercial whitespace behind the value plan. Off-White.
export default function LocalMarket() {
  return (
    <Section id="local-market" tone="offwhite">
      <Reveal>
        <Kicker>{market.kicker}</Kicker>
      </Reveal>
      {/* Whitespace stats */}
      <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2">
        {market.stats.map((stat, i) => (
          <Reveal key={stat.figure} delay={(i % 2) * 0.06}>
            <div className="border-t-2 border-deepblue pt-5">
              <p className="font-display text-5xl font-semibold text-ink sm:text-6xl">
                {stat.figure}
              </p>
              <p className="mt-3 max-w-md leading-relaxed text-ink/70">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Sourcing note, above the chain */}
      <Reveal>
        <p className="mt-12 text-sm text-slate">{market.footnote}</p>
      </Reveal>

      {/* The chain: contracts -> revenue -> free cash flow -> return */}
      <Reveal>
        <div className="mt-16 border-t border-slate/20 pt-10">
          <p className="kicker text-deepblue">{market.chain.kicker}</p>
          <div className="mt-8 grid gap-10 md:grid-cols-4 md:gap-6">
            {market.chain.steps.map((step, i) => (
              <div
                key={step.figure}
                className={i > 0 ? "relative md:pl-9" : "relative"}
              >
                {i > 0 && (
                  <span
                    aria-hidden
                    className="absolute left-0 top-2 hidden font-display text-2xl text-slate/60 md:block"
                  >
                    →
                  </span>
                )}
                <p className="font-display text-4xl font-semibold text-ink sm:text-5xl">
                  {step.figure}
                </p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/70">
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
