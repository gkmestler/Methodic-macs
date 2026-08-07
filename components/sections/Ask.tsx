"use client";

import { Kicker } from "@/components/Section";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { ask } from "@/content/site-data";
import { usdShort } from "@/lib/format";

// Section 9. The Ask. The raise, skin in the game, ROFR reprise, single CTA.
export default function Ask() {

  return (
    <section id="ask" className="bg-ink text-paper">
      <div className="mx-auto w-full max-w-content px-6 py-24 sm:px-10 md:py-32">
        <Reveal>
          <Kicker>{ask.kicker}</Kicker>
        </Reveal>

        {/* The raise */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <div className="border-t-2 border-deepblue pt-5">
              <CountUp
                value={ask.total}
                format="usd"
                className="font-display text-5xl font-semibold sm:text-6xl"
              />
              <p className="mt-3 text-sm text-paper/70">Total raise</p>
            </div>
          </Reveal>
          {ask.breakdown.map((b, i) => (
            <Reveal key={b.label} delay={(i + 1) * 0.06}>
              <div className="border-t border-paper/15 pt-5">
                <p className="font-display text-4xl font-semibold sm:text-5xl">
                  {usdShort(b.value)}
                </p>
                <p className="mt-3 text-sm text-paper/70">{b.label}</p>
                {"note" in b && (
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/50">
                    {b.note}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* The terms: pref + profit split as a stat band */}
        <Reveal>
          <div className="mt-20">
            <p className="kicker text-deepblue">{ask.terms.kicker}</p>
            <div className="mt-8 grid gap-10 md:grid-cols-2">
              {ask.terms.items.map((item) => (
                <div
                  key={item.label}
                  className="border-t-2 border-deepblue pt-5"
                >
                  <p className="font-display text-5xl font-semibold sm:text-6xl">
                    {item.figure}
                  </p>
                  <p className="mt-3 kicker text-paper/70">{item.label}</p>
                  <p className="mt-3 max-w-md leading-relaxed text-paper/70">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-paper/45">{ask.terms.footnote}</p>
          </div>
        </Reveal>

        {/* The return at different free-cash-flow levels */}
        <Reveal>
          <div className="mt-20">
            <p className="kicker text-deepblue">{ask.returns.kicker}</p>
            <p className="mt-4 max-w-2xl leading-relaxed text-paper/75">
              {ask.returns.intro}
            </p>
            <div className="mt-8 border-y border-paper/15">
              <div className="hidden grid-cols-3 gap-6 py-3 sm:grid">
                {ask.returns.columns.map((c) => (
                  <p key={c} className="kicker text-paper/50">
                    {c}
                  </p>
                ))}
              </div>
              <div className="divide-y divide-paper/10">
                {ask.returns.rows.map((r) => (
                  <div
                    key={r.fcf}
                    className="grid grid-cols-3 items-center gap-6 py-5"
                  >
                    <p className="font-display text-2xl font-semibold sm:text-3xl">
                      {r.fcf}
                    </p>
                    <p className="font-display text-2xl text-paper/80 sm:text-3xl">
                      {r.investor}
                    </p>
                    <p className="font-display text-2xl font-semibold sm:text-3xl">
                      {r.pct}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-6 max-w-2xl text-sm text-paper/45">
              {ask.returns.footnote}
            </p>
          </div>
        </Reveal>

        {/* ROFR reprise */}
        <Reveal>
          <p className="mx-auto mt-20 max-w-2xl text-center font-display text-2xl italic leading-snug text-deepblue sm:text-3xl">
            {ask.rofrReprise}
          </p>
        </Reveal>

      </div>
    </section>
  );
}
