import type { Project } from "../data/projects";
import manifest from "../data/image-manifest.json";

const imagesByFolder: Record<string, string[]> = manifest;

/** Every image in a project's imageFolder(s), falling back to its thumbnails. */
export function projectImages(project: Project): string[] {
  if (!project.imageFolder) return project.thumbnails;

  const folders = Array.isArray(project.imageFolder)
    ? project.imageFolder
    : [project.imageFolder];
  const images = folders.flatMap((folder) => imagesByFolder[folder] ?? []);

  return images.length > 0 ? images : project.thumbnails;
}
