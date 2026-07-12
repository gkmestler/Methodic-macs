import Image from "next/image";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Figure from "@/components/Figure";
import { methodic, team } from "@/content/site-data";

// Section 2. The Team. Real portraits, matched by name. Dark (Ink) background.
export default function Team() {
  return (
    <Section id="team" tone="ink">
      <Reveal>
        <h2 className="max-w-3xl font-display text-5xl font-semibold leading-tight text-white sm:text-7xl">
          {team.title}
        </h2>
      </Reveal>

      {/* Group photo of the managing partners */}
      <Reveal delay={0.05}>
        <figure className="mt-14">
          <Figure
            src={team.groupPhoto}
            alt={team.groupPhotoAlt}
            fallbackLabel="Methodic Ventures"
            fallbackTone="ink"
            className="aspect-[4/3] w-full grayscale sm:aspect-[16/9]"
            objectPosition="50% 22%"
            sizes="(max-width: 1088px) 100vw, 1088px"
          />
        </figure>
      </Reveal>

      {/* Managing partners */}
      <div className="mt-16">
        <Reveal>
          <h3 className="font-display text-2xl font-semibold text-paper sm:text-4xl">
            Managing Partners
          </h3>
        </Reveal>
        <div className="mt-6 grid gap-10 sm:grid-cols-3">
          {methodic.partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <PersonCard {...p} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-paper/80">
            {team.partnersDescription}
          </p>
        </Reveal>

        {/* Backed by eTower */}
        <Reveal delay={0.14}>
          <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-7 border-t border-paper/15 pt-12 text-center">
            <p className="max-w-2xl leading-relaxed text-paper/80">
              {team.eTowerNote}
            </p>
            <Image
              src={team.eTowerLogo}
              alt={team.eTowerLogoAlt}
              width={2262}
              height={1128}
              sizes="(max-width: 640px) 176px, 208px"
              className="h-auto w-44 sm:w-52"
            />
          </div>
        </Reveal>
      </div>

    </Section>
  );
}

function PersonCard({
  name,
  role,
  photo,
  bio,
  imgPosition,
  imgScale,
  imgOffsetY,
}: {
  name: string;
  role: string;
  photo?: string;
  bio?: string;
  imgPosition?: string;
  imgScale?: number;
  imgOffsetY?: string;
}) {
  return (
    <div>
      <Figure
        src={photo}
        alt={name}
        fallbackLabel={name}
        fallbackTone="ink"
        className="aspect-square w-full"
        sizes="(max-width: 640px) 100vw, 30vw"
        objectPosition={imgPosition}
        scale={imgScale}
        offsetY={imgOffsetY}
      />
      <h3 className="mt-4 font-display text-xl font-semibold text-paper">
        {name}
      </h3>
      <p className="mt-1 text-sm text-deepblue">{role}</p>
      {bio && (
        <p className="mt-2 text-sm leading-relaxed text-paper/70">{bio}</p>
      )}
    </div>
  );
}
