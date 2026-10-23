"use client";

import { useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";

import ProjectCard from "./ProjectCard";
import { ProjectType } from "./Projects";

interface ProjectsGridProps {
  projects: ProjectType[];
  initialCount?: number;
}

const ProjectsGrid = ({ projects, initialCount = 4 }: ProjectsGridProps) => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, initialCount);
  const hasMore = projects.length > initialCount;

  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <div
            key={project.id}
            className="h-full"
            style={{
              opacity: 1,
              transform: "translateY(0)",
              animation:
                showAll && index >= initialCount
                  ? `fadeSlideIn 0.4s ease-out ${(index - initialCount) * 0.1}s both`
                  : "none",
            }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex cursor-pointer items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-6 py-2.5 text-sm font-medium text-neutral-700 shadow-[0_4px_0_0_rgba(0,0,0,0.15)] transition-all hover:translate-y-[2px] hover:border-neutral-400 hover:bg-neutral-200 hover:shadow-[0_2px_0_0_rgba(0,0,0,0.15)] active:translate-y-[4px] active:shadow-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:shadow-[0_4px_0_0_rgba(0,0,0,0.4)] dark:hover:border-neutral-600 dark:hover:bg-neutral-700 dark:hover:shadow-[0_2px_0_0_rgba(0,0,0,0.4)] dark:active:shadow-none"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5"
                />
              </>
            ) : (
              <>
                Show More ({projects.length - initialCount} more)
                <ChevronDown
                  size={16}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </>
            )}
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default ProjectsGrid;
