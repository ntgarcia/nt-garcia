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
    title: "Canadian Alliance for Intergenerational Living",
    description:
      "SAIT Capstone Project 2023",
    tags: ["Full Stack", "Web Dev", "UX"],
    imageUrl: "/cail/cail-preview.png",
    slug: "cail",
  },
];

export default function Works() {
  return (
    <section id="works" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-mono text-primary mb-4">
            ˗ˏˋ Selected Worksˎˊ˗
          </h2>
          <p className="font-mono text-muted">
            Check out my projects below
          </p>
        </div>

        <div className="space-y-12 sm:space-y-20">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              href={`/projects/${project.slug}`}
              className="block overflow-hidden bg-background rounded-sm transition-transform hover:scale-[1.01] clickable"
            >
              <div className="aspect-w-16 aspect-h-9 relative h-[200px] sm:h-[300px] md:h-[400px] w-full my-2">
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
                <h3 className="text-xl sm:text-2xl font-mono text-primary mb-2">
                  {project.title}
                </h3>
                <p className="font-mono text-muted text-sm sm:text-base mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs sm:text-sm font-mono border bg-secondary/10 px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
