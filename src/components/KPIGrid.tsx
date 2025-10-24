"use client";

import {
  Wallet,
  Handshake,
  BellRing,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface KPI {
  id: string;
  title: string;
  value: string;
  change?: string;
  icon: React.ReactElement;
  color?: string;
  highlight?: string;
  hasPeriodSelector?: boolean;
}

const KPIGrid = () => {
  const router = useRouter();
  const [selectedPeriod, setSelectedPeriod] = useState<string>("mes");

  const handleNavigate = (path: string) => {
    router.push(`/${path}`);
  };

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
  };

  const kpis: KPI[] = [
    {
      id: "ingresos",
      title: "Ingresos App",
      value: "$1,580",
      change: "+12% vs mes anterior",
      icon: <Wallet className="w-6 h-6 text-green-500" />,
      hasPeriodSelector: true,
      highlight: "text-green-600",
    },
    {
      id: "atendidos",
      title: "Servicios Atendidos",
      value: "48",
      change: "Servicios completados con éxito",
      icon: <Handshake className="w-6 h-6 text-blue-500" />,
      hasPeriodSelector: true,
    },
    {
      id: "pendientes",
      title: "Servicios Pendientes",
      value: "5",
      change: "¡Revisar agenda urgente!",
      icon: <BellRing className="w-6 h-6 text-yellow-500" />,
      highlight: "text-red-600 font-semibold",
    },
    {
      id: "ranking",
      title: "Ranking Promedio",
      value: "4.7",
      icon: <Star className="w-6 h-6 text-purple-500 fill-purple-500" />,
    },
  ];

  const periods = ["semana", "mes", "trimestre", "semestre", "año"];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Métricas de Rendimiento
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi) => (
          <div
            key={kpi.id}
            onClick={() => handleNavigate(kpi.id)}
            className="cursor-pointer p-4 rounded-xl border border-gray-100 bg-white hover:shadow-lg transition-all duration-150"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium text-gray-500 uppercase">
                {kpi.title}
              </p>
              {kpi.icon}
            </div>

            {/* Value */}
            <p className="text-3xl font-extrabold text-gray-900 mt-1">
              {kpi.value}
            </p>

            {/* Change or message */}
            {kpi.change && (
              <span
                className={`text-xs mb-3 block ${
                  kpi.highlight ?? "text-gray-500"
                }`}
              >
                {kpi.change}
              </span>
            )}

            {/* Period selector */}
            {kpi.hasPeriodSelector ? (
              <div
                className="flex justify-between gap-1 text-[10px] sm:text-xs mt-3 bg-gray-50 p-0.5 rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                {periods.map((period) => (
                  <button
                    key={period}
                    onClick={() => handlePeriodChange(period)}
                    className={`w-1/5 py-1 rounded-md transition duration-150 ${
                      selectedPeriod === period
                        ? "bg-blue-600 text-white"
                        : "text-gray-500 hover:bg-gray-200"
                    }`}
                  >
                    {period === "semana"
                      ? "Sem."
                      : period === "mes"
                      ? "Mes"
                      : period === "trimestre"
                      ? "Trim."
                      : period === "semestre"
                      ? "Semest."
                      : "Año"}
                  </button>
                ))}
              </div>
            ) : (
              <div className="h-[30px] mt-3"></div>
            )}

            {/* Ranking Stars */}
            {kpi.id === "ranking" && (
              <div className="text-xs text-gray-500 mt-1">
                <span className="text-yellow-400">★★★★</span>
                <span className="text-yellow-200">★</span> (125 reseñas)
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KPIGrid;
