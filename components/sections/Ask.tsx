"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Kicker } from "@/components/Section";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { ask } from "@/content/site-data";
import { usdShort } from "@/lib/format";

// Section 9. The Ask. The raise, skin in the game, ROFR reprise, single CTA.
export default function Ask() {
  const reduce = useReducedMotion();

  return (
    <section id="ask" className="bg-ink text-paper">
      <div className="mx-auto w-full max-w-content px-6 py-24 sm:px-10 md:py-32">
        <Reveal>
          <Kicker>{ask.kicker}</Kicker>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-paper sm:text-6xl">
            {ask.title}
          </h2>
        </Reveal>

        {/* The raise */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
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

        {/* Skin in the game, emphasized beat with animated progress */}
        <Reveal>
          <div className="mt-20 border border-paper/15 p-8 sm:p-12">
            <p className="kicker text-deepblue">Skin in the game</p>
            <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-display text-4xl font-semibold sm:text-5xl">
                  <CountUp value={ask.founderCommitment} format="usd" />{" "}
                  <span className="text-paper/50">of</span>{" "}
                  {usdShort(ask.total)}
                </p>
                <p className="mt-3 max-w-md leading-relaxed text-paper/75">
                  {ask.skinInTheGame}
                </p>
              </div>
              <p className="font-display text-5xl font-semibold text-deepblue sm:text-6xl">
                <CountUp value={ask.committedPct} format="percent" />
              </p>
            </div>

            {/* Progress bar fills to committed percentage on view */}
            <div className="mt-8">
              <div className="h-2 w-full overflow-hidden bg-paper/10">
                <motion.div
                  className="h-full bg-deepblue"
                  initial={reduce ? false : { width: 0 }}
                  whileInView={{ width: `${ask.committedPct}%` }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  style={reduce ? { width: `${ask.committedPct}%` } : undefined}
                />
              </div>
              <p className="mt-3 kicker text-slate">Founders first</p>
            </div>
          </div>
        </Reveal>

        {/* ROFR reprise */}
        <Reveal>
          <p className="mx-auto mt-20 max-w-2xl text-center font-display text-2xl italic leading-snug text-deepblue sm:text-3xl">
            {ask.rofrReprise}
          </p>
        </Reveal>

        {/* Single call to action */}
        <Reveal>
          <div className="mt-16 flex flex-col items-center text-center">
            <h3 className="font-display text-3xl font-semibold sm:text-4xl">
              {ask.ctaHeading}
            </h3>
            <p className="mt-4 max-w-md leading-relaxed text-paper/75">
              {ask.ctaBody}
            </p>
            <a
              href={
                ask.contact.includes("@")
                  ? `mailto:${ask.contact}`
                  : "#ask"
              }
              className="kicker mt-8 border border-paper/40 px-8 py-3 text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
            >
              Express Interest
            </a>
            <p className="mt-4 text-sm text-slate">{ask.contact}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
