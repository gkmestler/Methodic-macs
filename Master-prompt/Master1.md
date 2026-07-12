# MASTER PROMPT: Methodic Ventures Investor Site (Mac's Landscaping, Deal One)

Paste this whole file into Claude Code (Cursor) as the build brief. Build the full site in one pass, then we iterate. Assets already live in the project folder (see Section 4). All copy and every number live in one editable data file (Section 7) so nothing important is buried in components.

---

## 0. WHAT YOU ARE BUILDING

A single-page, scroll-based investor presentation for Methodic Ventures, delivered as a Vercel-hosted web app. It sells two things at once: Methodic as an acquisition group, and its first deal, Mac's Landscaping. The tone is a beautifully typeset investment memo you scroll through, not a startup pitch deck. Restraint is the pitch. The look has to feel disciplined, patient, and expensive in its simplicity, because that is the investment thesis made visual.

Audience: friends and family plus high net worth individuals. Same site for both.

Hard rules that never break: no em-dashes anywhere in any copy. No buzzwords or corporate filler. No gradients, glows, drop shadows, or neon. Single-color logo only, never recolored.

---

## 1. TECH AND DEPLOYMENT

- Next.js (App Router) + TypeScript.
- Tailwind CSS for styling, with the brand tokens wired into `tailwind.config` and CSS variables.
- Framer Motion for scroll-triggered reveals and number count-ups. Keep all motion subtle and fast (fades and short slides, 300 to 500ms, ease-out). No bouncing, no parallax gimmicks.
- Zero-config Vercel deploy. `npm run build` must pass clean.
- Fully responsive. Investors will open this on phones. Every section has to read well at 375px wide.
- Semantic HTML, real alt text, keyboard-navigable. Respect `prefers-reduced-motion` and disable animations when it is set.
- One page, section components stacked. Optional thin fixed top bar with the logo and a single "Invest" / contact anchor. Optional minimal right-side section-dot nav on desktop. Nothing heavier than that.

---

## 2. BRAND SYSTEM

The full brand guide lives at `https://methodic-brand.vercel.app/brand.md`. Fetch and read it if reachable. Regardless, hardcode the tokens below as the source of truth so the build is self-contained.

**Logos:**
- The project's `Logos/` folder holds the white Methodic marks: the icon on its own, and the horizontal lockup with the "Methodic" wordmark.
- Hero uses the white icon only, with "Methodic Ventures" set as Playfair text beneath it (see Section 1). Do not use the wordmark lockup in the hero.
- For any light-background placement (for example a top nav on Paper), pull the black marks from the brand URLs:
  - Icon black: `https://methodic-brand.vercel.app/logos/icon-black.svg`
  - Horizontal lockup black: `https://methodic-brand.vercel.app/logos/horizontal-black.png`
- Single-color only. Never recolor, stretch, rotate, outline, or shadow. Clear space around any logo equals the width of the M icon. Icon minimum 24px, horizontal lockup minimum 120px wide.

**Colors:**
- Ink Black `#0A0A0A`
- Paper White `#FFFFFF`
- Off-White `#F7F7F5`
- Rich Black `#1A1A1A`
- Deep Blue `#4A7FA8` (the one accent, used for titles, the tagline, and thin rules)
- Sky Blue `#89B4D4` (accent only, never body copy)
- Ice Blue `#C5DCF0` (accent only)
- Slate Gray `#6B7280` (captions and fine hairlines)

Default pairings are Ink on Paper and Paper on Ink. Ratio target roughly Ink 55, Paper 30, Blue 10, Gray 5. Sky and Ice Blue are sparing accents. Slate Gray is for captions and rules only.

**Typography (Google Fonts):**
- Playfair Display: display, all H1 and H2, and the "Methodic Ventures" hero text. Weight 600 for headlines.
- Playfair Display Italic, weight 400, in Deep Blue: pull quotes and the tagline only.
- Inter: all body copy, labels, UI, data. Weights 400 and 500.

**Design patterns:**
- Rules and dividers: thin hairlines, 1 to 2px, Slate Gray or Deep Blue. Never thick bars.
- Margins: generous and editorial. Nothing cramped. Lots of white space.

**Tagline:** "Preserving What Works. Unlocking What's Possible." One-line brand descriptor for the memo: Methodic Ventures acquires and holds essential service businesses. It preserves what sellers built and modernizes operations from the back end.

