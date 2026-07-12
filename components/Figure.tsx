"use client";

import Image from "next/image";
import { useState } from "react";

type FigureProps = {
  src?: string;
  alt: string;
  // Shown when no photo exists or the image fails to load.
  fallbackLabel: string;
  // "ink" or "offwhite" backing for the typographic fallback panel.
  fallbackTone?: "ink" | "offwhite";
  className?: string;
  rounded?: boolean;
  sizes?: string;
  priority?: boolean;
  // Per-photo framing. objectPosition pans the crop (CSS object-position,
  // e.g. "50% 20%"), scale zooms in (e.g. 1.2), offsetY shifts the image
  // vertically beyond what object-position allows (e.g. "20%" moves it down).
  objectPosition?: string;
  scale?: number;
  offsetY?: string;
};

function monogram(label: string) {
  return label
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// Renders a photo when the file exists, and a captioned typographic panel
// when it is missing or fails. No broken images, no grey boxes, ever.
export default function Figure({
  src,
  alt,
  fallbackLabel,
  fallbackTone = "offwhite",
  className = "",
  rounded = false,
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
  objectPosition = "50% 50%",
  scale = 1,
  offsetY,
}: FigureProps) {
  const [failed, setFailed] = useState(false);
  const showFallback = !src || failed;

  const radius = rounded ? "rounded-full" : "rounded-none";

  if (showFallback) {
    const ink = fallbackTone === "ink";
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden ${radius} ${
          ink ? "bg-ink text-paper" : "bg-offwhite text-ink"
        } ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="flex flex-col items-center gap-2 px-4 text-center">
          <span className="font-display text-3xl leading-none text-deepblue">
            {monogram(fallbackLabel)}
          </span>
          <span className="kicker text-slate">{fallbackLabel}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${radius} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={{
          objectPosition,
          transform:
            [offsetY ? `translateY(${offsetY})` : "", scale !== 1 ? `scale(${scale})` : ""]
              .filter(Boolean)
              .join(" ") || undefined,
        }}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
