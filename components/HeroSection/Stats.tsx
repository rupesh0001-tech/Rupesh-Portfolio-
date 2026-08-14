import axios from "axios";
import { Code, Cpu, GitBranch, Layers } from "lucide-react";

export const stats = [
  {
    label: "Projects Shipped",
    value: "8+",
    icon: Layers,
  },
  {
    label: "GitHub Commits",
    value: "2k+",
    icon: GitBranch,
  },
  {
    label: "Technologies",
    value: "25+",
    icon: Cpu,
  },
  {
    label: "Lines of Code",
    value: "20k+",
    icon: Code,
  },
];

export const Stats = async () => {
  try {
    const token = process.env.GITHUB_PATH || null;
    if (!token) {
      console.log("No token found");
      return;
    }

    const res = await axios.post(
      "https://api.github.com/graphql",
      {
        query: `query { user(login: "rupesh0001-tech") { contributionsCollection { totalCommitContributions } } }`,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const total =
      res?.data?.data?.user?.contributionsCollection?.totalCommitContributions;

    stats[1].value = total != null ? String(total) : "2k+";
  } catch (err) {
    console.error("GitHub fetch failed:", err);
  }
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 font-bold opacity-60 sm:grid-cols-3 md:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-start gap-2 rounded-2xl border-2 p-4"
        >
          <stat.icon className="text-black dark:text-white" />
          <span>{stat.value}</span>
          <span className="text-xs">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export const PersonalInfo = async () => {
  return (
    <div>
      <div
        className={`col-span-2 my-5 flex items-center justify-between gap-4 rounded-xl border p-4 transition-all duration-300`}
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-1 animate-pulse rounded-full bg-green-500/20"></div>
            <div className="relative z-10 h-2 w-2 rounded-full bg-green-500 transition-transform"></div>
          </div>
          <div className="flex flex-col">
            <span className={`text-xs font-medium tracking-wider uppercase`}>
              Current Focus
            </span>
            <span className={`text-sm font-medium`}>Building DaemonDoc</span>
          </div>
        </div>
        <Code size={18} className="text-neutral-600" />
      </div>
    </div>
  );
};
