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
      <main className="pt-20 pb-32">
        <div className="px-4 md:px-8 mb-8">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xl font-medium tracking-tight text-black hover:opacity-70 transition-opacity"
            >
              <span>←</span>
              <span>Work</span>
            </Link>
          </div>
        </div>

        <div className="px-4 md:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <div className="flex flex-col items-start text-left">
                <div className="space-y-2">
                  <h1 className="text-3xl md:text-4xl font-medium text-black tracking-tight">
                    {project.title}
                  </h1>
                  {project.client && (
                    <div className="text-xl font-medium text-black tracking-tight">
                      Client:{" "}
                      <a
                        href={project.client.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {project.client.name}
                      </a>
                    </div>
                  )}
                  <div className="text-xl font-medium text-black tracking-tight">
                    {formatDate(project.date)}
                  </div>
                  {project.tags.length > 0 && (
                    <div className="text-sm uppercase tracking-wide text-[#9c9c9c]">
                      {project.tags.join(", ")}
                    </div>
                  )}
                </div>
              </div>

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

        {!loading && (
          <div className="px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                {allImages.map((image, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="relative w-full overflow-hidden">
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-auto object-cover rounded-xl"
                        loading={index === 0 ? "eager" : "lazy"}
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
