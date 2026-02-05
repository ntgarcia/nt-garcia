"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";

type Project = {
  id: number;
  title: string;
  description?: string;
  tags: string[];
  imageUrl: string;
  slug: string;
  slideshowImages?: string[];
  imageFolder?: string; // Path to folder containing images (e.g., "/design/niteharts")
  client?: string;
  year?: string;
};

// Import projects from Works component - matching structure
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
    imageUrl:
      "/design/niteharts/nh_merch_0000_hoodie-fix.png",
    slug: "niteharts-merch",
    title: "Niteharts Merch",
    tags: ["2025", "Merch", "Design"],
    imageFolder: "/design/niteharts", // Automatically loads all images from this folder
    description:
      "Designed the majority of the merch for Niteharts music festival based in San Diego, CA. Worked closely with their creative director Zach Okami to build off of the branding done in collaboration with Studio Pending. We wanted to make designs easily associated with both the aesthetic of the festival itself as well as with the two headliners of the festival, ISOxo and Knock2.",
    client: "Niteharts",
    year: "2025",
  },
  {
    id: 2,
    imageUrl: "/design/knock2/K2_NY_5_EDITS_2.jpg",
    slug: "knock2-ny-flyer",
    title: "Knock2 NY Flyer",
    tags: ["2024", "Design", "Flyer"],
    imageFolder: "/design/k2-ny",
    description:
      "Visual and graphic design for Knock2's show run for 2026 (Continuously updated).",
    year: "2025 - Present",
  },
  {
    id: 4,
    imageUrl: "/design/mruhacks/mruhacksreel-1.gif",
    slug: "mruhacks2025",
    title: "MRUHacks 2025",
    tags: ["2025", "Marketing", "Design"],
    imageFolder: "/design/mruhacks", // Automatically loads all images from this folder
    description:
      "As the marketing lead for MRUHacks 2025, I helmed the branding, design, and overall social media presence for the hackathon. Along with my team consisting of our graphic designer Jashan Singh, social media strategist Meagan Valderrama, and copywriter Sage Odesanya, we delivered a fresh new look to the event.",
    year: "2025",
  },
  {
    id: 5,
    imageUrl: "/design/k2-sf/knock2-sf-flyer-alt.jpg",
    slug: "knock2-sf-flyer",
    title: "Knock2 SF Flyer",
    tags: ["2024", "Design", "Flyer"],
    imageFolder: "/design/k2-sf", // Automatically loads all images from this folder
    description:
      "Event flyer and merch design for Knock2's San Francisco Block Party show.",
    year: "2025",
  },
  {
    id: 6,
    imageUrl: "/design/isoxo/iso_ftsu_1.jpg",
    slug: "isoxo-ftsu-title",
    title: "ISOxo - FTSU Title",
    tags: ["2025", "Title", "Design"],
    imageFolder: "/design/isoxo", // Automatically loads all images from this folder
    description:
      "Title Card design for ISOxo's FTSU Music Video.",
    year: "2025",
  },
  {
    id: 7,
    imageUrl: "/design/etc/oomfrave6.jpg",
    slug: "oomfrave6",
    title: "Oomfrave6 Flyer",
    tags: ["2024", "Design", "Flyer"],
    description: "Event flyer design for Oomfrave6.",
    year: "2024",
  },
  {
    id: 9,
    imageUrl: "/design/ryushinju/logo-full.png",
    slug: "ryushinju",
    title: "Ryushinju",
    tags: ["2025", "Logo", "Concept"],
    imageFolder: "/design/ryushinju", // Automatically loads all images from this folder
    description:
      "Logo and branding design concept for Ryushinju.",
    year: "2025",
  },
  {
    id: 11,
    imageUrl: "/design/etc/eoyf.jpg",
    slug: "eoyf",
    title: "Expression On Your Face Concept",
    tags: ["2024", "Design", "Concept"],
    description:
      "Visual concept based on Mechatok, Ecco2k, Bladee - Expression On Your Face",
    year: "2024",
  },
];

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Load images from folder if imageFolder is specified
  useEffect(() => {
    const loadImages = async () => {
      if (project.imageFolder) {
        try {
          const response = await fetch(
            `/api/images?folder=${encodeURIComponent(
              project.imageFolder
            )}`
          );
          if (response.ok) {
            const data = await response.json();
            setImages(data.images || []);
          } else {
            // Fallback to manual images if API fails
            setImages(
              project.slideshowImages
                ? [
                    project.imageUrl,
                    ...project.slideshowImages,
                  ]
                : [project.imageUrl]
            );
          }
        } catch (error) {
          console.error("Error loading images:", error);
          // Fallback to manual images
          setImages(
            project.slideshowImages
              ? [
                  project.imageUrl,
                  ...project.slideshowImages,
                ]
              : [project.imageUrl]
          );
        }
      } else {
        // Use manual images if no folder specified
        setImages(
          project.slideshowImages
            ? [project.imageUrl, ...project.slideshowImages]
            : [project.imageUrl]
        );
      }
      setLoading(false);
    };

    loadImages();
  }, [project]);

  // Get all images for this project
  const allImages =
    images.length > 0 ? images : [project.imageUrl];

  return (
    <div className="relative min-h-screen bg-white">
      <main className="pt-20 pb-32">
        {/* Back to work button */}
        <div className="px-4 md:px-8 mb-8">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xl font-medium tracking-tight text-black  font-medium hover:opacity-70 transition-opacity"
            >
              <span>←</span>
              <span>Work</span>
            </Link>
          </div>
        </div>

        {/* Title and Description - Two Column Layout */}
        <div className="px-4 md:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* Left Column - Title and Metadata */}
              <div className="flex flex-col items-start text-left">
                <div className="space-y-2">
                  <h1 className="text-3xl md:text-4xl font-medium text-black tracking-tight">
                    {project.title}
                  </h1>
                  {project.client && (
                    <div className="text-xl font-medium text-black tracking-tight">
                      Client:{" "}
                      <span className="underline">
                        {project.client}
                      </span>
                    </div>
                  )}
                  {project.year && (
                    <div className="text-xl font-medium text-black tracking-tight">
                      {project.year}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column - Description */}
              <div className="flex flex-col">
                {project.description && (
                  <p className="text-base md:text-lg text-black font-medium tracking-tight leading-relaxed">
                    {project.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery - 4 column grid like home page - consistent gaps */}
        {!loading && (
          <div className="px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                {allImages.map((image, index) => (
                  <div
                    key={index}
                    className="flex flex-col"
                  >
                    <div className="relative w-full overflow-hidden">
                      <img
                        src={image}
                        alt={`${project.title} - Image ${
                          index + 1
                        }`}
                        className="w-full h-auto object-cover rounded-xl"
                        loading={
                          index === 0 ? "eager" : "lazy"
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
