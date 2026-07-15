import Section, { Kicker } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { methodic } from "@/content/site-data";

// Section 3. The Market, in two beats. Beat one (ink): the TAM / SAM / SOM
// story as strictly nested circles, from the whole U.S. down to New England, to
// Massachusetts, to our obtainable target. Beat two (paper): the fragmentation
// payoff. A market this size, owned by no one, is why a roll-up works. The two
// are deliberately non-overlapping: the circles carry the sizes, the second
// slide never restates them and pivots straight to fragmentation.
export default function Market() {
  const { market } = methodic;
  const { marketSize } = market;
  const [before, after] = market.title.split(market.titleAccent);

  return (
    <>
      {/* Beat one. Market size, on Ink: TAM / SAM / MASS / SOM as strictly
          nested circles. The diagram carries the hierarchy; the legend carries
          the numbers, in the same top-to-bottom order as the rings. */}
      <Section id="market" tone="ink">
        <Reveal>
          <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
            {marketSize.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal className="order-1">
            <MarketCircles rings={marketSize.rings} />
          </Reveal>

          {/* Legend, in nesting order: TAM, SAM, Massachusetts, SOM. */}
          <div className="order-2 flex flex-col gap-7">
            {marketSize.rings.map((ring, i) => (
              <Reveal key={ring.tag} delay={i * 0.06}>
                <LegendRow
                  fill={RING_GEO[i].fill}
                  ring={"highlight" in ring && ring.highlight}
                  eyebrow={ring.eyebrow}
                  figure={ring.figure}
                  body={ring.body}
                />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-14 max-w-3xl text-xs leading-relaxed text-paper/40">
            {marketSize.source}
          </p>
        </Reveal>
      </Section>

      {/* Beat two. Fragmentation, on Paper: the reason a roll-up works. Picks up
          from the size circles ("For all its scale…") rather than repeating them. */}
      <Section id="market-fragmentation" tone="paper">
        <Reveal>
          <Kicker>{market.kicker}</Kicker>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-4xl font-display text-3xl font-semibold leading-tight sm:text-5xl">
            {before}
            <span className="text-deepblue">{market.titleAccent}</span>
            {after}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink/70">
            {market.intro}
          </p>
        </Reveal>

        {/* The fragmentation argument, the reason a roll-up works here. */}
        <div className="mt-14 grid items-center gap-8 border-t border-slate/20 pt-12 md:grid-cols-[auto_1fr] md:gap-14">
          <Reveal>
            <div className="text-center md:text-left">
              <p className="font-display text-6xl font-semibold leading-none text-deepblue sm:text-7xl">
                {market.fragmentation.stat}
              </p>
              <p className="mt-3 max-w-[14rem] text-sm leading-relaxed text-slate">
                {market.fragmentation.statLabel}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-2xl text-lg leading-relaxed text-ink/80">
              {market.fragmentation.body}
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

// Geometry + palette per ring, largest to smallest. All circles share the
// bottom tangent at y = 440 and the vertical axis at x = 230, so each smaller
// circle sits perfectly inside the one before it. Fills step ice -> deep blue.
const CX = 230;
const RING_GEO = [
  { r: 205, cy: 235, fill: "#C5DCF0", text: "#0A0A0A", tagY: 60, figY: 90, tagSize: 15, figSize: 28 },
  { r: 140, cy: 300, fill: "#9CC0DE", text: "#0A0A0A", tagY: 186, figY: 214, tagSize: 14, figSize: 24 },
  { r: 99, cy: 341, fill: "#5E8CB8", text: "#FFFFFF", tagY: 270, figY: 298, tagSize: 13, figSize: 21 },
  { r: 48, cy: 392, fill: "#4A7FA8", text: "#FFFFFF", tagY: 380, figY: 405, tagSize: 12, figSize: 17 },
] as const;

function LegendRow({
  fill,
  ring,
  eyebrow,
  figure,
  body,
}: {
  fill: string;
  ring: boolean;
  eyebrow: string;
  figure: string;
  body: string;
}) {
  return (
    <div className="flex gap-4">
      <span
        className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${ring ? "ring-2 ring-paper/70" : ""}`}
        style={{ backgroundColor: fill }}
        aria-hidden="true"
      />
      <div>
        <p className="kicker text-slate">{eyebrow}</p>
        <p
          className={`mt-1 font-display text-2xl font-semibold sm:text-3xl ${
            ring ? "text-skyblue" : "text-paper"
          }`}
        >
          {figure}
        </p>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-paper/60">
          {body}
        </p>
      </div>
    </div>
  );
}

type Ring = (typeof methodic)["market"]["marketSize"]["rings"][number];

// Strictly nested TAM > SAM > Massachusetts > SOM. Radii are illustrative, not
// to scale. A $40M SOM against a $189B TAM cannot be drawn proportionally, so
// the hierarchy is shown by nesting and the true figures live in the legend.
// Massachusetts carries a white ring to mark it as the beachhead.
function MarketCircles({ rings }: { rings: readonly Ring[] }) {
  const label = rings
    .map((r) => `${r.eyebrow} ${r.figure}`)
    .join("; ");

  return (
    <svg
      viewBox="0 0 460 470"
      className="mx-auto w-full max-w-[32rem]"
      role="img"
      aria-label={`Market size, nested largest to smallest: ${label}.`}
    >
      {RING_GEO.map((g, i) => (
        <circle
          key={i}
          cx={CX}
          cy={g.cy}
          r={g.r}
          fill={g.fill}
          stroke={"highlight" in rings[i] && rings[i].highlight ? "#FFFFFF" : "none"}
          strokeWidth={2.5}
        />
      ))}

      {RING_GEO.map((g, i) => (
        <g key={`label-${i}`}>
          <text
            x={CX}
            y={g.tagY}
            textAnchor="middle"
            className="font-display"
            fontSize={g.tagSize}
            fontWeight="600"
            letterSpacing="1.5"
            fill={g.text}
            opacity="0.8"
          >
            {rings[i].tag}
          </text>
          <text
            x={CX}
            y={g.figY}
            textAnchor="middle"
            className="font-display"
            fontSize={g.figSize}
            fontWeight="700"
            fill={g.text}
          >
            {rings[i].figure}
          </text>
        </g>
      ))}
    </svg>
  );
}
