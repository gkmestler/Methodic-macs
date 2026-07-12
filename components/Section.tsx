import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  tone?: "ink" | "paper" | "offwhite";
  children: ReactNode;
  className?: string;
};

const toneMap: Record<NonNullable<SectionProps["tone"]>, string> = {
  ink: "bg-ink text-paper",
  paper: "bg-paper text-ink",
  offwhite: "bg-offwhite text-ink",
};

// Full-width section band with generous, editorial vertical rhythm.
export default function Section({
  id,
  tone = "paper",
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full px-6 py-24 sm:px-10 md:py-32 ${toneMap[tone]} ${className}`}
    >
      <div className="mx-auto w-full max-w-content">{children}</div>
    </section>
  );
}

type KickerProps = { children: ReactNode; className?: string };

export function Kicker({ children, className = "" }: KickerProps) {
  return (
    <p className={`kicker text-deepblue ${className}`}>
      {children}
    </p>
  );
}
