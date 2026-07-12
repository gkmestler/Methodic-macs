"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site-data";

// Thin fixed top bar: white icon on the left, single Invest anchor on the right.
// Stays subtle: transparent over the Ink hero, faint Ink backing once scrolled.
export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-content items-center justify-between px-6 sm:px-10">
        <a href="#hero" aria-label="Methodic Ventures, back to top" className="flex items-center">
          <Image
            src={siteConfig.logos.iconWhite}
            alt="Methodic Ventures"
            width={28}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </a>
        <a
          href="#ask"
          className="kicker text-paper/80 transition-colors hover:text-paper"
        >
          Invest
        </a>
      </div>
    </header>
  );
}
