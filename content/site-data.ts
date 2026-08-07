// SINGLE SOURCE OF TRUTH
// Every number, quote, and block of copy on the site lives here.
// Components read from this file. Edit copy and figures here, never in layout.
// Accuracy guardrails (Section 6 of the brief) are enforced by keeping every
// on-screen figure traceable to a constant below.

export const siteConfig = {
  // Flip enabled to lock the site behind a single shared passphrase.
  // Courtesy lock only, not real security. Share links carry the key:
  // https://<site>/?access=<passphrase> opens directly.
  passwordGate: { enabled: true, passphrase: "Preserve2026" },
  confidential: true,
  year: 2026,
  assets: {
    people: "/images", // portraits, referenced by explicit web-safe path
    macsPhotos: "/images/macs", // the two truck photos
    logos: "/logos", // white icon + horizontal wordmark lockup
  },
  logos: {
    iconWhite: "/logos/icon-white.png",
    horizontalWhite: "/logos/horizontal-white.png",
    // Black marks for any light-background placement, from the brand site.
    iconBlack: "https://methodic-brand.vercel.app/logos/icon-black.svg",
    horizontalBlack: "https://methodic-brand.vercel.app/logos/horizontal-black.png",
  },
} as const;

export const brand = {
  colors: {
    ink: "#0A0A0A",
    paper: "#FFFFFF",
    offWhite: "#F7F7F5",
    richBlack: "#1A1A1A",
    deepBlue: "#4A7FA8",
    skyBlue: "#89B4D4",
    iceBlue: "#C5DCF0",
    slate: "#6B7280",
  },
  tagline: "Preserving What Works. Unlocking What's Possible.",
} as const;

