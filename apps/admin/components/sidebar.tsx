"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  Briefcase,
  FolderKanban,
  ImageIcon,
  LayoutDashboard,
  Link2,
  LogOut,
  MousePointerClick,
  Settings,
  Sparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/skills", label: "Skills", icon: Sparkles },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/buttons", label: "Buttons / CTAs", icon: MousePointerClick },
  { href: "/socials", label: "Social links", icon: Link2 },
  { href: "/media", label: "Media", icon: ImageIcon },
  { href: "/settings", label: "Site text", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col border-r border-white/[0.06] bg-[#0c0c0e]/95 backdrop-blur-xl">
      {/* Logo / Brand */}
      <div className="border-b border-white/[0.06] px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
            <LayoutDashboard size={18} />
          </div>
          <div>
            <p className="text-xs font-medium tracking-[0.15em] text-zinc-500 uppercase">
              Portfolio
            </p>
            <p className="text-sm font-semibold text-white">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {links.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                active
                  ? "bg-blue-500/15 text-blue-400 shadow-[inset_0_0_0_1px_rgba(59,130,246,0.15)]"
                  : "text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-200"
              )}
            >
              <Icon size={16} className={active ? "text-blue-400" : ""} />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="border-t border-white/[0.06] p-3">
        <button
          onClick={logout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-500 transition-all duration-200 hover:bg-red-500/10 hover:text-red-400"
        >
          <LogOut size={16} />
          Log out
        </button>
      </div>
    </aside>
  );
}
