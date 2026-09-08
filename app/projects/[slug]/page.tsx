"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import { formatDate, projects } from "../../data/projects";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  useEffect(() => {
    const loadImages = async () => {
      if (project.imageFolder) {
        try {
          const response = await fetch(
            `/api/images?folder=${encodeURIComponent(project.imageFolder)}`
          );
          if (response.ok) {
            const data = await response.json();
            setImages(data.images || []);
          } else {
            setImages(project.thumbnails);
          }
        } catch (error) {
          console.error("Error loading images:", error);
          setImages(project.thumbnails);
        }
      } else {
        setImages(project.thumbnails);
      }
      setLoading(false);
    };

    loadImages();
  }, [project]);

  const allImages = images.length > 0 ? images : project.thumbnails;

  return (
    <div className="relative min-h-screen bg-white">
      <main className="max-w-[1000px] mx-auto px-6 md:px-10 pt-24 pb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-black hover:underline mb-10"
        >
          <span>←</span>
          <span>Work</span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16">
          <div className="flex flex-col items-start text-left gap-1">
            <h1 className="text-3xl font-bold text-black">
              {project.title}
            </h1>
            {project.client && (
              <div className="text-base text-black">
                Client:{" "}
                <a
                  href={project.client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {project.client.name}
                </a>
              </div>
            )}
            <div className="text-sm italic text-secondary">
              {formatDate(project.date)}
            </div>
            {project.tags.length > 0 && (
              <div className="text-sm italic text-secondary">
                {project.tags.join(", ")}
              </div>
            )}
          </div>

          {project.description && (
            <p className="font-serif text-base md:text-lg leading-[1.7] text-black">
              {project.description}
            </p>
          )}
        </div>

        {!loading && (
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {allImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-auto object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
