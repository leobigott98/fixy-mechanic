"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { appNav } from "./nav";

export default function AppSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <aside className="h-full lg:fixed lg:inset-y-0 lg:left-0 lg:w-[280px] bg-[hsl(var(--brand-2))] text-white">
      <div className="h-full flex flex-col">
        <div className="px-5 py-5 border-b border-white/10">
          <Link href="/app/dashboard" className="flex items-center gap-2" onClick={onNavigate}>
            <div className="h-9 w-9 rounded-xl bg-white/15 flex items-center justify-center font-bold">
              F
            </div>
            <div className="leading-tight">
              <div className="font-semibold">Fixy</div>
              <div className="text-xs text-white/70">Panel del taller</div>
            </div>
          </Link>
        </div>

        <nav className="px-3 py-4 space-y-1">
          {appNav.map((item) => {
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
                <Icon size={18} className={active ? "text-orange-500 opacity-100" : "text-orange-300 opacity-85"} />
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