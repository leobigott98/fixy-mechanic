
"use client";
import { Wallet, Handshake, BellRing, Star } from "lucide-react";
import { useRouter } from "next/navigation";

export default function KPIGrid() {
  const router = useRouter();
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Métricas de Rendimiento</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div onClick={() => router.push('/ingresos')} className="cursor-pointer p-4 border border-gray-100 rounded-xl hover:shadow-xl">
          <div className="flex justify-between mb-2">
            <p className="text-sm text-gray-500">Ingresos App</p>
            <Wallet className="w-6 h-6 text-green-500" />
          </div>
          <p className="text-3xl font-extrabold">$1.580</p>
          <span className="text-xs text-green-600 font-semibold">+12% vs mes anterior</span>
        </div>
        <div onClick={() => router.push('/pendientes')} className="cursor-pointer p-4 border border-gray-100 rounded-xl hover:shadow-xl">
          <div className="flex justify-between mb-2">
            <p className="text-sm text-gray-500">Servicios Pendientes</p>
            <BellRing className="w-6 h-6 text-yellow-500" />
          </div>
          <p className="text-3xl font-extrabold">5</p>
          <span className="text-xs text-red-600 font-semibold">¡Revisar agenda urgente!</span>
        </div>
        <div onClick={() => router.push('/ranking')} className="cursor-pointer p-4 border border-gray-100 rounded-xl hover:shadow-xl">
          <div className="flex justify-between mb-2">
            <p className="text-sm text-gray-500">Ranking Promedio</p>
            <Star className="w-6 h-6 text-purple-500" />
          </div>
          <p className="text-3xl font-extrabold">4.7</p>
          <span className="text-xs text-gray-500">125 reseñas</span>
        </div>
      </div>
    </div>
  );
}
