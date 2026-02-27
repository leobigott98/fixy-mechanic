"use client";

import { Menu, Bell, Search } from "lucide-react";

export default function AdminTopbar({ onOpenSidebar }: { onOpenSidebar: () => void }) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100"
            onClick={onOpenSidebar}
            aria-label="Open sidebar"
          >
            <Menu size={20} />
          </button>

          <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 bg-gray-50">
            <Search size={16} className="text-gray-500" />
            <input
              placeholder="Buscar…"
              className="bg-transparent outline-none text-sm w-[220px]"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-xl hover:bg-gray-100" aria-label="Notifications">
            <Bell size={18} />
          </button>

          <div className="h-9 px-3 rounded-full bg-blue-600 text-white flex items-center gap-2 shadow-sm">
            <div className="h-7 w-7 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
              T
            </div>
            <span className="text-sm font-medium hidden sm:inline">Perfil de Taller</span>
          </div>
        </div>
      </div>
    </header>
  );
}