"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { formatDateRange, sortedProjects, type Project } from "../data/projects";
import { optimizedSrc } from "../lib/imageUrl";
import { useProjectImages } from "../lib/useProjectImages";
import Lightbox from "./Lightbox";

/** Project pages aren't ready yet — flip this on once they are. */
const PROJECT_LINKS_ENABLED = false;

/** Descriptions are hidden for now — flip this on to show them under each title. */
const PROJECT_DESCRIPTIONS_ENABLED = false;

const ProjectRow = ({
  project,
  onImageClick,
}: {
  project: Project;
  onImageClick: (images: string[], index: number) => void;
}) => {
  const { images } = useProjectImages(project);
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
  }, [images]);

  const scrollByAmount = (direction: 1 | -1) => {
    const el = rowRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="py-6 border-t border-black/10">
      <div className="flex items-baseline gap-4 mb-3">
        <span className="text-[#666666]">{formatDateRange(project)}</span>
        {PROJECT_LINKS_ENABLED ? (
          <Link
            href={`/projects/${project.slug}`}
            className="font-medium text-black hover:opacity-70 transition-opacity"
          >
            {project.title}
          </Link>
        ) : (
          <h3 className="font-medium text-black">{project.title}</h3>
        )}
      </div>

      {PROJECT_DESCRIPTIONS_ENABLED && project.description && (
        <p className="mb-3 max-w-2xl text-[#666666] leading-relaxed">
          {project.description}
        </p>
      )}

      <div className="relative">
        <div
          ref={rowRef}
          onScroll={updateScrollState}
          className="no-scrollbar flex gap-1 overflow-x-auto scroll-smooth"
        >
          {images.map((src, index) => (
            <button
              key={index}
              onClick={() => onImageClick(images, index)}
              className="flex-shrink-0 cursor-zoom-in"
            >
              <img
                src={optimizedSrc(src, 828)}
                alt={project.title}
                onLoad={updateScrollState}
                className="h-[260px] sm:h-[360px] md:h-[480px] w-auto object-cover"
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
    title: string;
    images: string[];
    index: number;
  } | null>(null);

  return (
    <section id="works" className="py-6">
      <div className="border-b border-black/10">
        {projects.map((project) => (
          <ProjectRow
            key={project.id}
            project={project}
            onImageClick={(images, index) =>
              setLightbox({ title: project.title, images, index })
            }
          />
        ))}
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          title={lightbox.title}
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
