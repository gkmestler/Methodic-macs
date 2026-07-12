"use client";

import { motion, useReducedMotion } from "framer-motion";
import { empire } from "@/content/site-data";

// Visual anchor for the Empire section: holdco -> shared-services spine ->
// acquisition nodes. Built for the Ink background (Paper text, Deep Blue accent).
// Desktop renders a horizontal tree; below md it stacks vertically.
export default function EmpireDiagram() {
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
  const growX = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { scaleX: 0 },
          whileInView: { scaleX: 1 },
          viewport: view,
          transition: { duration: 0.5, ease, delay },
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

  const { nodes, sharedServices } = empire;
  const nodeBase = 0.5; // nodes start fading after connectors draw

  return (
    <div className="mt-12">
      {/* ================= Desktop: horizontal tree ================= */}
      <div className="hidden md:block">
        {/* Holdco */}
        <div className="flex justify-center">
          <motion.div
            {...fadeUp(0)}
            className="w-64 rounded-md border border-paper/30 px-6 py-4 text-center"
          >
            <p className="font-display text-xl font-semibold text-paper">
              {empire.platformName}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate">
              {empire.platformCaption}
            </p>
          </motion.div>
        </div>

        {/* Holdco -> spine connector */}
        <div className="flex justify-center">
          <motion.div
            {...growY(0.1)}
            className="h-10 w-px origin-top bg-paper/40"
          />
        </div>

        {/* Shared-services spine */}
        <div className="relative overflow-hidden rounded-sm">
          <motion.div
            {...growX(0.15)}
            className="absolute inset-0 origin-left bg-deepblue"
            aria-hidden="true"
          />
          <div className="relative px-6 py-4 text-center">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-paper/90">
              {empire.sharedServicesLabel}
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              {sharedServices.map((s, i) => (
                <span key={s} className="flex items-center gap-x-3">
                  <span className="text-sm text-paper">{s}</span>
                  {i < sharedServices.length - 1 && (
                    <span className="text-paper/50" aria-hidden="true">
                      &middot;
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Spine -> nodes connectors + node row */}
        <div className="flex items-stretch">
          <div className="flex-1">
            {/* Connectors */}
            <div className="flex gap-4">
              {nodes.map((n, i) => (
                <div key={n.label} className="flex flex-1 justify-center">
                  <motion.div
                    {...growY(0.35 + i * 0.05)}
                    className={`h-12 w-px origin-top ${
                      n.status === "owned" ? "bg-deepblue" : "bg-slate/50"
                    }`}
                  />
                </div>
              ))}
              <div className="w-10" aria-hidden="true" />
            </div>

            {/* Nodes */}
            <div className="flex gap-4">
              {nodes.map((n, i) => (
                <motion.div
                  key={n.label}
                  {...fadeUp(nodeBase + i * 0.08)}
                  className="flex-1"
                >
                  <NodeCard node={n} />
                </motion.div>
              ))}
              <div className="flex w-10 items-center justify-start text-xl text-slate">
                <span aria-hidden="true">&middot;&middot;&middot;</span>
                <span className="sr-only">and more acquisitions to come</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Mobile: stacked ================= */}
      <div className="md:hidden">
        {/* Holdco */}
        <motion.div
          {...fadeUp(0)}
          className="mx-auto max-w-xs rounded-md border border-paper/30 px-6 py-4 text-center"
        >
          <p className="font-display text-lg font-semibold text-paper">
            {empire.platformName}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate">
            {empire.platformCaption}
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div {...growY(0.1)} className="h-6 w-px origin-top bg-paper/40" />
        </div>

        {/* Shared-services block */}
        <div className="relative overflow-hidden rounded-md">
          <motion.div
            {...growX(0.15)}
            className="absolute inset-0 origin-left bg-deepblue"
            aria-hidden="true"
          />
          <div className="relative px-5 py-4">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-paper/90">
              {empire.sharedServicesLabel}
            </p>
            <ul className="mt-3 flex flex-col gap-1.5">
              {sharedServices.map((s) => (
                <li key={s} className="text-sm text-paper">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <motion.div {...growY(0.25)} className="h-6 w-px origin-top bg-paper/40" />
        </div>

        {/* Nodes, vertical list */}
        <div className="flex flex-col items-stretch">
          {nodes.map((n, i) => (
            <div key={n.label}>
              {i > 0 && (
                <div className="flex justify-center">
                  <motion.div
                    {...growY(0.3 + i * 0.06)}
                    className={`h-5 w-px origin-top ${
                      n.status === "owned" ? "bg-deepblue" : "bg-slate/50"
                    }`}
                  />
                </div>
              )}
              <motion.div {...fadeUp(nodeBase + i * 0.08)}>
                <NodeCard node={n} />
              </motion.div>
            </div>
          ))}
          <p className="mt-4 text-center text-xl text-slate" aria-hidden="true">
            &middot;&middot;&middot;
          </p>
        </div>
      </div>

      {/* Outcome line */}
      <motion.p
        {...fadeUp(0.2)}
        className="mt-12 max-w-3xl text-sm leading-relaxed text-slate"
      >
        {empire.diagramOutcome}
      </motion.p>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-[2px] border border-deepblue bg-deepblue/20" aria-hidden="true" />
          {empire.diagramLegend.owned}
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-[2px] border border-dashed border-slate/60" aria-hidden="true" />
          {empire.diagramLegend.dashed}
        </span>
      </div>
    </div>
  );
}

function NodeCard({
  node,
}: {
  node: { label: string; tag: string; status: "owned" | "future" };
}) {
  const owned = node.status === "owned";
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
        {node.label}
      </p>
      <p
        className={`mt-1.5 text-[0.7rem] uppercase tracking-[0.12em] ${
          owned ? "text-deepblue" : "text-slate"
        }`}
      >
        {node.tag}
      </p>
    </div>
  );
}
