import Section, { Kicker } from "@/components/Section";
import Reveal from "@/components/Reveal";
import StructureDiagram from "@/components/sections/StructureDiagram";
import { structure } from "@/content/site-data";

// Section 5. The Structure. What investors actually own: a stake in HoldCo I,
// Methodic Landscaping, the holding company that owns every acquisition. Ink, so
// it stands out from the sections around it.
export default function Structure() {
  const [before, after] = structure.title.split(structure.titleAccent);
  return (
    <Section id="structure" tone="ink">
      <Reveal>
        <Kicker>{structure.kicker}</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-4xl font-display text-3xl font-semibold leading-tight sm:text-5xl">
          {before}
          <span className="text-deepblue">{structure.titleAccent}</span>
          {after}
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="prose-measure mt-6 leading-relaxed text-paper/75">
          {structure.lead}
        </p>
      </Reveal>

      {/* Ownership stack: firm -> holdco (capital in) -> acquisitions */}
      <StructureDiagram />

      {/* Why owning the holdco early wins, as three labeled blocks */}
      <div className="mt-16 grid gap-px overflow-hidden border border-paper/15 bg-paper/15 md:grid-cols-3">
        {structure.points.map((point, i) => (
          <Reveal key={point.label} delay={i * 0.06} className="bg-ink">
            <div className="flex h-full flex-col gap-4 p-8">
              <p className="kicker text-deepblue">{point.label}</p>
              <p className="leading-relaxed text-paper/80">{point.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Closing line, typeset large */}
      <Reveal delay={0.1}>
        <p className="mx-auto mt-16 max-w-3xl text-center font-display text-2xl italic leading-snug text-deepblue sm:text-3xl">
          {structure.closing}
        </p>
      </Reveal>
    </Section>
  );
}
