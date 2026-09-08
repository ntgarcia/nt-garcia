"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  allTags,
  formatDate,
  sortedProjects,
  type Project,
} from "../data/projects";

const ProjectRow = ({ project }: { project: Project }) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start py-8 border-t border-black/10"
    >
      <div className="md:col-span-2 text-sm uppercase tracking-wide text-[#9c9c9c]">
        {formatDate(project.date)}
      </div>

      <div className="md:col-span-3">
        <h3 className="text-lg md:text-xl font-medium tracking-tight text-black group-hover:opacity-60 transition-opacity">
          {project.title}
        </h3>
        {project.tags.length > 0 && (
          <p className="mt-1 text-sm tracking-tight text-[#9c9c9c]">
            {project.tags.join(", ")}
          </p>
        )}
      </div>

      <div className="md:col-span-7 flex gap-3 overflow-x-auto md:overflow-visible">
        {project.thumbnails.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={project.title}
            className="h-32 md:h-36 w-auto flex-shrink-0 object-cover rounded-md group-hover:opacity-80 transition-opacity"
            loading="lazy"
          />
        ))}
      </div>
    </Link>
  );
};

export default function Works() {
  const [activeTag, setActiveTag] = useState<string>("All");
  const tags = useMemo(() => ["All", ...allTags()], []);
  const projects = useMemo(() => sortedProjects(), []);
  const filtered = useMemo(
    () =>
      activeTag === "All"
        ? projects
        : projects.filter((project) => project.tags.includes(activeTag)),
    [activeTag, projects]
  );

  return (
    <section id="works" className="py-12">
      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-sm uppercase tracking-wide">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={
              tag === activeTag
                ? "text-black underline underline-offset-4"
                : "text-[#9c9c9c] hover:text-black transition-colors"
            }
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="border-b border-black/10">
        {filtered.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
