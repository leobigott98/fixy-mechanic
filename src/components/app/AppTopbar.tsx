"use client";

import { Menu, Bell, Search } from "lucide-react";
import Link from "next/link";

export default function AppTopbar({ onOpenSidebar }: { onOpenSidebar: () => void }) {
  return (
    <header className="sticky top-0 z-40 bg-card/90 backdrop-blur border-b border-border">
      <div className="h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-muted"
            onClick={onOpenSidebar}
            aria-label="Open sidebar"
          >
            <Menu size={20} />
          </button>

          <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl border border-border bg-muted">
            <Search size={16} className="text-muted-fg" />
            <input
              placeholder="Buscar orden, cliente…"
              className="bg-transparent outline-none text-sm w-[240px]"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-xl hover:bg-muted" aria-label="Notifications">
            <Bell size={18} />
          </button>

          <Link
            href="/app/perfil"
            className="h-9 px-3 rounded-full bg-brand text-brand-fg flex items-center gap-2 shadow-sm hover:bg-brand-2"
          >
            <div className="h-7 w-7 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
              T
            </div>
            <span className="text-sm font-medium hidden sm:inline">Perfil</span>
          </Link>
        </div>
      </div>
    </header>
  );
}