---

## 3. DESIGN DIRECTION

Think Berkshire letter meets a well-set print magazine. The site should feel calm and confident. Big Playfair headlines land one idea at a time against wide margins. Body copy is Inter, comfortable line length, never wall-to-wall. Deep Blue appears rarely and on purpose: a title, the tagline, a single key figure, a hairline.

Section rhythm: open on Ink (the hero), move to Paper and Off-White for the thesis, buy box, and Mac's, and use Ink again to weight the Empire and the Ask. Alternating keeps the Ink-heavy ratio on brand and gives the scroll a pulse.

Motion: sections and their key lines fade or short-slide up as they enter the viewport. Headline financial figures count up once when scrolled into view. That is the entire motion vocabulary. Do not add more.

Data is editorial, not dashboard. Present numbers as large typeset figures with a caption underneath, or as clean minimal bar comparisons with hairline axes. No chart-library chrome, no gridlines, no 3D, no gradients on bars. If you use a chart, style it down to near-invisibility so it reads as typeset.

Imagery runs full-bleed or in generous framed blocks with lots of surrounding space, always on a solid backing. Never place the logo or text on busy photography without a solid or darkened panel behind it.

---

## 4. PROJECT STRUCTURE, ASSETS, AND GLOBAL REQUIREMENTS

**Project root:** `Methodic-macs/`. It already contains:

- `images/` — portraits of the people who appear on the site: Gavin Mestler, Logan Mestler, Dean Farber, Tiffany, the advisors, Gerry McCarthy (the Mac's founder and seller), and Shah Durran (software and AI developer). Filenames may not follow a strict convention. At build time, list this folder and match each person in the data file to their photo by name (best match on the person's name), then wire them into the Team and Mac's sections. Do not invent or generate a face for anyone without a photo.
  - `images/Mac's Images/` — a subfolder with exactly two photos taken at Mac's, both of trucks. Use them as background texture, not a gallery: one as a full-bleed, darkened background behind the Mac's section opener, the other as a framed accent lower in that section. Always keep overlaid text legible with a solid or darkened panel.
- `Logos/` — the white Methodic marks (icon, and horizontal wordmark lockup). See Section 2 for usage.
- The two reference documents (financials `.xlsx`, seller Q&A `.docx`) sit in the repo for the developer's reference only. Do NOT render them, do NOT copy them into `public/`, and do NOT include them in any client bundle. They are the underlying source for the numbers already given in this brief and contain sensitive material. Never surface anything from them beyond what Section 5 and the data file specify.

**Next.js static serving:** assets must live under `public/`. Move or copy `images/` and `Logos/` into `public/` and reference them with web-safe paths. Names with spaces or apostrophes (like `Mac's Images`) must be URL-encoded or renamed to web-safe equivalents so they resolve in production.

**Single source of truth:** put every number, quote, and block of copy in `content/site-data.ts` (Section 7). Components read from it. This is how the client edits the deck without touching layout.

**Figure component:** build a reusable `<Figure>` that renders a photo when the file exists and a captioned typographic panel (Off-White or Ink) when it is missing. No broken images, no grey boxes, ever.

**Confidentiality:** a small "Confidential. Not for distribution." line in the footer. Add an optional, easily toggled password gate (a single shared passphrase from an env var, simple client gate is fine, this is a courtesy lock, not security). Default it OFF via a flag in `site-data.ts`.

**Accuracy:** use only the numbers in this brief and the data file. Do not compute, infer, or embellish figures. Do not use any seller verbal claim this brief marks as walked back or unverified.

---

## 5. THE NARRATIVE (section by section)

Nine sections, in order. Headlines are direction; write final copy in Methodic's voice: direct, confident, plain, short sentences, no filler, no em-dashes.

### Section 1. Hero
Full Ink background. The white M icon (from `Logos/`), and directly beneath it "Methodic Ventures" set in Playfair (Paper white). Below that, the tagline "Preserving What Works. Unlocking What's Possible." in Playfair Italic Deep Blue. One quiet line of positioning: Methodic acquires and holds essential service businesses, preserves what sellers built, and modernizes them from the back end. A single downward cue to scroll. Nothing else.

### Section 2. The Thesis
The opportunity. A generation of essential-service owners is retiring with no succession plan. The businesses are fragmented, unglamorous, and cash-generating, and almost nobody young and operational is buying them. Why now, why New England, why these three partners. A few tight beats. This is the worldview that makes the rest make sense.

