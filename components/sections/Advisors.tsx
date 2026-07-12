import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Figure from "@/components/Figure";
import { methodic, advisorsSection } from "@/content/site-data";

// Section. Advisory Board. Track-record stat band + advisor cards. Dark (Ink).
export default function Advisors() {
  return (
    <Section id="advisors" tone="ink">
      <Reveal>
        <h2 className="font-display text-5xl font-semibold leading-tight text-paper sm:text-7xl">
          {advisorsSection.title}
        </h2>
      </Reveal>

      {/* Advisory board track record */}
      <div className="mt-14 grid gap-px overflow-hidden border border-paper/15 bg-paper/15 sm:grid-cols-2 lg:grid-cols-4">
        {methodic.advisorStats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.05} className="bg-ink">
            <div className="flex h-full flex-col items-center justify-center gap-3 px-6 py-10 text-center">
              <p className="font-display text-4xl font-semibold text-paper sm:text-5xl">
                {stat.figure}
              </p>
              <p className="text-sm text-paper/60">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Advisor cards */}
      <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {methodic.advisors.map((a, i) => (
          <Reveal key={a.name} delay={(i % 3) * 0.05}>
            <div className="flex gap-4">
              <Figure
                src={a.photo}
                alt={a.name}
                fallbackLabel={a.name}
                fallbackTone="ink"
                rounded
                className="h-14 w-14 shrink-0"
                sizes="56px"
              />
              <div>
                <p className="font-display text-base font-semibold leading-tight text-paper">
                  {a.name}
                </p>
                <p className="text-xs text-deepblue">{a.role}</p>
                <p className="mt-1 text-sm leading-relaxed text-paper/65">
                  {a.bio}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
