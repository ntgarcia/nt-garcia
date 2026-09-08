"use client";

import Link from "next/link";
import { formatDate, sortedProjects, type Project } from "../data/projects";

const ProjectRow = ({ project }: { project: Project }) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block py-6 border-t border-black/10"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-3">
        <div className="flex items-baseline gap-4">
          <span className="text-sm uppercase tracking-wide text-[#9c9c9c]">
            {formatDate(project.date)}
          </span>
          <h3 className="text-xl md:text-2xl font-medium tracking-tight text-black group-hover:opacity-60 transition-opacity">
            {project.title}
          </h3>
        </div>
        {project.tags.length > 0 && (
          <p className="text-sm uppercase tracking-wide text-[#9c9c9c]">
            {project.tags.join(", ")}
          </p>
        )}
      </div>

      <div className="flex gap-1 overflow-x-auto">
        {project.thumbnails.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={project.title}
            className="h-[260px] sm:h-[360px] md:h-[480px] w-auto flex-shrink-0 object-cover group-hover:opacity-80 transition-opacity"
            loading="lazy"
          />
        ))}
      </div>
    </Link>
  );
};

export default function Works() {
  const projects = sortedProjects();

  return (
    <section id="works" className="py-6">
      <div className="border-b border-black/10">
        {projects.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
