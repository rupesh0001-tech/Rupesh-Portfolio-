"use client";

import { ExternalLink, Hash } from "lucide-react";
import { motion } from "motion/react";

const AchievmentCard = () => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group ${ darkMode:bg-[rgb(10,10,10)] relative overflow-hidden rounded-2xl border border-neutral-800 bg-white p-6 transition-all duration-500 hover:border-blue-900/50 dark:bg-neutral-900/90"
    >
      <span className="pointer-events-none absolute -right-2 -bottom-4 font-sans text-[120px] leading-none font-black italic opacity-[0.03] transition-opacity group-hover:opacity-[0.06]">
        18
      </span>

      <div className="relative z-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
              <span className="font-mono text-[10px] font-bold tracking-widest text-blue-500 uppercase">
                Global Finalist Status
              </span>
            </div>

            <h3
              className={`text-3xl font-black tracking-tighter uppercase italic`}
            >
              HackFest 2025
            </h3>

            <p className="font-mono text-xs tracking-wider text-neutral-500 uppercase">
              Organized by GDG Cloud New Delhi × Agora
            </p>
          </div>

          <div className="flex flex-col md:items-end">
            <div
              className={`flex items-baseline gap-1 font-mono text-2xl font-black`}
            >
              <span className="text-sm text-blue-500 italic">#</span>18
              <span className="ml-2 text-xs font-normal tracking-normal text-neutral-500 italic">
                / 300+ Teams
              </span>
            </div>
            <p
              className={`mt-1 self-start bg-gray-300 px-2 py-0.5 font-mono text-[10px] md:self-end dark:bg-neutral-900`}
            >
              TOP 6% PERCENTILE
            </p>
          </div>
        </div>

        <p
          className={`mt-6 max-w-2xl border-l border-neutral-800 pl-4 text-sm leading-relaxed`}
        >
          Secured a position in the{" "}
          <span className={`font-medium`}>Top 18</span> globally. Engineered and
          pitched a technical MVP within a strict 24-hour window. One of only 21
          teams selected for the final evaluation phase.
        </p>

        {/* Footer: Fixed position, reveals on Parent Hover */}
        <motion.div
          variants={{
            rest: { opacity: 0.4, y: 5 },
            hover: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-neutral-800/50 pt-6"
        >
          <a
            href="https://www.creadefy.com/verify/CERT-4CB901B3-F587-4535"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-2 font-mono text-[11px] font-bold text-blue-500/80 transition-colors hover:text-blue-400"
          >
            <ExternalLink
              size={14}
              className="transition-transform group-hover/link:scale-110"
            />
            HTTP://VERIFY_CREDENTIAL
          </a>

          <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-600">
            <Hash size={12} className="opacity-50" />
            <span>REF_ID: CERT-4CB901B3-F587-4535</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AchievmentCard;
