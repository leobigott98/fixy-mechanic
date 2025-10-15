
"use client";
import { ClipboardList, CalendarCheck, FileText, Car } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ActionButtons() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <button onClick={() => router.push('/ordenes')} className="flex items-center w-full p-4 bg-white text-gray-800 font-semibold rounded-xl border border-gray-200 transition hover:shadow-lg hover:border-blue-500 shadow-sm">
        <ClipboardList className="w-6 h-6 mr-3 text-red-600" /> Órdenes de Trabajo
      </button>
      <button onClick={() => router.push('/calendario')} className="flex items-center w-full p-4 bg-white text-gray-800 font-semibold rounded-xl border border-gray-200 transition hover:shadow-lg hover:border-blue-500 shadow-sm">
        <CalendarCheck className="w-6 h-6 mr-3 text-indigo-600" /> Calendario de Citas
      </button>
      <button onClick={() => router.push('/presupuesto')} className="flex items-center w-full p-4 bg-white text-gray-800 font-semibold rounded-xl border border-gray-200 transition hover:shadow-lg hover:border-blue-500 shadow-sm">
        <FileText className="w-6 h-6 mr-3 text-green-600" /> Generar Presupuesto
      </button>
      <button onClick={() => router.push('/historial')} className="flex items-center w-full p-4 bg-white text-gray-800 font-semibold rounded-xl border border-gray-200 transition hover:shadow-lg hover:border-blue-500 shadow-sm">
        <Car className="w-6 h-6 mr-3 text-blue-600" /> Historial de Mantenimientos
      </button>
    </div>
  );
}
