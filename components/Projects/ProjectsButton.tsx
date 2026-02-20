import React from "react";

import Link from "next/link";

import { Globe } from "lucide-react";

const ProjectsButton = ({
  githubLink,
  link,
}: {
  githubLink: string;
  link: string;
}) => {
  return (
    <div className="flex items-center gap-2">
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-neutral-500 transition-colors hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300`}
      >
        <Globe size={18} />
      </Link>
    </div>
  );
};

export default ProjectsButton;
