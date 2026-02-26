"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function IngresosPage() {
  const router = useRouter();

  const data = [
    {
      cliente: "Giordi Pérez (Chevy Aveo)",
      trabajo: "Cambio de aceite y filtro",
      costo: 55.0,
      rating: 5,
      fecha: "25/09/2025",
    },
    {
      cliente: "María Velez (Ford Fiesta)",
      trabajo: "Reemplazo pastillas de freno",
      costo: 120.5,
      rating: 4,
      fecha: "22/09/2025",
    },
  ];

  const renderStars = (count: number) => (
    <span className="text-yellow-500">
      {"★".repeat(count)}
      <span className="text-gray-300">{"★".repeat(5 - count)}</span>
    </span>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6 border-b pb-3">
        <h1 className="text-3xl font-bold text-gray-800">
          Detalle de Servicios Completados
        </h1>
        <button
          onClick={() => router.push("/")}
          className="flex items-center text-blue-600 hover:text-blue-800 font-semibold p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al Dashboard
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-xl overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Cliente / Vehículo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Trabajo Realizado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Costo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Reseña
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Fecha
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((d, i) => (
              <tr key={i}>
                <td className="px-6 py-4 whitespace-nowrap">{d.cliente}</td>
                <td className="px-6 py-4 whitespace-nowrap">{d.trabajo}</td>
                <td className="px-6 py-4 whitespace-nowrap text-green-600 font-semibold">
                  ${d.costo.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {renderStars(d.rating)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{d.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

