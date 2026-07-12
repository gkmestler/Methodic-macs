import Section, { Kicker } from "@/components/Section";
import Reveal from "@/components/Reveal";
import EmpireDiagram from "@/components/sections/EmpireDiagram";
import { empire } from "@/content/site-data";

// Section 7. The Empire. Zoom out. Mac's is node one. Ink.
export default function Empire() {
  return (
    <Section id="empire" tone="ink">
      <Reveal>
        <Kicker>{empire.kicker}</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-paper sm:text-6xl">
          {empire.title}
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="prose-measure mt-6 leading-relaxed text-paper/75">
          {empire.intro}
        </p>
      </Reveal>

      {/* Platform diagram: holdco -> shared-services spine -> acquisition nodes */}
      <EmpireDiagram />

      {/* Steps as a numbered vertical progression with hairline connectors */}
      <ol className="mt-16 space-y-0">
        {empire.steps.map((step, i) => (
          <Reveal key={step.label} delay={i * 0.05} as="li">
            <div className="grid grid-cols-[auto_1fr] gap-6 border-t border-paper/15 py-7">
              <span className="font-display text-lg text-deepblue">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="md:grid md:grid-cols-[1fr_2.2fr] md:gap-10">
                <h3 className="font-display text-xl font-semibold text-paper">
                  {step.label}
                </h3>
                <p className="mt-2 leading-relaxed text-paper/75 md:mt-0">
                  {step.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>

      {/* Market proof, single figure typeset large */}
      <Reveal>
        <div className="mt-16 flex flex-col gap-6 border-t border-paper/15 pt-12 md:flex-row md:items-center md:gap-14">
          <p className="font-display text-6xl font-semibold text-paper sm:text-7xl">
            {empire.marketProofFigure}
          </p>
          <div className="max-w-md">
            <p className="text-sm uppercase tracking-wide text-slate">
              {empire.marketProofCaption}
            </p>
            <p className="mt-3 leading-relaxed text-paper/75">
              {empire.marketProof}
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
