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
  /** Folder under /public to read the full gallery from (via /api/images). */
  imageFolder?: string;
  /** Images shown in the homepage thumbnail row, in order. */
  thumbnails: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "knock2-ny-flyer",
    title: "Knock2 Mi22ion",
    date: "2026",
    tags: ["Design", "Flyer"],
    imageFolder: "/design/k2-ny",
    description:
      "Working alongside Zach Okami and Paul Kim to create the visual and graphic design for Knock2's show run (continuously updated).",
    thumbnails: [
      "/design/k2-ny/K2_NY_5_EDITS_2.jpg",
      "/design/k2-ny/k2-radar-try.gif",
      "/design/k2-ny/K2_LOLLA_ID_STORY_EDIT.jpg",
    ],
  },
  {
    id: 2,
    slug: "twin",
    title: "Twin Diplomacy Flyer",
    date: "2026",
    tags: ["Design", "Flyer"],
    description: "Flyer design for the Twin Diplomacy tour.",
    thumbnails: ["/design/twin/twin.jpg"],
  },
  {
    id: 3,
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
    id: 4,
    slug: "mruhacks2025",
    title: "MRUHacks 2025",
    date: "2025",
    tags: ["Marketing", "Design"],
    imageFolder: "/design/mruhacks",
    description:
      "As the marketing lead for MRUHacks 2025, I helmed the branding, design, and overall social media presence for the hackathon. Along with my team — graphic designer Jashan Singh, social media strategist Meagan Valderrama, and copywriter Sage Odesanya — we delivered a fresh new look to the event.",
    thumbnails: [
      "/design/mruhacks/banner.png",
      "/design/mruhacks/registration-post.png",
      "/design/mruhacks/workshop-recap-cover-vol1.jpg",
    ],
  },
  {
    id: 5,
    slug: "knock2-sf-flyer",
    title: "Knock2 Block Party",
    date: "2025",
    tags: ["Design", "Flyer"],
    imageFolder: "/design/k2-sf",
    description:
      "Event flyer and merch design for Knock2's San Francisco Block Party show.",
    thumbnails: [
      "/design/k2-sf/knock2-sf-flyer-full-text.jpg",
      "/design/k2-sf/knock2-sf-flyer-alt.jpg",
      "/design/k2-sf/KNOCK2_SFmockn1.jpg",
    ],
  },
  {
    id: 6,
    slug: "isoxo-ftsu-title",
    title: "ISOxo — FTSU Title",
    date: "2025",
    tags: ["Title", "Design"],
    imageFolder: "/design/isoxo",
    description: "Title card design for ISOxo's FTSU music video.",
    thumbnails: [
      "/design/isoxo/ftsu-gif.gif",
      "/design/isoxo/iso_ftsu_1.jpg",
      "/design/isoxo/iso_ftsu_2.jpg",
    ],
  },
  {
    id: 7,
    slug: "ryushinju",
    title: "Ryushinju",
    date: "2025",
    tags: ["Logo", "Concept"],
    imageFolder: "/design/ryushinju",
    description: "Logo and branding design concept for Ryushinju.",
    thumbnails: [
      "/design/ryushinju/logo-full.png",
      "/design/ryushinju/ig-preview.png",
      "/design/ryushinju/logo-word.png",
    ],
  },
  {
    id: 8,
    slug: "eoyf",
    title: "Expression On Your Face",
    date: "2025",
    tags: ["Design", "Concept"],
    description:
      "Visual concept based on Mechatok, Ecco2k, Bladee — Expression On Your Face.",
    thumbnails: ["/design/etc/eoyf.jpg"],
  },
  {
    id: 9,
    slug: "oomfrave6",
    title: "Oomfrave6 Flyer",
    date: "2024",
    tags: ["Design", "Flyer"],
    description: "Event flyer design for Oomfrave6.",
    thumbnails: ["/design/etc/oomfrave6.jpg"],
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

export function allTags(list: Project[] = projects): string[] {
  const tags = new Set<string>();
  list.forEach((project) => project.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}
