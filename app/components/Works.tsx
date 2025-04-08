"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageLoop from "./ImageLoop";

type ProjectType = "project" | "experiment" | "art" | "tweet" | "design" | "slideshow";

type Project = {
  id: number;
  imageUrl: string;
  slug: string;
  height?: number; // Optional height parameter for varying image heights
  title: string;
  tags: string[];
  type: ProjectType;
  slideshowImages?: string[]; // Optional array of images for slideshow
  externalUrl?: string; // Optional external URL for linking to external sites
};

const mruhacksImages = [
  "/design/mruhacks/Instagram post - 3.png",
  "/design/mruhacks/Instagram post - 4.png",
  "/design/mruhacks/Instagram post - 5.png",
  "/design/mruhacks/Instagram post - 6.png",
  "/design/mruhacks/Instagram post - 7.png",
  "/design/mruhacks/icon.png",
  "/design/mruhacks/logotype - space.png",
];

const ryushinjuImages = [
  "/design/ryushinju/logo-full.png",
  "/design/ryushinju/logo-icon.png",
  "/design/ryushinju/logo-word.png",
  "/design/ryushinju/ig-preview.png",
];

const bolderImages = [
  "/design/bolder/winter community night.png",
  "/design/bolder/triple threat finals.png",
  "/design/bolder/triple threat finals - RESULTS MEN.png",
  "/design/bolder/triple threat finals - RESULTS WOMEN.png",
  "/design/bolder/ladies night.png",
  "/design/bolder/edge pricing.png",
  "/design/bolder/beats.png",
];

const chiasImages = [
  "/design/chias/icon.png",
  "/design/chias/logo.png",
  "/design/chias/promo post.png",
  "/design/chias/Instagram post - 30.png",
];

const artImages = [
  "/design/etc/arcy.jpg",
  "/design/etc/lake.jpg",
  "/design/etc/ubc.jpg",
]

const logoImages = [
  "/design/etc/field.jpg",
  "/design/etc/royala.jpg",
  "/design/etc/turnt.jpg",
  "/design/etc/yeno.jpg",
]

const osuImages = [
  "/design/osumouse/bp.png",
  "/design/osumouse/b.png",
  "/design/osumouse/p.png",
]

// Reorganized projects - actual projects first, slideshows at the bottom
const projects: Project[] = [
  // Actual projects at the top
  {
    id: 1,
    imageUrl: "/newyyc/cover.png",
    slug: "newyyc",
    height: 300,
    title: "NewYYC",
    tags: ["UX", "Web Dev"],
    type: "project",
  },
  {
    id: 5,
    imageUrl: "/movieclub/movieclub.gif",
    slug: "movie-club",
    height: 300,
    title: "CC Movie Club",
    tags: ["Web Dev", "Front End"],
    type: "experiment",
    externalUrl: "https://www.creamcheese.club/",
  },
  {
    id: 2,
    imageUrl: "/mruhacks/cover.jpg",
    slug: "mruhacks-2025",
    height: 280,
    title: "MRUHacks 2025",
    tags: ["Marketing", "Design"],
    type: "project",
  },
  {
    id: 3,
    imageUrl: "/cail/cail-preview.png",
    slug: "cail",
    height: 260,
    title: "CAIL",
    tags: ["Full Stack", "Web Dev"],
    type: "project",
  },

  {
    id: 6,
    imageUrl: "/design/mruhacks/mruhacksreel-1.gif",
    slug: "",
    height: 600,
    title: "MRUHacks Reel",
    tags: [],
    type: "slideshow",
  },
  {
    id: 4,
    imageUrl: "/lyrics/cover.png",
    slug: "lyrics-analysis",
    height: 250,
    title: "Do I Care About Lyrics?",
    tags: ["Python", "Data"],
    type: "experiment",
  },
  {
    id: 12,
    imageUrl: "/design/etc/field.jpg",
    slug: "",
    height: 300,
    title: "Logo Designs",
    tags: [],
    type: "slideshow",
    slideshowImages: logoImages,
  },
  {
    id: 14,
    imageUrl: "/design/osumouse/bp.png",
    slug: "",
    height: 320,
    title: "osu! Mouse",
    tags: [],
    type: "slideshow",
    slideshowImages: osuImages,
  },


  {
    id: 13,
    imageUrl: "/design/etc/spinback.png",
    slug: "",
    height: 600,
    title: "Spinback",
    tags: [],
    type: "slideshow",
  },



  // {
  //   id: 7,
  //   imageUrl: "/mruhacks/cover.jpg",
  //   slug: "",
  //   height: 400,
  //   title: "MRUHacks Design",
  //   tags: [],
  //   type: "slideshow",
  //   slideshowImages: mruhacksImages,
  // },
  {
    id: 10,
    imageUrl: "/design/chias/icon.png",
    slug: "",
    height: 400,
    title: "Chia's Beads",
    tags: [],
    type: "slideshow",
    slideshowImages: chiasImages,
  },
  {
    id: 11,
    imageUrl: "/design/etc/arcy.jpg",
    slug: "",
    height: 600,
    title: "Plein April",
    tags: [],
    type: "slideshow",
    slideshowImages: artImages,
  },
  {
    id: 8,
    imageUrl: "/design/ryushinju/logo-full.png",
    slug: "",
    height: 400,
    title: "Ryushinju Branding",
    tags: [],
    type: "slideshow",
    slideshowImages: ryushinjuImages,
  },


  {
    id: 9,
    imageUrl: "/design/bolder/beats.png",
    slug: "",
    height: 400,
    title: "Bolder Climbing",
    tags: [],
    type: "slideshow",
    slideshowImages: bolderImages,
  },



];

