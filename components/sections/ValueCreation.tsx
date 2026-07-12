import Section, { Kicker } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { valueCreation } from "@/content/site-data";

// Section 6. The Value-Creation Plan for this specific business.
export default function ValueCreation() {
  const vc = valueCreation;
  return (
    <Section id="value-creation" tone="paper">
      <Reveal>
        <Kicker>{vc.kicker}</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-5xl">
          {vc.title}
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="prose-measure mt-6 leading-relaxed text-ink/80">
          {vc.intro}
        </p>
      </Reveal>

      <hr className="hairline mt-14" />

      <div className="mt-4 divide-y divide-slate/20">
        {vc.levers.map((lever, i) => (
          <Reveal key={lever.heading} delay={(i % 3) * 0.05}>
            <div className="grid gap-4 py-8 md:grid-cols-[auto_1fr] md:gap-10">
              <span className="font-display text-xl text-deepblue">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-10">
                <h3 className="font-display text-xl font-semibold">
                  {lever.heading}
                </h3>
                <p className="mt-2 leading-relaxed text-ink/80 md:mt-0">
                  {lever.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Optional GM pull quote, only when confirmed for public use */}
      {vc.gmQuoteConfirmed && (
        <Reveal>
          <figure className="mt-14 border-l-2 border-deepblue pl-6">
            <blockquote className="font-display text-2xl italic leading-snug text-deepblue sm:text-3xl">
              {vc.gmQuote}
            </blockquote>
            <figcaption className="mt-3 kicker text-slate">
              {vc.gmQuoteAttribution}
            </figcaption>
          </figure>
        </Reveal>
      )}

      {/* Continuity note */}
      <Reveal>
        <div className="mt-14 border-t border-slate/20 pt-8">
          <p className="kicker text-slate">Continuity</p>
          <p className="prose-measure mt-3 leading-relaxed text-ink/80">
            {vc.continuity}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
