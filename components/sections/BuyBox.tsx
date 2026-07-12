import Section, { Kicker } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { methodic } from "@/content/site-data";

// Section 3. The Buy Box. The acquisition filter as a clean criteria grid.
export default function BuyBox() {
  const { buyBox, buyBoxFraming } = methodic;
  return (
    <Section id="buy-box" tone="offwhite">
      <Reveal>
        <Kicker>{buyBox.kicker}</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-5xl">
          {buyBoxFraming.headline}
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="prose-measure mt-6 leading-relaxed text-ink/80">
          {buyBox.intro}
        </p>
      </Reveal>

      {/* Verticals */}
      <Reveal delay={0.12}>
        <div className="mt-14">
          <p className="kicker text-slate">Verticals</p>
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-3">
            {buyBox.verticals.map((v) => (
              <span
                key={v}
                className="border border-slate/30 px-4 py-2 text-sm text-ink"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Criteria grid */}
      <div className="mt-12 grid gap-px overflow-hidden border border-slate/20 bg-slate/20 sm:grid-cols-2 lg:grid-cols-4">
        {buyBox.criteria.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.05} className="bg-offwhite">
            <div className="flex h-full flex-col justify-between gap-6 p-6">
              <div>
                {c.platformTarget && (
                  <span className="mb-3 inline-block border border-deepblue/40 px-2 py-0.5 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-deepblue">
                    {buyBoxFraming.platformTargetLabel}
                  </span>
                )}
                <p className="kicker text-slate">{c.label}</p>
              </div>
              <p className="font-display text-xl font-semibold leading-snug text-ink">
                {c.value}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Bridge line: hands off into Mac's as a deliberate entry below the box */}
      <Reveal delay={0.05}>
        <div className="mt-14 border-t border-deepblue pt-8">
          <p className="prose-measure leading-relaxed text-ink/80">
            {buyBoxFraming.bridgeLine}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
