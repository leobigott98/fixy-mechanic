"use client";

import { Wallet, ClipboardList, BellRing, Star, Car } from "lucide-react";

const cards = [
  { label: "Ingresos App", value: "$1,580", meta: "+12% vs mes anterior", icon: Wallet },
  { label: "Servicios atendidos", value: "48", meta: "Servicios completados con éxito", icon: ClipboardList },
  { label: "Servicios pendientes", value: "5", meta: "¡Revisar agenda urgente!", icon: BellRing, danger: true },
  { label: "Ranking promedio", value: "4.7", meta: "125 reseñas", icon: Star },
];

export default function AppStatCards() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map((c) => {
        const Icon = c.icon;
        return (
          <div key={c.label} className="p-4 rounded-2xl bg-card border border-border shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-semibold tracking-wide text-muted-fg uppercase">
                  {c.label}
                </div>
                <div className="mt-2 text-2xl font-bold text-fg">{c.value}</div>
                <div className={`mt-1 text-sm ${c.danger ? "text-red-600" : "text-muted-fg"}`}>
                  {c.meta}
                </div>
              </div>
              <div className="h-10 w-10 rounded-2xl bg-muted flex items-center justify-center">
                <Icon size={18} className="text-[hsl(var(--brand))]" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}