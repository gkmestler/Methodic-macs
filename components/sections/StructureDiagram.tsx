"use client";

import { motion, useReducedMotion } from "framer-motion";
import { structure } from "@/content/site-data";

// Visual anchor for the Structure section: the ownership stack, top to bottom.
// Methodic Ventures (the firm) sits above HoldCo I: Methodic Landscaping (where
// investor capital goes), which owns the acquisitions below it. Built for the
// Ink background (Paper text, Deep Blue accent). Vertical on every breakpoint;
// the acquisitions row goes horizontal at md and stacks below it.
export default function StructureDiagram() {
  const reduce = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;
  const view = { once: true, margin: "-15% 0px" } as const;

  // Motion prop helpers. Return {} under reduced motion so elements render static.
  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          viewport: view,
          transition: { duration: 0.4, ease, delay },
        };
  const growY = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { scaleY: 0 },
          whileInView: { scaleY: 1 },
          viewport: view,
          transition: { duration: 0.35, ease, delay },
        };

  const { firm, holdco, assets } = structure;

  return (
    <div className="mt-14">
      {/* Tier 1. The firm. */}
      <div className="flex justify-center">
        <motion.div
          {...fadeUp(0)}
          className="w-72 rounded-md border border-paper/30 px-6 py-4 text-center"
        >
          <p className="font-display text-xl font-semibold text-paper">
            {firm.name}
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-slate">
            {firm.caption}
          </p>
        </motion.div>
      </div>

      {/* Firm -> holdco connector */}
      <div className="flex justify-center">
        <motion.div {...growY(0.1)} className="h-10 w-px origin-top bg-paper/40" />
      </div>

      {/* Tier 2. The holdco, emphasized, with capital flowing in. */}
      <div className="relative flex justify-center">
        {/* Capital-in annotation. Desktop: enters from the left. */}
        <motion.div
          {...fadeUp(0.2)}
          className="absolute left-0 top-1/2 hidden -translate-y-1/2 items-center gap-2 md:flex"
        >
          <span className="kicker text-deepblue">{holdco.capitalLabel}</span>
          <Arrow />
        </motion.div>

        <motion.div
          {...fadeUp(0.15)}
          className="w-full max-w-md rounded-md border border-deepblue bg-deepblue/20 px-6 py-5 text-center"
        >
          <p className="font-display text-2xl font-semibold text-paper">
            {holdco.name}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-paper/75">
            {holdco.caption}
          </p>
        </motion.div>
      </div>

      {/* Capital-in annotation. Mobile: sits above the holdco. */}
      <motion.p
        {...fadeUp(0.2)}
        className="mt-4 text-center kicker text-deepblue md:hidden"
      >
        {holdco.capitalLabel} in
      </motion.p>

      {/* Holdco -> assets connector */}
      <div className="flex justify-center">
        <motion.div {...growY(0.25)} className="h-10 w-px origin-top bg-paper/40" />
      </div>

      {/* Tier 3. The acquisitions the holdco owns. */}
      <div className="flex flex-col items-stretch gap-4 md:flex-row md:justify-center">
        {assets.map((a, i) => (
          <motion.div key={a.label} {...fadeUp(0.35 + i * 0.08)} className="md:w-64">
            <AssetCard asset={a} />
          </motion.div>
        ))}
        {/* More to come */}
        <div className="flex items-center justify-center text-xl text-slate md:w-10">
          <span aria-hidden="true">&middot;&middot;&middot;</span>
          <span className="sr-only">and more acquisitions to come</span>
        </div>
      </div>
    </div>
  );
}

// Small right-pointing arrow for the capital-in flow, Deep Blue on Paper.
function Arrow() {
  return (
    <svg
      width="34"
      height="10"
      viewBox="0 0 34 10"
      fill="none"
      className="text-deepblue"
      aria-hidden="true"
    >
      <path
        d="M0 5h32M27 1l5 4-5 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AssetCard({
  asset,
}: {
  asset: { label: string; tag: string; status: "owned" | "future" };
}) {
  const owned = asset.status === "owned";
  return (
    <div
      className={`h-full rounded-md px-4 py-4 text-center ${
        owned
          ? "border border-deepblue bg-deepblue/15"
          : "border border-dashed border-slate/50 opacity-70"
      }`}
    >
      <p
        className={`text-sm font-medium ${owned ? "text-paper" : "text-paper/70"}`}
      >
        {asset.label}
      </p>
      <p
        className={`mt-1.5 text-[0.7rem] uppercase tracking-[0.12em] ${
          owned ? "text-deepblue" : "text-slate"
        }`}
      >
        {asset.tag}
      </p>
    </div>
  );
}
