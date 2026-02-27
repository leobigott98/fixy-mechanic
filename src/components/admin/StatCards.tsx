"use client";

import { TrendingUp, ClipboardList, Wallet, Star } from "lucide-react";

const cards = [
  { label: "Ingresos", value: "$4,820", meta: "+8.4% vs período anterior", icon: Wallet },
  { label: "Órdenes", value: "132", meta: "98 completadas", icon: ClipboardList },
  { label: "Ticket Promedio", value: "$36.50", meta: "Basado en órdenes pagadas", icon: TrendingUp },
  { label: "Rating", value: "4.7", meta: "125 reseñas", icon: Star },
];

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map((c) => {
        const Icon = c.icon;
        return (
          <div key={c.label} className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  {c.label}
                </div>
                <div className="mt-2 text-2xl font-bold text-gray-900">{c.value}</div>
                <div className="mt-1 text-sm text-gray-600">{c.meta}</div>
              </div>
              <div className="h-10 w-10 rounded-2xl bg-blue-50 flex items-center justify-center">
                <Icon size={18} className="text-blue-600" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}