### Section 3. The Buy Box
Methodic's acquisition filter as a clean criteria grid. Discipline on display.
- Verticals: HVAC, electrical, plumbing, landscaping, pest control, roofing, fire safety.
- Geography: New England.
- Size: roughly $500K to $1.5M EBITDA.
- Multiple: 3 to 4x.
- Structure: holdco / SPV, co-investor equity plus conventional debt.
Frame it as: a repeatable filter, not a one-off. We know exactly what we buy and what we pass on.

### Section 4. The Investor Deal and Right of First Refusal
Its own moment. How the SPV structure works for an investor at a high level, then the hook: original investors receive right of first refusal and priority allocation on every future Methodic deal. Frame it plainly: you are not backing one landscaping company, you are taking a standing seat on the pipeline. Getting in on deal one is how you get first look at every deal after it.

### Section 5. Mac's Landscaping, Deal One
Play it up, honestly. This is the proof the machine produces real deals. Use one Mac's truck photo as the darkened full-bleed opener behind the section title.
- The founder story: a 51-year-old business, started around 1975, that ran roughly $5M in revenue and 35 to 40 staff at its peak before founder Gerry McCarthy deliberately shrank it to keep control. A real institution, not a tired lawn-care outfit. Use Gerry's portrait here as the human anchor of "preserving what works."
- The reputation and the moat: a quality-first operator that holds commercial accounts because it carries $3 to $4M in liability insurance cheap crews cannot match. Pull quote, Playfair Italic Deep Blue: "We're not a mow-and-blow company."
- What comes with it: a recognized 51-year brand name, a trained field crew transferring with the business, roughly 55 recurring maintenance accounts, and a full fleet and equipment package.
- Selective financials, editorial, using ONLY these figures:
  - Average annual revenue, 2022 to 2024: **$848K** (caption may note the three years were $926K, $854K, $764K).
  - Estimated normalized SDE, conservative: **approximately $120K**, microcaption "estimate, being finalized in diligence."
  - Recurring maintenance base: ~55 accounts, roughly $7K average per residential account per year.
  - Do NOT publish a hard equipment dollar figure. Say the business is acquired near depreciated asset value and a fleet appraisal is in process.
  - Do NOT headline 2026 numbers. If snow is mentioned, note it is commercial-only, seasonal, and underwritten at an average winter, not the record one.
- The setup line: revenue softened over recent years because the 71-year-old owner wound down active selling, not because the market left. The book, the brand, and the crew are intact. That gap is the opportunity, delivered in Section 6.

### Section 6. The Value-Creation Plan (this specific business)
How Methodic takes Mac's from a coasting, owner-dependent shop to a run business. Concrete levers, in the company's own evidence:
- Restart the dormant commercial sales motion the owner abandoned, using the insurance moat to win accounts cheap crews cannot serve.
- Upsell the existing residential book, which only began this year.
- Push into the underpenetrated high-end adjacent towns, versus the low-margin home base.
- Modernize thin, manual operations: handwritten timesheets, a manual schedule, no CRM, no field-service software. The literal "modernize from the back end" promise.
- Right-size overhead: the business carried three family salaries (owner in sales, owner-of-record in admin, a long-tenured controller) on roughly $848K of revenue. The transition removes that layer and replaces it with one operator plus modern systems. Margin lever and growth lever at once.
- Install the operator: Tiffany [LAST NAME] steps in as operator with a real stake, exactly the "bring someone in and give them a piece of the action" model the seller himself said is how this scales.
- Continuity: the seller stays on in an advisory role for 3 to 6 months, then exits. [PLACEHOLDER, CONFIRM: the general manager remains through the transition to hold crew, masonry, and snow knowledge.]
- Optional GM pull quote if confirmed usable: the company "could easily be two or three times the size with the right type of marketing." Attribute to "the general manager," not by name, and only if the confirm flag is set.

### Section 7. The Empire
Zoom out. Mac's is node one.
- The anchor: landscaping is the beachhead. Prove the acquisition and operating playbook here.
- The rollup: add adjacent essential-service trades from the buy box, one disciplined deal at a time.
- The consolidation: unify back office, procurement and supply, insurance, and equipment across the portfolio to expand margin at the platform level.
- The cross-sell: one trusted brand serving a shared customer base across multiple trades.
- The exit: a consolidated essential-service platform positioned for a private-equity exit. State the ambition, not a dollar figure. Do NOT name a specific exit number or a $100M target.
- Market proof: a large, fragmented market being actively consolidated, with a multi-billion-dollar category leader already proving the model (you may reference the category leader at roughly $2.7B in revenue). Do not name specific private local competitors on the public version.

