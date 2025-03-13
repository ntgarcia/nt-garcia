"use client";

import Image from "next/image";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  slug: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "NewYYC",
    description:
      "World Usability Day 2024 Winner — Empowering the underrepresented.",
    tags: ["UX", "Web Dev", "Design"],
    imageUrl: "/newyyc/cover.png",
    slug: "newyyc",
  },
  {
    id: 2,
    title: "MRUHacks 2025",
    description:
      "Leading marketing and design for Mount Royal University's annual hackathon.",
    tags: ["Marketing", "Design"],
    imageUrl: "/mruhacks/cover.jpg",
    slug: "mruhacks-2025",
  },
  {
    id: 3,
    title: "Do I Care About Lyrics?",
    description:
      "Utilizing Spotify & Genius API's to analyze personal listening habits.",
    tags: ["Python", "Data", "API"],
    imageUrl: "/lyrics/cover.png",
    slug: "lyrics-analysis",
  },
  {
    id: 4,
    title: "CAIL",
    description:
      "2024 SAIT Capstone Project 2024 for the Canadian Alliance for Intergenerational Living.",
    tags: ["Full Stack", "Web Dev", "UX"],
    imageUrl: "/cail/cail-preview.png",
    slug: "cail",
  },
];

export default function Works() {
  return (
    <section id="works" className="py-20 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* <div className="mb-12 text-center">
          <h2 className="text-3xl font-mono text-primary mb-4">
            ˗ˏˋ Selected Worksˎˊ˗
          </h2>
          <p className="font-mono text-muted">
            Check out my projects below
          </p>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="block overflow-hidden bg-background rounded-sm transition-transform hover:scale-[1.01] clickable"
            >
              <div className="aspect-w-16 aspect-h-9 relative h-[200px] sm:h-[250px] w-full">
                <div className="absolute inset-0 flex items-center justify-center bg-secondary/10">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-lg font-mono text-primary">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs font-mono border bg-secondary/10 px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="font-mono text-muted text-sm">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
