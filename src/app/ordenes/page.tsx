"use client";
import { AlertTriangle, Wrench, CheckCircle, PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OrdenesPage() {
  const router = useRouter();

  const ordenes = [
    {
      id: "OT-4598",
      cliente: "María Rojas",
      vehiculo: "Toyota Hilux",
      estado: "DIAGNÓSTICO PENDIENTE",
      color: "red",
      entrada: "Hoy, 9:30 AM",
      icon: AlertTriangle,
    },
    {
      id: "OT-4597",
      cliente: "Andrés Bello",
      vehiculo: "Jeep Cherokee",
      estado: "EN REPARACIÓN",
      color: "yellow",
      tecnico: "Gabriel C.",
      icon: Wrench,
    },
    {
      id: "OT-4596",
      cliente: "José Mendoza",
      vehiculo: "Ford Ka",
      estado: "LISTA P/ ENTREGA",
      color: "blue",
      pendiente: "$185.00",
      icon: CheckCircle,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6 border-b pb-3">
        <h1 className="text-3xl font-bold text-gray-800">
          Órdenes de Trabajo Activas
        </h1>
        <button
          onClick={() => router.push("/")}
          className="flex items-center text-blue-600 hover:text-blue-800 font-semibold p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition"
        >
          ← Volver al Dashboard
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-xl mb-8">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Lista de Vehículos en Patio ({ordenes.length} Activas)
        </h2>

        <div className="space-y-4">
          {ordenes.map((ot) => {
            const Icon = ot.icon;
            return (
              <div
                key={ot.id}
                onClick={() => router.push(`/ordenes/${ot.id}`)}
                className={`border p-4 rounded-xl shadow-md hover:shadow-lg transition bg-${ot.color}-50 cursor-pointer`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3
                      className={`font-bold text-${ot.color}-800 flex items-center`}
                    >
                      <Icon className="w-5 h-5 mr-2" /> {ot.id}
                    </h3>
                    <p className="text-sm text-gray-700 font-semibold">
                      {ot.cliente} ({ot.vehiculo})
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full bg-${ot.color}-200 text-${ot.color}-800`}
                    >
                      {ot.estado}
                    </span>
                    {ot.entrada && (
                      <p className="text-xs text-gray-500 mt-1">
                        Entrada: {ot.entrada}
                      </p>
                    )}
                    {ot.tecnico && (
                      <p className="text-xs text-gray-500 mt-1">
                        Asignado a: {ot.tecnico}
                      </p>
                    )}
                    {ot.pendiente && (
                      <p className="text-xs text-gray-500 mt-1">
                        Total Pendiente: {ot.pendiente}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => router.push("/ordenes/create")}
          className="mt-6 w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition shadow-md flex justify-center items-center"
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          Crear Nueva OT
        </button>
      </div>
    </div>
  );
}
