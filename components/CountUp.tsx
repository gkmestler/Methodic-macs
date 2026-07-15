"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { usdShort, usdBillions } from "@/lib/format";

// Format is a string key rather than a function so this client component can be
// used from Server Components (functions cannot cross that boundary).
type FormatKind = "usd" | "usdB" | "int" | "percent";

const formatters: Record<FormatKind, (n: number) => string> = {
  usd: (n) => usdShort(n),
  usdB: (n) => usdBillions(n),
  int: (n) => Math.round(n).toLocaleString("en-US"),
  percent: (n) => `${Math.round(n)}%`,
};

type CountUpProps = {
  value: number;
  format?: FormatKind;
  durationMs?: number;
  className?: string;
};

// Counts up once when scrolled into view. With reduced motion, shows the
// final value immediately. This is the only "number" motion on the site.
export default function CountUp({
  value,
  format = "int",
  durationMs = 1100,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);
  const fmt = formatters[format];

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    let start: number | null = null;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value, durationMs]);

  return (
    <span ref={ref} className={className}>
      {fmt(display)}
    </span>
  );
}
