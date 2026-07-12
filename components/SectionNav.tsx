"use client";

import { useEffect, useState } from "react";
import { sections } from "@/content/site-data";

// Minimal right-side dot nav on desktop only. Tracks the active section.
export default function SectionNav() {
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex"
    >
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-label={s.label}
            aria-current={isActive ? "true" : undefined}
            className="group flex items-center gap-2"
          >
            <span
              className={`kicker whitespace-nowrap text-slate opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${
                isActive ? "opacity-100" : ""
              }`}
            >
              {s.label}
            </span>
            <span
              className={`block h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
                isActive ? "bg-deepblue" : "bg-slate/40 group-hover:bg-slate"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