export const methodic = {
  name: "Methodic Ventures",
  oneLiner:
    "Methodic Ventures acquires and holds essential service businesses. We preserve what sellers built and modernize operations from the back end.",

  thesis: {
    kicker: "The Opportunity",
    title: "The Greatest Wealth Transfer in History",
    titleAccent: "Wealth Transfer", // rendered in Deep Blue
    // Headline stats. Value is the number, format renders the percent.
    stats: [
      { value: 51, label: "of U.S. businesses are owned by baby boomers" },
      { value: 100, label: "will reach retirement age within 6 years" },
      { value: 85, label: "have no formal transition plan" },
      { value: 70, label: "of businesses listed never find a buyer" },
    ],
  },

  // Section 3. The Market. Why landscaping is the category we chose first:
  // large, essential, growing, and owned by no one. All figures trace to
  // IBISWorld (Landscaping Services, US and Massachusetts), 2025–2026.
  market: {
    kicker: "The Market",
    title: "A $189 Billion Market, Owned by No One",
    titleAccent: "Owned by No One", // rendered in Deep Blue
    intro:
      "For all its scale, landscaping has no dominant owner. It is one of the largest essential-service categories in the country: recurring, recession-resistant, and impossible to offshore. It is also one of the most fragmented markets in America.",

    // The fragmentation argument, the reason a roll-up works here. Folds in the
    // national business count so the market-size slide never has to repeat it.
    fragmentation: {
      stat: "< 2%",
      statLabel: "held by the largest company in the country",
      body:
        "With more than 550,000 landscaping businesses nationwide, no one owns this market. BrightView, the country's largest at roughly $3B in revenue, is the biggest player, yet the fifty largest firms combined still hold only about a fifth of it. Everything else belongs to owner-operators like Gerry: thousands of durable, profitable businesses with no obvious buyer.",
    },

    // TAM / SAM / SOM as strictly nested circles, each fully inside the next,
    // sharing a bottom tangent. Massachusetts sits between the region and our
    // SOM as its own highlighted circle. It is roughly half of the New England
    // SAM and our entry point. Radii are illustrative for hierarchy; the figures
    // carry the real proportions.
    marketSize: {
      heading: "Landscaping Market Size",
      rings: [
        {
          tag: "TAM",
          eyebrow: "TAM · United States",
          figure: "$188.8B",
          body: "The entire U.S. landscaping-services market: every service line, residential and commercial.",
        },
        {
          tag: "SAM",
          eyebrow: "SAM · New England",
          figure: "~$14B",
          body: "The regional market we can realistically serve. Massachusetts alone is roughly half of it.",
        },
        {
          tag: "MASS.",
          eyebrow: "Massachusetts",
          figure: "$6.8B",
          body: "29,325 landscaping businesses, the largest market in New England and roughly half of our regional SAM.",
          highlight: true,
        },
        {
          tag: "SOM",
          eyebrow: "SOM · 5–7 year target",
          figure: "$50M",
          body: "The revenue we aim to build through disciplined acquisition, well under 1% of the region.",
        },
      ],
      source:
        "Sources: IBISWorld Landscaping Services (United States and Massachusetts), 2025. New England market size is an internal estimate, with Massachusetts at ~46% of the region by population.",
    },
  },

  investorDeal: {
    kicker: "The Investor Deal",
    lead:
      "You are buying equity in the company formed to acquire and operate Mac's Landscaping. One business, bought right, run well.",
    blocks: [
      {
        label: "What You Own",
        body: "Equity in the acquiring company, which owns the business outright: the brand, the accounts, the equipment, and the crew.",
      },
      {
        label: "How You Are Paid",
        body: "An 8% preferred return is paid on your capital before Methodic takes anything, until your principal is fully returned. Profits beyond that split 40% to investors.",
      },
      {
        label: "First Look at What's Next",
        body: "Investors in this deal receive right of first refusal and priority allocation on future Methodic acquisitions.",
      },
    ],
    pullQuote: "Investors are paid first. Methodic earns only when you do.",
  },

  // Bios pulled from methodicventures.com. The co-founders have no published
  // bio on the site, so their bio is intentionally left blank here.
  partners: [
    {
      name: "Gavin Mestler",
      role: "Co-Founder",
      photo: "/images/gavin-mestler.png",
      bio: "",
      // Move the crop down so the top of his head is not cut off.
      imgPosition: "50% 20%",
    },
    {
      name: "Logan Mestler",
      role: "Co-Founder",
      photo: "/images/logan-mestler.png",
      bio: "",
      // Top-align the crop so "cover" trims the bottom, not his head, then push
      // down with offsetY to add headroom. (Centering here clipped his hair
      // before the transform ran.) Higher offsetY % = lower in the frame.
      imgPosition: "50% 0%",
      imgScale: 1.52,
      imgOffsetY: "19%",
    },
    {
      name: "Dean Farber",
      role: "Co-Founder",
      photo: "/images/dean-farber.png",
      bio: "",
      // Top-align so the crop trims the bottom, then a slight zoom and a small
      // downward offset (same approach as Logan).
      imgPosition: "50% 0%",
      imgScale: 1.15,
      imgOffsetY: "10%",
    },
  ],

  // Advisory board. Roles and bios pulled from methodicventures.com.
  // Photos matched by name from /images. Trivial to add, swap, or remove.
  advisors: [
    {
      name: "Brad Johnson",
      role: "Operations",
      photo: "/images/brad-johnson.jpg",
      bio: "Professor Emeritus at Babson College and former Vice President at Wayfair.",
    },
    {
      name: "Scott Waxler",
      role: "M&A",
      photo: "/images/scott-waxler.jpg",
      bio: "Founder, Lockebridge Capital Partners.",
    },
    {
      name: "Evan Farber",
      role: "Legal",
      photo: "/images/evan-farber.png",
      bio: "General Counsel at The Cranemere Group and Board Member of Flotek Industries.",
    },
    {
      name: "Matt Walker",
      role: "Acquisitions",
      photo: "/images/matt-walker.png",
      bio: "Investor, operator, and entrepreneur specializing in business acquisitions and real estate.",
    },
    {
      name: "Erik Noyes",
      role: "Strategy",
      photo: "/images/erik-noyes.jpg",
      bio: "Director of The Generator AI Lab at Babson College and a Top 50 business professor in the United States by Poets & Quants.",
    },
    {
      name: "Edward Gorelick",
      role: "Accounting",
      photo: "/images/edward-gorelick.jpg",
      bio: "Founder of Gorelick & Uslaner, CPAs.",
    },
    {
      name: "Chad Mestler",
      role: "Capital Markets",
      photo: "/images/chad-mestler.jpg",
      bio: "Founder of Helvetica Group and Raiseli.com.",
    },
  ],

  // Advisory board track record, shown as a stat band above the advisor cards.
  advisorStats: [
    { figure: "$2.6B+", label: "In M&A Transaction Value" },
    { figure: "100+", label: "M&A Deals Advised" },
    { figure: "$1B+", label: "Private Capital Deployed" },
    { figure: "150+", label: "Years Combined Experience" },
  ],
} as const;