### Section 8. The Team
Real portraits from `images/`, matched by name. Editorial and short.
- Managing partners: Gavin Mestler, Logan Mestler, Dean Farber. One tight line each.
- Team: Tiffany [LAST NAME], incoming operator for Mac's, and Shah Durran, software and AI developer. One line each. Shah's presence quietly backs the "modernize from the back end" thesis.
- Advisors: render from the data file with their photos. Treat the list as a PLACEHOLDER (in flux). Match each advisor photo to its name; make names and roles trivial to add or swap.
Monogram fallback via `<Figure>` for anyone missing a photo.

### Section 9. The Ask
- The raise: **$500K total. $400K to acquire the business, $100K working capital.**
- Skin in the game, its own emphasized beat: the three partners have each committed **$50K**, **$150K total, already in**. Animated progress figure: **$150K of $500K committed (30%)**, founders first.
- Reprise the right of first refusal in one line as the reason to commit on deal one.
- A single clear call to action: contact / express interest. [CONTACT DETAILS PLACEHOLDER.]
- Footer: logo, "Confidential. Not for distribution.", year.

---

## 6. ACCURACY GUARDRAILS (do not violate)

1. Revenue is $848K (2022 to 2024 average). Never state or imply "over a million" as a current figure.
2. SDE is an estimate of approximately $120K, always labeled as being finalized in diligence. Never present it as confirmed or precise.
3. No hard equipment or asset dollar figure on the site. "Near depreciated asset value, appraisal in process" only.
4. Do not headline 2026 year-to-date performance. Snow is seasonal, commercial-only, underwritten at an average winter.
5. No specific exit dollar target. Ambition stated in words.
6. Do not invent employee names, faces, financials, or quotes. Attribute the growth quote to "the general manager," not by name, and only if the confirm flag is set.
7. Every figure the site shows must trace to a constant in `site-data.ts`. If a number is not there, it does not go on the page.

---

## 7. DATA FILE (create `content/site-data.ts`, wire everything to it)

Populate a typed constants file so the client edits copy, numbers, and asset paths in one place. Suggested shape:

