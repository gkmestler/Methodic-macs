import Section, { Kicker } from "@/components/Section";
import Reveal from "@/components/Reveal";
import Figure from "@/components/Figure";
import { leadership } from "@/content/site-data";

// Leadership near the top of the deck. Tiffany, the CEO of Methodic Landscaping,
// is rendered separately, lower in the deck alongside the operating story (see
// LeaderById in page.tsx), so this only shows the remaining leaders. Each gets a
// full section on Ink, portrait on one side and role + description on the other.
export default function Leadership() {
  const people = leadership.filter((p) => p.id !== "tiffany");
  return (
    <>
      {people.map((person, i) => (
        <Leader key={person.id} person={person} flip={i % 2 === 1} />
      ))}
    </>
  );
}

type Person = (typeof leadership)[number];

// Render a single leader by id anywhere in the deck. `compact` shrinks the
// portrait and type for a lighter-weight placement.
export function LeaderById({
  id,
  compact = false,
  flip = false,
}: {
  id: string;
  compact?: boolean;
  flip?: boolean;
}) {
  const person = leadership.find((p) => p.id === id);
  if (!person) return null;
  return <Leader person={person} flip={flip} compact={compact} />;
}

function Leader({
  person,
  flip,
  compact = false,
}: {
  person: Person;
  flip: boolean;
  compact?: boolean;
}) {
  return (
    <Section
      id={person.id}
      tone="ink"
      className={compact ? "!py-16 md:!py-20" : ""}
    >
      <div
        className={`grid items-center ${
          compact
            ? "gap-10 md:grid-cols-[0.8fr_1.4fr] md:gap-12"
            : "gap-12 md:grid-cols-2 md:gap-16"
        }`}
      >
        {/* Portrait */}
        <Reveal className={flip ? "md:order-2" : ""}>
          <div className={compact ? "mx-auto max-w-xs md:mx-0" : ""}>
            <Figure
              src={person.photo}
              alt={person.name}
              fallbackLabel={person.name}
              fallbackTone="ink"
              className="aspect-[4/5] w-full"
              objectPosition={person.imgPosition}
              sizes={
                compact
                  ? "(max-width: 768px) 80vw, 30vw"
                  : "(max-width: 768px) 100vw, 45vw"
              }
            />
          </div>
        </Reveal>

        {/* Copy */}
        <div className={flip ? "md:order-1" : ""}>
          <Reveal>
            <Kicker>{person.role}</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className={`mt-4 font-display font-semibold leading-tight text-paper ${
                compact ? "text-3xl sm:text-4xl" : "text-4xl sm:text-6xl"
              }`}
            >
              {person.name}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-2 text-sm text-slate">{person.org}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <p
              className={`mt-6 font-display italic leading-snug text-deepblue ${
                compact ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"
              }`}
            >
              {person.tagline}
            </p>
          </Reveal>

          <div className="mt-6 space-y-4">
            {person.bio.map((para, j) => (
              <Reveal key={j} delay={0.14 + j * 0.05}>
                <p
                  className={`max-w-xl leading-relaxed text-paper/80 ${
                    compact ? "text-sm" : ""
                  }`}
                >
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