export const macs = {
  kicker: "The Deal",
  name: "Mac's Landscaping",
  logo: "/logos/macs-landscaping-logo.png", // Mac's own brand mark (1536x1024)
  openerSubline: "51 years. 13 towns. Never been sold.",
  sellerName: "Gerry McCarthy",
  sellerRole: "Founder",
  sellerPhoto: "/images/gerry-mccarthy.png",

  photos: {
    opener: "/images/macs/macs-truck-1.jpg", // darkened full-bleed behind the opener
    accent: "/images/macs/macs-truck-2.jpg", // framed accent lower in the section
  },

  yearsInBusiness: 51,
  founded: "1975",
  townsServed: "13",

  founderStory:
    "Gerry McCarthy built Mac's Landscaping from the ground up in 1975 and deliberately kept it small. Now 71, ready to retire, and handing it to the right buyer for the first time in five decades.",

  // The moat, as tight bullets. lead is emphasized, body follows (no em-dashes).
  moatBullets: [
    {
      lead: "$3 to $4M liability insurance",
      body: "shuts out cheap operators from commercial accounts.",
    },
    {
      lead: "51-year brand recognition",
      body: "across 13 suburban Massachusetts towns.",
    },
    {
      lead: "55 full-service maintenance accounts",
      body: "spring through fall, no discounted every-other-week clients.",
    },
    {
      lead: "NALP board member",
      body: "ran the national trade show for years.",
    },
    {
      lead: "Commercial-only snowplowing",
      body: "the highest-margin segment in the business.",
    },
  ],

  // Pull quote from the long-time general manager, cleared for use.
  moatQuote: {
    text: "This company could easily be two or three times the size with the right type of marketing. Everyone I know says I see you everywhere.",
    attribution: "Keith McCarthy, 30-year General Manager",
  },

  recurringAccounts: 55,

  financials: {
    revenueAvg: 847000, // 4-year average, 2022 to 2025 (matches the bars shown)
    revenueAvgLabel: "4-Year Avg Revenue",
    revenueYears: [
      { year: 2022, value: 925633 },
      { year: 2023, value: 853706 },
      { year: 2024, value: 763688 },
      { year: 2025, value: 846779 }, // full-year books, +11% vs 2024
      { year: 2026, value: 449140, ytd: true }, // through June
    ],
    // SDE by year (Logan, 2026-07-13). 2026 is through June.
    sdeYears: [
      { year: 2023, value: 132000 },
      { year: 2024, value: 128000 },
      { year: 2025, value: 160000 },
      { year: 2026, value: 119000, ytd: true },
    ],
    sdeEstimate: 140000, // avg of sdeYears 2023-2025 (132+128+160)/3
    sdeLabel: "3-Year Avg SDE (in diligence)",
    equipmentValue: 200000, // PLACEHOLDER pending professional appraisal
    equipmentLabel: "Equipment & Fleet Value (est.)",
    recurringLabel: "Recurring Accounts",
    // Small callout notes beneath the stat row.
    notes: [
      "The decline was an owner-driven downscale, not market loss. Gerry stopped selling.",
    ],
    // Overhead stat: ~60% = 3-yr avg total expense / total income from the
    // books (FY23 64.5%, FY24 59.8%, FY25 54.1%). GM ~58% avg backs the
    // "healthy" claim but is deliberately not shown as a number.
    overhead: {
      figure: "~60%",
      label: "Overhead as % of sales today",
      body: "The gross margin underneath is healthy. The overhead on top is still sized for a much larger company.",
    },
    // The peak, as an emphasized closing line under the financials. It sits
    // here on purpose: right after the reader sees today's revenue.
    peakLine:
      "At its peak, this business ran $5M in revenue with 35 employees. The brand that did it is intact.",
  },
} as const;

