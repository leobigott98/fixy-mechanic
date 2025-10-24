"use client";

import { useState } from "react";
import { ArrowLeft, Store, Settings, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PerfilPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"public" | "admin">("public");

  return (
    <div>
      <div className="flex items-center justify-between mb-6 border-b pb-3">
        <h1 className="text-3xl font-bold text-gray-800">
          Perfil y Configuración de Local
        </h1>
        <button
          onClick={() => router.push("/")}
          className="flex items-center text-blue-600 hover:text-blue-800 font-semibold p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al Dashboard
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-300 mb-6 bg-white rounded-t-xl overflow-x-auto">
        <button
          onClick={() => setActiveTab("public")}
          className={`flex items-center p-4 text-gray-600 ${
            activeTab === "public" ? "tab-active border-b-2 border-blue-500" : ""
          }`}
        >
          <Store className="w-5 h-5 mr-2" /> Detalles del Local (Público)
        </button>
        <button
          onClick={() => setActiveTab("admin")}
          className={`flex items-center p-4 text-gray-600 ${
            activeTab === "admin" ? "tab-active border-b-2 border-blue-500" : ""
          }`}
        >
          <Settings className="w-5 h-5 mr-2" /> Servicios y Suscripción
        </button>
      </div>

      <div className="space-y-6">
        {activeTab === "public" ? (
          <div className="bg-white p-6 rounded-xl shadow-xl">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Información para Clientes
            </h2>
            <div className="space-y-3">
              <p>
                <span className="font-semibold">Nombre Registrado:</span>{" "}
                Taller Mecánico Rápido C.A.
              </p>
              <p>
                <span className="font-semibold">Dirección:</span> Av. Libertador,
                Caracas, D.C.
              </p>
              <p>
                <span className="font-semibold">Horario:</span> Lun-Vie: 8:00 AM
                - 5:00 PM
              </p>
              <p>
                <span className="font-semibold">Descripción:</span> Especialistas
                en tren delantero y frenos con certificación FIxy.
              </p>
              <button className="text-sm py-2 px-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
                Actualizar Fotos del Local
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-xl shadow-xl">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Gestión de Cuenta
            </h2>
            <div className="space-y-3">
              <p>
                <span className="font-semibold">Plan de Suscripción:</span>{" "}
                Premium (Vence: 31/12/2025)
              </p>
              <p>
                <span className="font-semibold">Módulos Activos:</span> OT,
                Inventario, Presupuestos, IA Predictiva.
              </p>
              <button className="text-sm py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600">
                Gestionar Facturación
              </button>
            </div>
          </div>
        )}

        {/* Logout */}
        <div className="mt-8 pt-4 border-t border-gray-300">
          <button className="w-full py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition duration-150 shadow-lg flex items-center justify-center">
            <LogOut className="w-5 h-5 mr-2" /> Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}

