export type ProjectClient = {
  name: string;
  url: string;
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  /** "YYYY" or "YYYY-MM" — used for both display and sorting. */
  date: string;
  tags: string[];
  client?: ProjectClient;
  description?: string;
  /** Folder(s) under /public to read the full gallery from (via /api/images). */
  imageFolder?: string | string[];
  /** Images shown in the homepage thumbnail row, in order. */
  thumbnails: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "zdk2",
    title: "ZDK2",
    date: "2026",
    tags: ["Design", "Logo"],
    imageFolder: "/design/zdk2",
    description: "Logo design for ZDK2.",
    thumbnails: ["/design/zdk2/zdk2-logo-ig_0000_1.jpg"],
  },
  {
    id: 2,
    slug: "knock2",
    title: "Knock2",
    date: "2026-09",
    tags: ["Design", "Flyer"],
    description:
      "Working alongside Zach Okami and Paul Kim to create the visual and graphic design for Knock2's show run — from the SF Block Party and Lollapalooza to New York and the Sound di Alarm release party in Tokyo (continuously updated).",
    imageFolder: [
      "/design/k2-2026",
      "/design/k2-2025/k2-ny",
      "/design/k2-2025/k2-lolla",
      "/design/k2-2025/k2-sf",
    ],
    thumbnails: [
      "/design/k2-2026/K2-SDA-JP-FLYER-EDIT2.jpg",
      "/design/k2-2026/SDA_TITLE_CARD_EDIT.jpg",
      "/design/k2-2025/k2-ny/K2_NY_5_EDITS_2.jpg",
      "/design/k2-2025/k2-lolla/k2-lolla-front.jpg",
      "/design/k2-2025/k2-sf/knock2-sf-flyer-full-text.jpg",
      "/design/k2-2025/k2-ny/k2-radar-try.gif",
    ],
  },
  {
    id: 3,
    slug: "isoxo-hardcore-diva",
    title: "ISOxo Hardcore Diva",
    date: "2026",
    tags: ["Design", "Flyer", "Tour"],
    imageFolder: "/design/isoxo-hcd",
    description:
      "Flyer, tour poster, and merch design for ISOxo's Hardcore Diva tour and one-off shows.",
    thumbnails: [
      "/design/isoxo-hcd/ISOXO-HCD-TOUR-ANIMATED.jpg",
      "/design/isoxo-hcd/HCD-NY-V2-EDIT.jpg",
      "/design/isoxo-hcd/250723-isoxo-ampm-toronto.jpg",
      "/design/isoxo-hcd/hcd_cowpalace_flyer_8.jpg",
    ],
  },
  {
    id: 4,
    slug: "niteharts2026",
    title: "Niteharts 2026",
    date: "2026-10",
    tags: ["Design", "Flyer"],
    imageFolder: "/design/nh26",
    description: "Flyer designs for the Main Lineup and Latenite Lineup.",
    thumbnails: [
      "/design/nh26/nh26-main-lineup.jpg",
      "/design/nh26/nh26-latenite-lineup.jpg",
    ],
  },
  {
    id: 5,
    slug: "mruhacks2025",
    title: "MRUHacks 2025",
    date: "2025",
    tags: ["Marketing", "Design"],
    imageFolder: "/design/mruhacks2025",
    description:
      "As the marketing lead for MRUHacks 2025, I helmed the branding, design, and overall social media presence for the hackathon. Along with my team — graphic designer Jashan Singh, social media strategist Meagan Valderrama, and copywriter Sage Odesanya — we delivered a fresh new look to the event.",
    thumbnails: [
      "/design/mruhacks2025/banner.png",
      "/design/mruhacks2025/registration-post.png",
      "/design/mruhacks2025/workshop-recap-cover-vol1.jpg",
    ],
  },
  {
    id: 6,
    slug: "niteharts-merch",
    title: "Niteharts Merch",
    date: "2025",
    tags: ["Merch", "Design"],
    imageFolder: "/design/niteharts",
    client: {
      name: "Niteharts",
      url: "https://www.instagram.com/niteharts/",
    },
    description:
      "Designed the majority of the merch for Niteharts music festival based in San Diego, CA. Worked closely with their creative director Zach Okami to build off of the branding done in collaboration with Studio Pending. We wanted to make designs easily associated with both the aesthetic of the festival itself as well as with the two headliners, ISOxo and Knock2.",
    thumbnails: [
      "/design/niteharts/00.jpg",
      "/design/niteharts/02.jpg",
      "/design/niteharts/NITEHARTS_IG_0000_jersey.jpg",
    ],
  },
  {
    id: 7,
    slug: "zacari-flying-car",
    title: "Zacari — Flying Car",
    date: "2026-08",
    tags: ["Design", "Album Art"],
    imageFolder: "/design/zacari",
    description:
      "Album cover and title card explorations for Zacari's Flying Car.",
    thumbnails: [
      "/design/zacari/fc-album-cover-explore-v2-edit.jpg",
      "/design/zacari/fc-album-cover-explore-v2-02-orange.jpg",
      "/design/zacari/STATIC_COVER_0810.jpg",
      "/design/zacari/SINGLE-EXPLORE-1.jpg",
    ],
  },
  {
    id: 8,
    slug: "prettifun-merch",
    title: "Prettifun Merch",
    date: "2026-09",
    tags: ["Merch", "Design"],
    imageFolder: "/design/prettifun",
    description:
      "Tour merch design for Prettifun, supporting Ken Carson's Xperimenting tour.",
    thumbnails: [
      "/design/prettifun/PRETTIFUN_MERCH_2026_NANINF_MOCKUP_BLACK_TEE.jpg",
      "/design/prettifun/PRETTIFUN_MERCH_2026_NANINF_MOCKUP_WHITE_TEE.jpg",
    ],
  },
  {
    id: 9,
    slug: "cashmere-cat-9-vinyl",
    title: "Cashmere Cat — 9 Vinyl Concept",
    date: "2026-04",
    tags: ["Design", "Concept"],
    imageFolder: "/design/concepts",
    description:
      "Personal concept design for a vinyl release of Cashmere Cat's 9 — packaging and tracklist artwork exploration.",
    thumbnails: [
      "/design/concepts/CASHMERE CAT 9 VINYLArtboard 3.jpg",
      "/design/concepts/9-Vinyl-Concept-NEW_0000_1.jpg",
      "/design/concepts/9-Vinyl-Concept-NEW_0002_3.jpg",
      "/design/concepts/9-Vinyl-Concept-NEW_0004_5.jpg",
    ],
  },
  {
    id: 10,
    slug: "isoxo-ftsu",
    title: "ISOxo FTSU",
    date: "2026-02",
    tags: ["Design"],
    imageFolder: "/design/isoxo-ftsu",
    description: "Single artwork and promo design for ISOxo's FTSU.",
    thumbnails: [
      "/design/isoxo-ftsu/iso_ftsu_1.jpg",
      "/design/isoxo-ftsu/iso_ftsu_2.jpg",
      "/design/isoxo-ftsu/ftsu-gif.gif",
    ],
  },
];

export function formatDate(date: string): string {
  const match = date.match(/^(\d{4})-(\d{2})$/);
  if (!match) return date;
  const [, year, month] = match;
  return new Date(Number(year), Number(month) - 1).toLocaleDateString(
    "en-US",
    { month: "short", year: "numeric" }
  );
}

export function sortedProjects(list: Project[] = projects): Project[] {
  return [...list].sort((a, b) => (a.date < b.date ? 1 : -1));
}
