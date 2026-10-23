"use client";

import dynamic from "next/dynamic";

// Dynamically import with SSR disabled to avoid hydration mismatch
const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-32 w-full items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-neutral-300 border-t-emerald-500"></div>
      </div>
    ),
  }
);

interface GitHubCalendarClientProps {
  username: string;
  align?: "left" | "center";
  className?: string;
  fullWidth?: boolean;
  blockSize?: number;
}

const GitHubCalendarClient = ({
  username,
  align = "left",
  className = "",
  fullWidth = true,
  blockSize,
}: GitHubCalendarClientProps) => {
  return (
    <div
      className={`flex w-full ${fullWidth ? "calendar-full-width" : "overflow-x-auto"} ${align === "center" ? "justify-center" : "justify-start"} ${className}`}
    >
      <GitHubCalendar
        username={username}
        colorScheme="dark"
        blockSize={blockSize ?? (fullWidth ? 10 : 7)}
        blockMargin={4}
        fontSize={14}
        aria-label="GitHub Contribution Calendar"
      />
    </div>
  );
};

export default GitHubCalendarClient;
