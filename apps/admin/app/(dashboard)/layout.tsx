import { redirect } from "next/navigation";

import { Sidebar } from "@/components/sidebar";
import { isAuthenticated } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await isAuthenticated())) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen bg-[#0e0e10]">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6 md:p-8">{children}</main>
    </div>
  );
}
