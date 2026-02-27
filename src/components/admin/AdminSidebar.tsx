"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminNav } from "./nav";
import { clsx } from "clsx";

export default function AdminSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <aside className="h-full lg:fixed lg:inset-y-0 lg:left-0 lg:w-[280px] bg-blue-800 text-white">
      <div className="h-full flex flex-col">
        {/* Brand */}
        <div className="px-5 py-5 border-b border-white/10">
          <Link href="/admin/dashboard" className="flex items-center gap-2" onClick={onNavigate}>
            <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center font-bold">
              F
            </div>
            <div className="leading-tight">
              <div className="font-semibold">Fixy</div>
              <div className="text-xs text-white/70">Admin</div>
            </div>
          </Link>
        </div>

        {/* Nav */}
        <nav className="px-3 py-4 space-y-1">
          {adminNav.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className={clsx(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl transition",
                  active ? "bg-white/12 shadow-sm" : "hover:bg-white/10"
                )}
              >
                <Icon size={18} className={active ? "opacity-100" : "opacity-85"} />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto px-4 py-4 border-t border-white/10 text-xs text-white/70">
          © {new Date().getFullYear()} Fixy
        </div>
      </div>
    </aside>
  );
}