export const valueCreation = {
  kicker: "The Value-Creation Plan",
  intro:
    "Concrete levers, each grounded in the company's own evidence. This is what modernizing from the back end looks like in one business.",
  levers: [
    {
      heading: "Restart commercial sales",
      body: "Gerry's dormant canvassing program, with a proven three-year contract track record.",
    },
    {
      heading: "Upsell the existing book",
      body: "55 accounts never actively marketed to. Masonry, irrigation, and fertilization add-ons.",
    },
    {
      heading: "Expand into high-end towns",
      body: "Winchester, Wellesley, and Weston, adjacent to current territory. Gerry knows where the money is.",
    },
    {
      heading: "Modernize operations",
      body: "Field service software, CRM, and digital scheduling. Currently all manual.",
    },
    {
      heading: "Right-size overhead",
      body: "An admin structure built for a $5M company, running at $850K.",
    },
    {
      heading: "Install the operator",
      body: "Tiffany Sergi from day one, running the business with full P&L ownership.",
    },
    {
      heading: "Keep the GM",
      body: "Keith McCarthy, 30 years in the business, stays on to lead the crews and the snow operation. The relationships and route knowledge stay with the company.",
    },
  ],
  // The operator's first-90-days plan, condensed from Tiffany's full document
  // (wiki: tiffany-90-day-plan, 2026-08-04). Phases overlap by design.
  first90: {
    kicker: "The First 90 Days",
    intro: "Tiffany's operating plan from day one.",
    phases: [
      {
        heading: "Listen, learn, assess",
        body: "Individual meetings with every employee. Time in the field with the crews. Every contract, account, process, and the P&L reviewed before any significant change. An opportunity log of upsells and underpriced accounts starts on day one.",
      },
      {
        heading: "Set the operating rhythm",
        body: "Weekly operations and management meetings with a scorecard, an issues list, and measurable KPIs: revenue, gross margin by service line, labor efficiency, retention, and pipeline.",
      },
      {
        heading: "Strengthen the processes",
        body: "Document the core processes. Keep and reinforce what works. Change only what improves efficiency, accountability, customer experience, or profitability.",
      },
      {
        heading: "Review every dollar",
        body: "A line-by-line P&L review with budget-versus-actual tracking by service line: where margin is made, where it leaks, and what pricing should be.",
      },
      {
        heading: "Grow the existing book",
        body: "An upsell and enhancement pipeline built from contract reviews and field observation, before chasing new customers.",
      },
      {
        heading: "Build the commercial engine",
        body: "A target-property market report, a working CRM, and direct outreach. The goal is a measurable, repeatable sales pipeline that outlives the first 90 days.",
      },
    ],
  },

  continuity:
    "Keith McCarthy, the founder's son and 30-year general manager, stays on to lead the crews and the snow operation. The customer relationships and crew loyalty stay with the business. The seller works alongside us full-time for the first two months, advises through the third, and stays on call beyond that.",

  // Optional GM pull quote. Only rendered when gmQuoteConfirmed is true.
  // Attributed to "the general manager," never by name.
  gmQuoteConfirmed: false,
  gmQuote:
    "This company could easily be two or three times the size with the right type of marketing.",
  gmQuoteAttribution: "the general manager",

  // Crew continuity confirm flag (Section 6 of the brief). Confirmed: Keith stays.
  gmStaysThroughTransition: true,
} as const;

// The offer to the seller, condensed for investors. DRAFT: cash at close is
// the appraised equipment value and stays blank until the appraisal lands.
// Terms summarized from the LOI (v15.6, sent 2026-08-01).
export const offer = {
  kicker: "The Offer",
  intro:
    "How we are buying Mac's. The structure prices the business off its verified assets and keeps the seller invested in the outcome.",
  items: [
    {
      figure: "$—",
      label: "Cash at close",
      body: "The appraised value of the equipment and fleet, set by an independent appraiser. Filled in when the appraisal is complete.",
    },
    {
      figure: "$125K",
      label: "Earnout",
      body: "Earned over the first year against milestones: a completed transition, collections, key employees staying on, and maintenance accounts retained.",
    },
    {
      figure: "5%",
      label: "Seller profits interest",
      body: "Gerry keeps five percent of distributable profits and five percent of any increase in value at a sale.",
    },
  ],
  footnote:
    "Draft terms, summarized from our letter of intent. Final numbers are set at signing and appraisal.",
} as const;

