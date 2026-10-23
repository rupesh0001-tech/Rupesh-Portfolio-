import Link from "next/link";

import { Send } from "lucide-react";

import type { ButtonLinkDTO } from "@repo/content";

const variantClass: Record<string, string> = {
  primary:
    "border-neutral-700 bg-neutral-900 text-white shadow-[0_4px_0_0_#0a0a0a] hover:bg-neutral-800 hover:shadow-[0_2px_0_0_#0a0a0a]",
  secondary:
    "border-neutral-300 bg-neutral-100 text-black shadow-[0_4px_0_0_rgba(0,0,0,0.15)] hover:bg-neutral-200 hover:shadow-[0_2px_0_0_rgba(0,0,0,0.15)]",
};

export default function GetInTouch({ buttons }: { buttons: ButtonLinkDTO[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-4">
      {buttons.map((btn) => (
        <Link
          key={btn.id}
          href={btn.href}
          target={btn.href.startsWith("http") ? "_blank" : undefined}
          rel={btn.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={`flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm transition-all duration-300 hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none ${
            variantClass[btn.variant] ?? variantClass.primary
          }`}
        >
          <Send size={16} /> {btn.label}
        </Link>
      ))}
    </div>
  );
}