// Memoize the ProjectItem component to prevent unnecessary re-renders
const ProjectItem = memo(({ project }: { 
  project: Project, 
}) => {
  // For slideshow type, render the image loop component but don't include hover effects
  if (project.type === "slideshow") {
    // If it has slideshowImages, use ImageLoop component with a smaller fixed height
    if (project.slideshowImages) {
      return (
        <div className="relative w-full rounded-lg overflow-hidden">
          <ImageLoop 
            images={project.slideshowImages} 
          />
        </div>
      );
    }
    // If it's a single image/gif slideshow (no slideshowImages array)
    return (
      <div className="relative w-full rounded-lg overflow-hidden">
        {/* Removed fixed height style */}
        <div className="relative">
          {/* Use regular img tag for GIFs, ensure w-full h-auto */}
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-auto object-cover block rounded-sm ring-1 ring-inset ring-black/10"
            loading="lazy"
          />
        </div>
      </div>
    );
  }
  
  // Determine if we should use an external link
  const LinkWrapper = ({ children }: { children: React.ReactNode }) => {
    if (project.externalUrl) {
      return (
        <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="block">
          {children}
        </a>
      );
    }
    return <Link href={`/projects/${project.slug}`} className="block">{children}</Link>;
  };
  
  // Regular project with link but no hover effects
  return (
    <LinkWrapper>
      <div className="relative w-full overflow-hidden rounded-lg">
        <div 
          className="relative w-full overflow-hidden" 
          // Removed fixed height style
        >
          {/* Switched to standard img tag with w-full h-auto */}
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-auto object-cover block rounded-sm ring-1 ring-inset ring-black/10"
            loading="lazy"
          />
          
          {/* Progressive blur effect using the CodePen technique */}
          <div 
            className="absolute inset-x-0 bottom-0 h-full"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0) 70%)',
            }}
          >
            {/* Progressive blur container with mask and @supports rule */}
            <style jsx>{`
              @supports ((-webkit-backdrop-filter: blur(12px)) or (backdrop-filter: blur(12px))) {
                .backdrop-blur {
                  -webkit-backdrop-filter: blur(40px);
                  backdrop-filter: blur(40px);
                  background-color: transparent !important;
                }
                .fallback-blur {
                  display: none;
                }
              }
            `}</style>
            
            <div 
              className="backdrop-blur absolute inset-0"
              style={{
                maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 5%, rgba(0,0,0,0.95) 10%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0) 70%)',
                WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 5%, rgba(0,0,0,0.95) 10%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0) 70%)',
              }}
            />
            
            {/* Fallback for browsers that don't support backdrop-filter */}
            <div 
              className="fallback-blur absolute inset-0 bg-black/70"
              style={{
                maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 5%, rgba(0,0,0,0.95) 10%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0) 70%)',
                WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 5%, rgba(0,0,0,0.95) 10%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0) 70%)',
              }}
            />
            
            {/* Content container */}
            <div className="absolute inset-x-0 bottom-0 p-4 text-white">
              <h3 className="text-lg text-white mb-2">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-white/20 backdrop-blur-sm rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </LinkWrapper>
  );
});

// Set display name for debugging
ProjectItem.displayName = 'ProjectItem';

export default function Works() {
  // Remove all hover-related state and effects
  
  // Group projects into columns for a masonry-like layout
  const getColumnProjects = () => {
    const columns = {
      col1: [] as Project[],
      col2: [] as Project[],
      col3: [] as Project[] // Re-added col3
    };
    
    // Reverted logic to distribute into 3 columns
    projects.forEach((project, index) => {
      if (index % 3 === 0) columns.col1.push(project);
      else if (index % 3 === 1) columns.col2.push(project);
      else columns.col3.push(project);
    });
    
    return columns;
  };
  
  const columnProjects = getColumnProjects();
  
  return (
    <section id="works" className=" py-10 md:py-20 px-4 md:px-8 relative">
      {/* Further reduced max-width to make columns narrower */}
      <div className="max-w-5xl mx-auto">
        {/* Reverted grid to 3 columns on large screens: lg:grid-cols-3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {columnProjects.col1.map((project) => (
              <ProjectItem 
                key={project.id} 
                project={project}
              />
            ))}
          </div>
          
          {/* Column 2 - Only visible on md screens and up */}
          <div className="hidden md:flex flex-col gap-6">
            {columnProjects.col2.map((project) => (
              <ProjectItem 
                key={project.id} 
                project={project}
              />
            ))}
          </div>
          
          {/* Column 3 - Re-added, only visible on lg screens and up */}
          <div className="hidden lg:flex flex-col gap-6">
            {columnProjects.col3.map((project) => (
              <ProjectItem 
                key={project.id} 
                project={project}
              />
            ))}
          </div>
          
          {/* For mobile, show col2 and col3 items below col1 */}
          <div className="md:hidden flex flex-col gap-6">
            {[...columnProjects.col2, ...columnProjects.col3].map((project) => (
              <ProjectItem 
                key={project.id} 
                project={project}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
