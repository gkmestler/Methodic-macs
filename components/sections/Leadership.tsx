import Section, { Kicker } from "@/components/Section";
import Reveal from "@/components/Reveal";
import Figure from "@/components/Figure";
import { leadership } from "@/content/site-data";

// Tiffany (CEO), then Shah (CTO). Each gets their own full section on Ink,
// portrait on one side and their role + description on the other. The portrait
// side alternates for rhythm.
export default function Leadership() {
  return (
    <>
      {leadership.map((person, i) => (
        <Leader key={person.id} person={person} flip={i % 2 === 1} />
      ))}
    </>
  );
}

type Person = (typeof leadership)[number];

function Leader({ person, flip }: { person: Person; flip: boolean }) {
  return (
    <Section id={person.id} tone="ink">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Portrait */}
        <Reveal className={flip ? "md:order-2" : ""}>
          <Figure
            src={person.photo}
            alt={person.name}
            fallbackLabel={person.name}
            fallbackTone="ink"
            className="aspect-[4/5] w-full"
            objectPosition={person.imgPosition}
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </Reveal>

        {/* Copy */}
        <div className={flip ? "md:order-1" : ""}>
          <Reveal>
            <Kicker>{person.role}</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-paper sm:text-6xl">
              {person.name}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-2 text-sm text-slate">{person.org}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 font-display text-2xl italic leading-snug text-deepblue sm:text-3xl">
              {person.tagline}
            </p>
          </Reveal>

          <div className="mt-6 space-y-4">
            {person.bio.map((para, j) => (
              <Reveal key={j} delay={0.14 + j * 0.05}>
                <p className="max-w-xl leading-relaxed text-paper/80">{para}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
