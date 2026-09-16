"use client";

import { useEffect, useState } from "react";
import type { Project } from "../data/projects";

async function fetchFolderImages(folder: string): Promise<string[]> {
  const response = await fetch(`/api/images?folder=${encodeURIComponent(folder)}`);
  if (!response.ok) return [];
  const data = await response.json();
  return (data.images || []) as string[];
}

/** Loads every image in a project's imageFolder(s), falling back to its thumbnails. */
export function useProjectImages(project: Project | undefined): {
  images: string[];
  loading: boolean;
} {
  const [images, setImages] = useState<string[]>(project?.thumbnails ?? []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    async function load() {
      if (!project) {
        return;
      }

      if (!project.imageFolder) {
        if (!cancelled) {
          setImages(project.thumbnails);
          setLoading(false);
        }
        return;
      }

      const folders = Array.isArray(project.imageFolder)
        ? project.imageFolder
        : [project.imageFolder];

      try {
        const results = await Promise.all(folders.map(fetchFolderImages));
        const allImages = results.flat();
        if (!cancelled) {
          setImages(allImages.length > 0 ? allImages : project.thumbnails);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error loading images:", error);
        if (!cancelled) {
          setImages(project.thumbnails);
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [project]);

  return { images, loading };
}
