"use client";

import Link from "next/link";
import { formatDate, sortedProjects, type Project } from "../data/projects";

const ProjectRow = ({ project }: { project: Project }) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block py-12 md:py-16 border-t border-divider first:border-t-0"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-4">
        <div className="flex items-baseline gap-4">
          <span className="text-sm italic text-secondary">
            {formatDate(project.date)}
          </span>
          <h3 className="text-2xl md:text-[28px] font-bold text-black group-hover:opacity-60 transition-opacity">
            {project.title}
          </h3>
        </div>
        {project.tags.length > 0 && (
          <p className="text-sm italic text-secondary">
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
    <section id="works">
      {projects.map((project) => (
        <ProjectRow key={project.id} project={project} />
      ))}
    </section>
  );
}
