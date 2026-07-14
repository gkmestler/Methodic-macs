import Image from "next/image";
import Reveal from "@/components/Reveal";
import Figure from "@/components/Figure";
import CountUp from "@/components/CountUp";
import { macs } from "@/content/site-data";
import { usdShort } from "@/lib/format";

// Section 9. Mac's Landscaping, Deal One. The proof the machine produces deals.
export default function Macs() {
  const { financials } = macs;

  return (
    <section id="macs" className="bg-paper text-ink">
      {/* Block 1. Full-bleed darkened truck opener. Deal One, made to land big. */}
      <div className="relative flex min-h-screen items-end overflow-hidden">
        <Image
          src={macs.photos.opener}
          alt="A Mac's Landscaping truck on the job"
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Solid darkening panel keeps overlaid text legible */}
        <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-20 sm:px-10 md:pb-28">
          <Reveal>
            <p className="font-display text-3xl font-semibold text-paper sm:text-5xl">
              {macs.kicker}
            </p>
          </Reveal>
          {/* Mac's own brand mark stands in for the headline */}
          <Reveal delay={0.06}>
            <h2 className="mt-8 -ml-4 sm:-ml-8">
              <Image
                src={macs.logo}
                alt={macs.name}
                width={1536}
                height={1024}
                sizes="(max-width: 640px) 288px, 544px"
                className="h-auto w-72 sm:w-[26rem] lg:w-[34rem]"
              />
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 font-display text-2xl italic text-paper/85 sm:text-3xl">
              {macs.openerSubline}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Block 2. Founder story + Gerry portrait as the human anchor */}
      <div className="mx-auto w-full max-w-content px-6 py-24 sm:px-10 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <Figure
              src={macs.sellerPhoto}
              alt={`${macs.sellerName}, founder of ${macs.name}`}
              fallbackLabel={macs.sellerName}
              className="aspect-[4/5] w-full"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="kicker text-slate">
                {macs.sellerName}, {macs.sellerRole}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h3 className="mt-4 font-display text-2xl font-semibold leading-snug sm:text-3xl">
                A 51-year institution, built and deliberately kept small.
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl leading-relaxed text-ink/80">
                {macs.founderStory}
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
                <Stat label="Founded" value={macs.founded} />
                <Stat label="Towns served" value={macs.townsServed} />
                <Stat
                  label="Maintenance accounts"
                  value={String(macs.recurringAccounts)}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Block 3. The moat, as tight bullets + the GM pull quote. Off-White */}
      <div className="bg-offwhite">
        <div className="mx-auto w-full max-w-content px-6 py-24 sm:px-10">
          <div className="grid gap-14 md:grid-cols-2 md:gap-16">
            <div>
              <Reveal>
                <p className="kicker text-slate">The reputation and the moat</p>
              </Reveal>
              <ul className="mt-6 space-y-4">
                {macs.moatBullets.map((b, i) => (
                  <Reveal key={b.lead} delay={i * 0.05} as="li">
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-deepblue"
                        aria-hidden="true"
                      />
                      <p className="leading-relaxed text-ink/80">
                        <span className="font-medium text-ink">{b.lead}</span>{" "}
                        {b.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>

            {/* Pull quote from the GM: the seller's own operator calls the upside */}
            <Reveal delay={0.08}>
              <figure className="md:self-center">
                <blockquote className="border-l-2 border-deepblue pl-6 font-display text-2xl italic leading-snug text-deepblue sm:text-3xl">
                  {macs.moatQuote.text}
                </blockquote>
                <figcaption className="mt-4 pl-6 kicker text-slate">
                  {macs.moatQuote.attribution}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Block 4. Financials: bars, then the stat row, then two callout notes. */}
      <div className="bg-ink text-paper">
        <div className="mx-auto w-full max-w-content px-6 py-24 sm:px-10 md:py-32">
          <Reveal>
            <p className="kicker text-deepblue">Recent financials</p>
          </Reveal>

          {/* Three-year revenue bars */}
          <Reveal delay={0.05}>
            <div className="grid gap-x-16 lg:grid-cols-2">
              <Bars title="Revenue by year" years={financials.revenueYears} />
              <Bars title="SDE by year" years={financials.sdeYears} />
            </div>
          </Reveal>

          {/* Stat row beneath the bars */}
          <div className="mt-16 grid gap-12 border-t border-paper/15 pt-12 md:grid-cols-3">
            <Reveal>
              <div>
                <CountUp
                  value={financials.revenueAvg}
                  format="usd"
                  className="font-display text-5xl font-semibold text-paper sm:text-6xl"
                />
                <p className="mt-3 text-sm text-paper/70">
                  {financials.revenueAvgLabel}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div>
                <p className="font-display text-5xl font-semibold text-paper sm:text-6xl">
                  ~{usdShort(financials.sdeEstimate)}
                </p>
                <p className="mt-3 text-sm text-paper/70">{financials.sdeLabel}</p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div>
                <p className="font-display text-5xl font-semibold text-paper sm:text-6xl">
                  ~{macs.recurringAccounts}
                </p>
                <p className="mt-3 text-sm text-paper/70">
                  {financials.recurringLabel}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Two small callout notes */}
          <div className="mt-14 grid gap-6 border-t border-paper/15 pt-8 md:grid-cols-2">
            {financials.notes.map((note, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="text-sm leading-relaxed text-paper/70">{note}</p>
              </Reveal>
            ))}
          </div>

          {/* Overhead stat: the operating-leverage setup */}
          <Reveal>
            <div className="mt-14 grid gap-6 border-t border-paper/15 pt-10 md:grid-cols-[auto_1fr] md:items-end md:gap-14">
              <div>
                <p className="font-display text-5xl font-semibold text-paper sm:text-6xl">
                  {financials.overhead.figure}
                </p>
                <p className="mt-3 kicker text-paper/70">
                  {financials.overhead.label}
                </p>
              </div>
              <p className="max-w-xl leading-relaxed text-paper/75 md:pb-1">
                {financials.overhead.body}
              </p>
            </div>
          </Reveal>

          {/* The peak, emphasized: proof of ceiling right after today's numbers */}
          <Reveal>
            <p className="mt-16 max-w-3xl font-display text-2xl leading-snug text-paper sm:text-3xl">
              {financials.peakLine}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Block 5. Closing truck photo, into the value plan. No bottom padding:
          the next section brings its own, and doubling up left dead space. */}
      <div className="mx-auto w-full max-w-content px-6 pb-0 pt-24 sm:px-10 md:pt-32">
        <Reveal>
          <Figure
            src={macs.photos.accent}
            alt="A Mac's Landscaping truck and equipment"
            fallbackLabel="Mac's fleet"
            className="aspect-[16/9] w-full"
            sizes="100vw"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-display text-2xl font-semibold text-ink">{value}</p>
      <p className="kicker mt-1 text-slate">{label}</p>
    </div>
  );
}

// Near-invisible typeset bar comparison. Hairline baseline only, no gridlines.
// YTD bars render lighter so a partial year never reads as a down year.
function Bars({
  title,
  years,
}: {
  title: string;
  years: readonly { year: number; value: number; ytd?: boolean }[];
}) {
  const max = Math.max(...years.map((y) => y.value));
  return (
    <div className="mt-12">
      <p className="kicker text-slate">{title}</p>
      <div className="mt-6 flex items-end gap-4 border-b border-paper/20 pb-0 sm:gap-8">
        {years.map((y) => {
          const pct = Math.round((y.value / max) * 100);
          return (
            <div key={y.year} className="flex flex-1 flex-col items-center">
              <span className="mb-2 text-sm text-paper/80">{usdShort(y.value)}</span>
              <div
                className={`w-full ${y.ytd ? "bg-deepblue/35" : "bg-deepblue/70"}`}
                style={{ height: `${Math.max(pct * 1.8, 24)}px` }}
              />
              <span className="mt-3 whitespace-nowrap text-sm text-paper/60">
                {y.year}
                {y.ytd ? " YTD" : ""}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
