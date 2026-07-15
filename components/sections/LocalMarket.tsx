import { Fragment } from "react";
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
          {/* Arrows live in their own fixed-width grid columns so they sit
              dead-center between the steps at every width. */}
          <div className="mt-8 grid gap-10 md:grid-cols-[1fr_3rem_1fr_3rem_1fr_3rem_1fr] md:gap-0">
            {market.chain.steps.map((step, i) => (
              <Fragment key={step.figure}>
                {i > 0 && (
                  <span
                    aria-hidden
                    className={`hidden pt-2 text-center font-display text-2xl text-slate/60 md:block md:-translate-x-10${
                      i === 1 ? " lg:-translate-x-24" : ""
                    }`}
                  >
                    →
                  </span>
                )}
                <div>
                  <p className="font-display text-4xl font-semibold text-ink sm:text-5xl">
                    {step.figure}
                  </p>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/70 md:pr-2">
                    {step.label}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
