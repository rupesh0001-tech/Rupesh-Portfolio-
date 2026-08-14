import React from "react";

import Link from "next/link";

import { Github, Globe } from "lucide-react";

const ProjectsButton = ({
  githubLink,
  link,
}: {
  githubLink?: string;
  link?: string;
}) => {
  return (
    <div className="flex items-center gap-2">
      {githubLink && githubLink !== "#" && (
        <Link
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          title="View GitHub Repository"
          className="text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
        >
          <Github size={18} />
        </Link>
      )}
      {link && link !== "#" && (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          title="View Live Demo"
          className="text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
        >
          <Globe size={18} />
        </Link>
      )}
    </div>
  );
};

export default ProjectsButton;
