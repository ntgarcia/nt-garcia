"use client";

import Link from "next/link";
import Image from "next/image";

type ProjectType =
  | "project"
  | "experiment"
  | "art"
  | "tweet"
  | "design"
  | "slideshow";

type Project = {
  id: number;
  imageUrl: string;
  slug: string;
  title: string;
  tags: string[];
  type: ProjectType;
  slideshowImages?: string[];
  externalUrl?: string;
};

const nitehartsImages = [
  "/design/niteharts/nh_merch_0000_hoodie-fix.png",
  "/design/niteharts/nh_merch_0000_k2zd.png",
  "/design/niteharts/nh_merch_0001_jersey.png",
  "/design/niteharts/nh_merch_0001_k2.png",
  "/design/niteharts/nh_merch_0002_iso.png",
  "/design/niteharts/nh_merch_0002_keychain.png",
  "/design/niteharts/nh_merch_0003_sun.png",
  "/design/niteharts/nh_merch_0004_sigil.png",
  "/design/niteharts/nh_merch_0005_ad.png",
];

const k2sfImages = [
  "/design/knock2/knock2-sf-flyer-alt.jpg",
  "/design/knock2/knock2-sf-flyer-full-text.jpg",
];

const isoftsuImages = [
  "/design/isoxo/iso_ftsu_1.jpg",
  "/design/isoxo/iso_ftsu_2.jpg",
];

const projects: Project[] = [
  {
    id: 1,
    imageUrl: "/design/niteharts/nh-a.jpg",
    slug: "niteharts-merch",
    title: "Niteharts Merch",
    tags: ["2025", "Merch", "Design"],
    type: "slideshow",
    slideshowImages: nitehartsImages,
  },
  {
    id: 2,
    imageUrl: "/design/k2-ny/k2-gif.gif",
    slug: "knock2-ny-flyer",
    title: "Knock2 Mi22ion",
    tags: ["2026", "Design"],
    type: "slideshow",
  },
  {
    id: 3,
    imageUrl: "/design/isoxo/ftsu-gif.gif",
    slug: "isoxo-ftsu-title",
    title: "ISOxo - FTSU Title",
    tags: ["2025", "Title", "Design"],
    type: "slideshow",
    slideshowImages: isoftsuImages,
  },
  {
    id: 5,
    imageUrl: "/design/etc/oomfrave6.jpg",
    slug: "oomfrave6",
    title: "Oomfrave6 Flyer",
    tags: ["2024", "Design", "Flyer"],
    type: "slideshow",
  },
  {
    id: 4,
    imageUrl: "/design/knock2/knock2-sf-flyer-alt.jpg",
    slug: "knock2-sf-flyer",
    title: "Knock2 SF Flyer",
    tags: ["2024", "Design", "Flyer"],
    type: "slideshow",
    slideshowImages: k2sfImages,
  },
  {
    id: 7,
    imageUrl: "/design/etc/eoyf.jpg",
    slug: "eoyf",
    title: "Expression On Your Face Concept",
    tags: ["2024", "Design", "Concept"],
    type: "slideshow",
  },
];

const ProjectItem = ({ project }: { project: Project }) => {
  const LinkWrapper = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    if (project.externalUrl) {
      return (
        <a
          href={project.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    if (project.slug) {
      return (
        <Link href={`/projects/${project.slug}`}>
          {children}
        </Link>
      );
    }
    return <div>{children}</div>;
  };

  return (
    <LinkWrapper>
      <div className="mt-auto break-inside-avoid mb-6">
        {/* Thumbnail - consistent width, natural height */}
        <div className="">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-auto object-cover rounded-xl"
            loading="lazy"
          />
        </div>

        {/* Title - bold black text */}
        <h3 className="text-xl font-medium text-black tracking-tight mt-3">
          {project.title}
        </h3>

        {/* Tags - lighter grey text */}
        {project.tags.length > 0 && (
          <p className="text-xl font-medium tracking-tight text-[#9c9c9c]">
            {project.tags.join(", ")}
          </p>
        )}
      </div>
    </LinkWrapper>
  );
};

export default function Works() {
  return (
    <section className="py-12">
      <div className="mx-auto">
        {" "}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-4">
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
