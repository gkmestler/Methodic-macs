import Section, { Kicker } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { offer } from "@/content/site-data";

// The Offer. How we are buying Mac's, condensed for investors. Off-White.
// DRAFT: cash at close renders blank until the appraisal lands.
export default function Offer() {
  return (
    <Section id="offer" tone="offwhite">
      <Reveal>
        <Kicker>{offer.kicker}</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="prose-measure mt-6 leading-relaxed text-ink/80">
          {offer.intro}
        </p>
      </Reveal>

      {/* The three components of the offer */}
      <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
        {offer.items.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.06}>
            <div className="border-t-2 border-deepblue pt-5">
              <p className="font-display text-4xl font-semibold text-ink sm:text-5xl">
                {item.figure}
              </p>
              <p className="mt-3 kicker text-ink/60">{item.label}</p>
              <p className="mt-3 max-w-md leading-relaxed text-ink/70">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-12 text-sm text-slate">{offer.footnote}</p>
      </Reveal>
    </Section>
  );
}