```ts
export const siteConfig = {
  passwordGate: { enabled: false, passphrase: "" }, // flip enabled to lock the site
  confidential: true,
  assets: {
    people: "/images",              // portraits, matched by name at build time
    macsPhotos: "/images/macs",     // the two truck photos (web-safe path)
    logos: "/logos",                // white icon + wordmark lockup
  },
};

export const brand = {
  colors: {
    ink: "#0A0A0A", paper: "#FFFFFF", offWhite: "#F7F7F5", richBlack: "#1A1A1A",
    deepBlue: "#4A7FA8", skyBlue: "#89B4D4", iceBlue: "#C5DCF0", slate: "#6B7280",
  },
  tagline: "Preserving What Works. Unlocking What's Possible.",
};

export const methodic = {
  oneLiner:
    "Methodic Ventures acquires and holds essential service businesses. We preserve what sellers built and modernize operations from the back end.",
  buyBox: {
    verticals: ["HVAC","Electrical","Plumbing","Landscaping","Pest Control","Roofing","Fire Safety"],
    geography: "New England",
    size: "~$500K to $1.5M EBITDA",
    multiple: "3 to 4x",
    structure: "Holdco / SPV, co-investor equity plus conventional debt",
  },
  rofr:
    "Original investors receive right of first refusal and priority allocation on every future Methodic deal.",
  partners: [
    { name: "Gavin Mestler", role: "Co-Founding Managing Partner", photo: "", bio: "" },
    { name: "Logan Mestler", role: "Co-Founding Managing Partner", photo: "", bio: "" },
    { name: "Dean Farber", role: "Co-Founding Managing Partner", photo: "", bio: "" },
  ],
  team: [
    { name: "Tiffany [LAST NAME]", role: "Operator, Mac's Landscaping", photo: "", bio: "" }, // PLACEHOLDER
    { name: "Shah Durran", role: "Software and AI Developer", photo: "", bio: "" },
  ],
  advisors: [ /* PLACEHOLDER, in flux. { name, role, photo } */ ],
};

export const macs = {
  name: "Mac's Landscaping",
  sellerName: "Gerry McCarthy",
  sellerRole: "Founder",
  sellerPhoto: "",              // matched from /images
  yearsInBusiness: 51,
  founded: "~1975",
  peak: { revenue: "~$5M", staff: "35 to 40" },
  moat: "$3 to $4M liability insurance that low-cost crews cannot match",
  pullQuote: "We're not a mow-and-blow company.",
  recurringAccounts: 55,
  avgResidentialAccount: "~$7K / year",
  financials: {
    revenueAvg: 848000,          // 3-year average, 2022 to 2024
    revenueYears: { 2022: 925633, 2023: 853706, 2024: 763688 },
    sdeEstimate: 120000,         // conservative, EDIT ME
    sdeLabel: "estimate, being finalized in diligence",
    assetNote: "Acquired near depreciated asset value. Fleet appraisal in process.",
  },
  gmQuoteConfirmed: false,       // set true only when cleared for public use
  gmQuote: "This company could easily be two or three times the size with the right type of marketing.",
  crew: { note: "Trained field crew transfers with the business.", gmStaysThroughTransition: false }, // CONFIRM
  sellerTransition: "Seller remains in an advisory role for 3 to 6 months, then exits.",
};

export const valueCreation = [
  "Restart the dormant commercial sales motion, winning on the insurance moat.",
  "Upsell the existing residential book, which only began this year.",
  "Expand into the underpenetrated high-end adjacent towns.",
  "Modernize manual operations: timesheets, scheduling, CRM, field-service software.",
  "Right-size family admin overhead and replace it with one operator plus systems.",
  "Install an operator with a real stake in the outcome.",
];

export const empire = {
  steps: [
    "Anchor: prove the playbook in landscaping.",
    "Rollup: add adjacent essential-service trades, one disciplined deal at a time.",
    "Consolidate: unify back office, procurement, insurance, and equipment across the portfolio.",
    "Cross-sell: one trusted brand across multiple trades to a shared customer base.",
    "Exit: a consolidated platform positioned for a private-equity exit.",
  ],
  marketProof: "A large, fragmented market being actively consolidated, with a category leader at roughly $2.7B in revenue.",
};

export const ask = {
  total: 500000,
  purchase: 400000,
  workingCapital: 100000,
  founderCommitment: 150000,   // 3 x $50K
  founderEach: 50000,
  committedPct: 30,
  contact: "[CONTACT DETAILS PLACEHOLDER]",
};
```

---

## 8. ACCEPTANCE CHECKLIST (self-check before you call it done)

- [ ] Builds clean, deploys to Vercel with no config.
- [ ] Reads well and scrolls smoothly at 375px and on desktop.
- [ ] Hero is white icon on Ink with "Methodic Ventures" in Playfair beneath it, tagline in Playfair Italic Deep Blue.
- [ ] Playfair for display, Inter for body, Deep Blue used sparingly and on purpose.
- [ ] `images/` and `Logos/` moved under `public/` with web-safe paths; `Mac's Images` path resolves in production.
- [ ] Every person is matched to their real photo by name (partners, Tiffany, Shah, advisors, Gerry). No invented faces. Monogram fallback for any gap.
- [ ] The two Mac's truck photos are used as darkened background texture, not a gallery.
- [ ] Reference `.xlsx` and `.docx` are not in `public/`, not rendered, not in the client bundle.
- [ ] No em-dashes anywhere. No buzzwords. No gradients, glows, or shadows.
- [ ] Every number on screen traces to `site-data.ts`. Revenue shows $848K, never "over a million." SDE labeled as an in-diligence estimate. No hard equipment figure. No 2026 headline. No exit dollar target.
- [ ] Placeholders are visible and easy to find: Tiffany last name and bio, advisor list, GM confirm flag, GM crew-continuity flag, contact details.
- [ ] Right of first refusal appears as its own section and again in the ask.
- [ ] Founder $150K of $500K commitment animates and reads as "founders in first."
- [ ] `prefers-reduced-motion` disables animation. Alt text present. Keyboard navigable.
- [ ] Confidential footer present. Password gate wired but off by default.

Build it all now. Leave the placeholders clearly marked. We iterate from there.