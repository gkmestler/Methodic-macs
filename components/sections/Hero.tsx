"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { brand, siteConfig } from "@/content/site-data";

// Section 1. Full Ink. White icon, "Methodic Ventures" in Playfair beneath,
// tagline in Playfair Italic Deep Blue, one line of positioning, a scroll cue.
export default function Hero() {
  const reduce = useReducedMotion();

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const, delay },
        };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center text-paper"
    >
      <div className="flex flex-col items-center">
        <motion.div {...fade(0.05)}>
          <Image
            src={siteConfig.logos.iconWhite}
            alt="Methodic Ventures"
            width={96}
            height={96}
            priority
            className="h-20 w-auto sm:h-24"
          />
        </motion.div>

        <motion.h1
          {...fade(0.15)}
          className="mt-8 font-display text-4xl font-semibold tracking-tight sm:text-6xl"
        >
          Methodic Ventures
        </motion.h1>

        <motion.p
          {...fade(0.28)}
          className="mt-5 font-display text-xl italic text-deepblue sm:text-2xl"
        >
          {brand.tagline}
        </motion.p>
      </div>

      {/* Quiet scroll cue (decorative, non-interactive) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.span
          className="block"
          {...(reduce
            ? {}
            : {
                animate: { y: [0, 6, 0] },
                transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
              })}
        >
          <svg
            width="20"
            height="28"
            viewBox="0 0 20 28"
            fill="none"
            className="text-paper/50"
            aria-hidden="true"
          >
            <path
              d="M10 1v24M2 18l8 8 8-8"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </div>
    </section>
  );
}
