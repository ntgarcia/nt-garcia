"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { formatDate, sortedProjects, type Project } from "../data/projects";
import Lightbox from "./Lightbox";

const ProjectRow = ({
  project,
  onImageClick,
}: {
  project: Project;
  onImageClick: (index: number) => void;
}) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = rowRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateScrollState();
    const el = rowRef.current;
    if (!el) return;

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(el);
    window.addEventListener("resize", updateScrollState);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateScrollState);
    };
  }, [project.thumbnails]);

  const scrollByAmount = (direction: 1 | -1) => {
    const el = rowRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="py-6 border-t border-black/10">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-3">
        <div className="flex items-baseline gap-4">
          <span className="text-[#666666]">{formatDate(project.date)}</span>
          <h3 className="font-medium text-black">{project.title}</h3>
        </div>
        <div className="flex items-baseline gap-4">
          {project.tags.length > 0 && (
            <p className="text-[#666666]">{project.tags.join(", ")}</p>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="font-medium text-black underline hover:opacity-70 transition-opacity"
          >
            View Project
          </Link>
        </div>
      </div>

      <div className="relative">
        <div
          ref={rowRef}
          onScroll={updateScrollState}
          className="flex gap-1 overflow-x-auto scroll-smooth"
        >
          {project.thumbnails.map((src, index) => (
            <button
              key={index}
              onClick={() => onImageClick(index)}
              className="flex-shrink-0 cursor-zoom-in"
            >
              <img
                src={src}
                alt={project.title}
                onLoad={updateScrollState}
                className="h-[260px] sm:h-[360px] md:h-[480px] w-auto object-cover opacity-100 hover:opacity-70 transition-opacity"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {canScrollLeft && (
          <button
            onClick={() => scrollByAmount(-1)}
            aria-label="Scroll images left"
            className="absolute left-0 top-1/2 -translate-y-1/2 h-9 w-9 flex items-center justify-center bg-white/90 border border-black/10 text-black hover:opacity-70 transition-opacity"
          >
            ‹
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scrollByAmount(1)}
            aria-label="Scroll images right"
            className="absolute right-0 top-1/2 -translate-y-1/2 h-9 w-9 flex items-center justify-center bg-white/90 border border-black/10 text-black hover:opacity-70 transition-opacity"
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
};

export default function Works() {
  const projects = sortedProjects();
  const [lightbox, setLightbox] = useState<{
    project: Project;
    index: number;
  } | null>(null);

  return (
    <section id="works" className="py-6">
      <div className="border-b border-black/10">
        {projects.map((project) => (
          <ProjectRow
            key={project.id}
            project={project}
            onImageClick={(index) => setLightbox({ project, index })}
          />
        ))}
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.project.thumbnails}
          title={lightbox.project.title}
          index={lightbox.index}
          onIndexChange={(index) =>
            setLightbox((current) => (current ? { ...current, index } : current))
          }
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