// Commercial whitespace, from the MA assessor-records analysis
// (wiki: macs-landscaping-commercial-opportunity, 2026-07-14).
export const market = {
  kicker: "The Local Market",
  stats: [
    {
      figure: "~2,300",
      label: "serviceable commercial properties in the towns Mac's already serves",
    },
    {
      figure: "~950",
      label:
        "of them are mid-size office and industrial parks (2 to 10 acres), the class that pays $25K to $40K a year",
    },
    {
      figure: "<1%",
      label: "is Mac's share of that universe today, at roughly 20 commercial accounts",
    },
    {
      figure: "~25",
      label:
        "local companies are big enough to compete for this work. That is 90+ serviceable properties per capable competitor",
    },
  ],
  // The chain: contracts -> revenue -> free cash flow -> return. The 21%
  // must match the returns table in the ask ($40K pref + 40% split, $500K).
  chain: {
    kicker: "What just 16 contracts turns into",
    steps: [
      {
        figure: "16",
        label: "mid-size contracts. Just 1.7% of the 950 target properties",
      },
      {
        figure: "~$400K",
        label: "added annual revenue at conservative market rates of $25k per contract",
      },
      {
        figure: "~$200K",
        label: "annual free cash flow",
      },
      {
        figure: "21%",
        label: "annual return to investors, on the terms in the ask",
      },
    ],
  },
  footnote:
    "Commercial whitespace in Mac's service area, computed from Massachusetts assessor parcel data (MassGIS / DLS): commercial and industrial parcels on half-acre-plus lots with real grounds to maintain.",
} as const;

export const empire = {
  kicker: "The Vision",
  title: "Mac's is the start.",
  intro: "Zoom out. One business proves the machine. The plan is a platform.",
  steps: [
    {
      label: "Anchor",
      body: "Mac's is first. We are all in on making it succeed. Everything that follows builds on it.",
    },
    {
      label: "Rollup",
      body: "Add established landscaping companies, one disciplined deal at a time.",
    },
    {
      label: "Consolidate",
      body: "Unify back office, procurement and supply, insurance, and equipment across the portfolio to expand margin at the platform level.",
    },
    {
      label: "Cross-sell",
      body: "One trusted brand serving a shared customer base across every service line: maintenance, construction, irrigation, and snow.",
    },
    {
      label: "Exit",
      body: "A consolidated landscaping platform positioned for a private-equity exit.",
    },
  ],
  marketProof:
    "A large, fragmented market being actively consolidated, with a category leader already at roughly $2.7B in revenue proving the model.",
  marketProofFigure: "$2.7B",
  marketProofCaption: "category leader revenue, proof the model works at scale",

  // Platform diagram. Drives the holdco / shared-services / acquisitions tree.
  platformName: "Methodic Landscaping",
  platformCaption: "the platform",
  sharedServicesLabel: "Shared across every business",
  sharedServices: [
    "Back office",
    "Systems & CRM",
    "Procurement & equipment",
    "Insurance",
    "One brand",
  ],
  nodes: [
    { label: "Mac's Landscaping", tag: "Deal one, 2026", status: "owned" },
    { label: "Deal two", tag: "Future", status: "future" },
    { label: "Deal three", tag: "Future", status: "future" },
    { label: "Deal four", tag: "Future", status: "future" },
  ],
  diagramOutcome:
    "Each business runs leaner on one back office, one supply line, one brand. Margin no single company could build alone shows up across all of them, and compounds with every acquisition.",
} as const;

export const team = {
  kicker: "The Team",
  title: "Team",
  intro:
    "The people who source the deals, run the businesses, and build the systems behind them.",
  groupPhoto: "/images/methodic-main.jpg", // the three managing partners (3104x2294)
  groupPhotoAlt:
    "Gavin Mestler, Logan Mestler, and Dean Farber, the managing partners of Methodic Ventures",
  groupPhotoCaption: "Gavin Mestler, Logan Mestler, and Dean Farber",
  // Shared description shown under the three managing partner cards.
  partnersDescription:
    "Gavin Mestler, Logan Mestler, and Dean Farber are the co-founding partners of Methodic Ventures. Together they have raised over $420K across prior ventures and built businesses generating more than $1M in combined revenue. All three are members of Babson College's eTower, one of the country's leading entrepreneurship communities.",
  // Backed-by note and logo shown directly beneath the partners description.
  eTowerNote:
    "Methodic is backed by eTower, an elite entrepreneurship community founded at Babson College, with alumni that have built companies valued at over $3 billion.",
  eTowerLogo: "/logos/etower-hero-logo.png", // 2262x1128
  eTowerLogoAlt: "eTower",
} as const;

