"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PendientesPage() {
  const router = useRouter();

  const data = [
    {
      cliente: "Pedro López (Jeep Renegade)",
      servicio: "Cita para Diagnóstico",
      fecha: "Hoy, 3:00 PM",
      estado: "Esperando Cliente",
      color: "text-red-600",
    },
    {
      cliente: "Ana Giménez (Toyota Yaris)",
      servicio: "Cambio de neumáticos",
      fecha: "Mañana, 8:00 AM",
      estado: "Pendiente de Confirmación",
      color: "text-yellow-600",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6 border-b pb-3">
        <h1 className="text-3xl font-bold text-gray-800">
          Detalle de Servicios Pendientes ({data.length})
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
                Tipo de Servicio
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Fecha de Entrada Estimada
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Estado
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((d, i) => (
              <tr key={i}>
                <td className="px-6 py-4 whitespace-nowrap">{d.cliente}</td>
                <td className="px-6 py-4 whitespace-nowrap">{d.servicio}</td>
                <td
                  className={`px-6 py-4 whitespace-nowrap font-semibold ${d.color}`}
                >
                  {d.fecha}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{d.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

