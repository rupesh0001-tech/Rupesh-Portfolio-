import axios from "axios";

import GitHubCalendarClient from "./GitHubCalendarClient";

// Fetch GitHub contribution count server-side
const getGitHubContributions = async (): Promise<number | null> => {
  try {
    const token = process.env.GITHUB_PATH;
    if (!token) return null;

    const res = await axios.post(
      "https://api.github.com/graphql",
      {
        query: `query {
          user(login: "kaihere14") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
              }
            }
          }
        }`,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return res?.data?.data?.user?.contributionsCollection?.contributionCalendar
      ?.totalContributions;
  } catch (error) {
    console.error("Failed to fetch GitHub contributions:", error);
    return null;
  }
};

const GitHub = async () => {
  const contributions = await getGitHubContributions();

  return (
    <section className="mt-15">
      {/* Header */}
      <div className="mb-6">
        <p className="mb-1 text-sm font-medium tracking-wider text-neutral-500 uppercase">
          Open Source
        </p>
        <h2 className="text-3xl font-bold tracking-tight">GitHub Activity</h2>
      </div>

      {/* Card */}
      <div className="rounded-2xl border bg-neutral-50 p-6 shadow-sm transition-all md:p-10 dark:bg-neutral-900/50">
        {/* Stats Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Total:{" "}
              <span className="font-mono font-semibold text-emerald-500">
                {contributions
                  ? contributions.toLocaleString()
                  : " almost 1,000+"}
              </span>{" "}
              contributions this year
            </p>
          </div>

          {/* GitHub Profile Link */}
          <a
            href="https://github.com/rupesh0001-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 shadow-[0_4px_0_0_rgba(0,0,0,0.15)] transition-all hover:translate-y-[2px] hover:border-neutral-400 hover:bg-neutral-200 hover:shadow-[0_2px_0_0_rgba(0,0,0,0.15)] active:translate-y-[4px] active:shadow-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:shadow-[0_4px_0_0_rgba(0,0,0,0.4)] dark:hover:border-neutral-600 dark:hover:bg-neutral-700 dark:hover:shadow-[0_2px_0_0_rgba(0,0,0,0.4)] dark:active:shadow-none"
          >
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View Profile
          </a>
        </div>

        {/* GitHub Calendar */}
        <GitHubCalendarClient username="rupesh0001-tech" />
      </div>

      <hr className="mt-15" />
    </section>
  );
};

export default GitHub;