// Leadership. Each person gets their own full section (Tiffany, then Shah).
// tagline, bio paragraphs, and highlights are easy to edit or extend.
// [PLACEHOLDER] lines are ready for you to drop real copy into.
export const leadership = [
  {
    id: "tiffany",
    name: "Tiffany Sergi",
    role: "Chief Executive Officer",
    org: "Methodic Ventures",
    photo: "/images/tiffany-sergi.png",
    imgPosition: "50% 12%",
    tagline: "She runs the business we buy.",
    bio: [
      "COO/CEO with 12+ years of experience scaling service-based businesses. At Landscapes by D&J, she grew revenue from $2M to $5M+ while increasing profitability.",
      "Managed 60+ employees at peak season with full P&L ownership, built an 8-person leadership team with defined KPIs, and implemented ERP, CRM, and scheduling systems to drive operational efficiency at scale.",
    ],
    highlights: [
      "Grew revenue from $2M to $5M+ at Landscapes by D&J",
      "Managed 60+ employees at peak with full P&L ownership",
      "Implemented ERP, CRM, and scheduling systems",
    ],
  },
  {
    id: "shah",
    name: "Shah Durran",
    role: "Chief Technology Officer",
    org: "Methodic Ventures",
    photo: "/images/shah-durran.png",
    imgPosition: "50% 20%",
    tagline: "He modernizes operations from the back end.",
    bio: [
      "Full stack developer and founder of Fluidify Systems, a business automation firm that has deployed hundreds of AI-driven systems for businesses across the United States.",
      "Certified Make.com and n8n Automation Specialist with expertise in building seamless, high-performance automation solutions for operational efficiency and scalable growth.",
    ],
    highlights: [
      "Founder of Fluidify Systems",
      "Deployed hundreds of AI-driven systems nationwide",
      "Certified Make.com and n8n Automation Specialist",
    ],
  },
] as const;

export const advisorsSection = {
  title: "Advisory Board",
} as const;

export const ask = {
  kicker: "The Ask",
  title: "The deal is open.",
  total: 500000,
  purchase: 400000,
  workingCapital: 100000,
  founderCommitment: 150000, // 3 x $50K
  founderEach: 50000,
  committedPct: 30,
  breakdown: [
    {
      label: "To acquire the business",
      value: 370000,
      note: "A price anchored to the assets alone.",
    },
    { label: "Due diligence costs", value: 30000 },
    { label: "Working capital", value: 100000 },
  ],
  // The economics. Pref is designed; the 40% split is a PLACEHOLDER pending
  // the final fund agreement. Update figure/body together when terms land,
  // and recompute the returns table below (pref $40K first, then 40% of rest).
  terms: {
    kicker: "The Terms",
    items: [
      {
        figure: "8%",
        label: "Preferred return, paid first",
        body: "Investors earn 8% annually on invested capital, paid before Methodic takes anything, until their principal is fully returned.",
      },
      {
        figure: "40%",
        label: "Investor profit split",
        body: "After the preferred return is paid, investors receive 40% of distributable profits.",
      },
    ],
    footnote: "Working terms, finalized in the operating agreement.",
  },
  // The return at different free-cash-flow levels. Each row: pref $40K paid
  // first, then 40% of the remainder, on the full $500K raise. Recompute if
  // the raise, pref, or split changes. The $200K row is the 24-month plan.
  returns: {
    kicker: "The Return",
    intro:
      "What the terms pay at different levels of annual free cash flow.",
    columns: ["Free cash flow", "Cash to investors", "Your annual return"],
    rows: [
      { fcf: "$100K", investor: "$64K", pct: "13%" },
      { fcf: "$200K", investor: "$104K", pct: "21%" },
      { fcf: "$300K", investor: "$144K", pct: "29%" },
      { fcf: "$400K", investor: "$184K", pct: "37%" },
    ],
    footnote:
      "Cash to investors each year free cash flow holds at that level: the 8% preferred return first, then 40% of what remains. Illustrative, on the full $500K raise.",
  },
  skinInTheGame:
    "The three partners have each committed $50K. $150K total, already in. Founders first.",
  rofrReprise: "Preserving What Works. Unlocking What's Possible.",
} as const;


// Ordered section nav (right-side dot nav on desktop, and anchors).
export const sections = [
  { id: "hero", label: "Methodic" },
  { id: "team", label: "Team" },
  { id: "tiffany", label: "Tiffany" },
  { id: "shah", label: "Shah" },
  { id: "advisors", label: "Advisors" },
  { id: "thesis", label: "Opportunity" },
  { id: "macs", label: "Mac's" },
  { id: "local-market", label: "Local Market" },
  { id: "value-creation", label: "Value Plan" },
  { id: "offer", label: "The Offer" },
  { id: "ask", label: "The Ask" },
] as const;
