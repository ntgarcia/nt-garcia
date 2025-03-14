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
  "/design/ryushinju/ig-preview.png",
  "/design/ryushinju/logo-full.png"
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
    id: 2,
    imageUrl: "/mruhacks/cover.jpg",
    slug: "mruhacks-2025",
    height: 320,
    title: "MRUHacks 2025",
    tags: ["Marketing", "Design"],
    type: "project",
  },
  {
    id: 3,
    imageUrl: "/cail/cail-preview.png",
    slug: "cail",
    height: 350,
    title: "CAIL",
    tags: ["Full Stack", "Web Dev"],
    type: "project",
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


  // Slideshows at the bottom
  {
    id: 5,
    imageUrl: "/mruhacks/cover.jpg",
    slug: "",
    height: 400,
    title: "MRUHacks Design",
    tags: [],
    type: "slideshow",
    slideshowImages: mruhacksImages,
  },
  {
    id: 6,
    imageUrl: "/design/ryushinju/logo-full.png",
    slug: "",
    height: 350,
    title: "Ryushinju Branding",
    tags: [],
    type: "slideshow",
    slideshowImages: ryushinjuImages,
  },
  {
    id: 7,
    imageUrl: "/design/bolder/beats.png",
    slug: "",
    height: 380,
    title: "Bolder Climbing",
    tags: [],
    type: "slideshow",
    slideshowImages: bolderImages,
  },
];

// Framer Motion variants for animations
const projectCardVariants = {
  initial: { 
    scale: 1,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
  },
  hover: { 
    scale: 1.02, 
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
  }
};

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.7 } }
};

const overlayVariants = {
  initial: { opacity: 0 },
  hover: { opacity: 1 }
};

const textContainerVariants = {
  initial: { y: 10, opacity: 0 },
  hover: { 
    y: 0, 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const textItemVariants = {
  initial: { y: 10, opacity: 0 },
  hover: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.3 }
  }
};

// Memoize the ProjectItem component to prevent unnecessary re-renders
const ProjectItem = memo(({ project, onHoverStart, onHoverEnd }: { 
  project: Project, 
  onHoverStart: (project: Project) => void, 
  onHoverEnd: () => void 
}) => {
  // For slideshow type, render the image loop component but don't include hover effects
  if (project.type === "slideshow" && project.slideshowImages) {
    return (
      <div className="relative w-full rounded-lg overflow-hidden shadow-md">
        <ImageLoop 
          images={project.slideshowImages} 
          height={project.height || 400} 
        />
      </div>
    );
  }
  
  // Regular project with link and hover effects
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <motion.div
        className="relative w-full overflow-hidden rounded-lg"
        initial="initial"
        whileHover="hover"
        variants={projectCardVariants}
        onHoverStart={() => onHoverStart(project)}
        onHoverEnd={onHoverEnd}
      >
        <div 
          className="relative w-full overflow-hidden" 
          style={{ height: `${project.height || 300}px` }}
        >
          <motion.div className="absolute inset-0" variants={imageVariants}>
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </motion.div>
          
          {/* Gradient overlay and text */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
            variants={overlayVariants}
          >
            <motion.div 
              className="absolute inset-x-0 bottom-0 p-4 text-white"
              variants={textContainerVariants}
            >
              <motion.h3 className="text-lg font-mono mb-2" variants={textItemVariants}>
                {project.title}
              </motion.h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    className="px-2 py-1 text-xs font-mono bg-white/20 backdrop-blur-sm rounded-sm"
                    variants={textItemVariants}
                    custom={index}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
});

// Set display name for debugging
ProjectItem.displayName = 'ProjectItem';

export default function Works() {
  // Simplified state for custom cursor
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredItem, setHoveredItem] = useState<Project | null>(null);
  const mouseMoveThrottleRef = useRef<number>(0);

  // Track mouse position with throttling to reduce renders
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse move updates to avoid excessive re-renders
      if (Date.now() - mouseMoveThrottleRef.current > 50) {
        setMousePosition({ x: e.clientX, y: e.clientY });
        mouseMoveThrottleRef.current = Date.now();
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Get hover text based on project type
  const getHoverText = (type: ProjectType) => {
    switch (type) {
      case "project": return "View Project";
      case "experiment": return "See Experiment";
      case "art": return "View Artwork";
      case "tweet": return "Read Thoughts";
      case "design": return "Explore Design";
      case "slideshow": return ""; // Return empty string for slideshows
      default: return "View Details";
    }
  };

  // Group projects into columns for a masonry-like layout
  const getColumnProjects = () => {
    const columns = {
      col1: [] as Project[],
      col2: [] as Project[],
      col3: [] as Project[]
    };
    
    projects.forEach((project, index) => {
      if (index % 3 === 0) columns.col1.push(project);
      else if (index % 3 === 1) columns.col2.push(project);
      else columns.col3.push(project);
    });
    
    return columns;
  };
  
  const columnProjects = getColumnProjects();
  
  // Handlers for hover events
  const handleHoverStart = (project: Project) => {
    setHoveredItem(project);
  };
  
  const handleHoverEnd = () => {
    setHoveredItem(null);
  };
  
  return (
    <section id="works" className="py-20 px-4 md:px-8 relative">
      {/* Custom cursor */}
      <AnimatePresence>
        {hoveredItem && hoveredItem.type !== "slideshow" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed pointer-events-none z-50 flex items-center justify-center"
            style={{ 
              position: "fixed",
              left: mousePosition.x,
              top: mousePosition.y,
              transform: "translate(-50%, -50%)"
            }}
          >
            <span className="bg-black text-white px-3 py-1 text-sm font-mono rounded-full whitespace-nowrap transform -translate-y-8">
              {getHoverText(hoveredItem.type)}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {columnProjects.col1.map((project) => (
              <ProjectItem 
                key={project.id} 
                project={project} 
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
              />
            ))}
          </div>
          
          {/* Column 2 - Only visible on md screens and up */}
          <div className="hidden md:flex flex-col gap-6">
            {columnProjects.col2.map((project) => (
              <ProjectItem 
                key={project.id} 
                project={project}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
              />
            ))}
          </div>
          
          {/* Column 3 - Only visible on lg screens and up */}
          <div className="hidden lg:flex flex-col gap-6">
            {columnProjects.col3.map((project) => (
              <ProjectItem 
                key={project.id} 
                project={project}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
              />
            ))}
          </div>
          
          {/* For mobile, show all projects in a single column */}
          <div className="md:hidden flex flex-col gap-6">
            {[...columnProjects.col2, ...columnProjects.col3].map((project) => (
              <ProjectItem 
                key={project.id} 
                project={project}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
