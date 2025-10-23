"use client";

import { useState } from "react";
import {
  ArrowLeft,
  PlusSquare,
  CalendarPlus,
  ListTodo,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function CalendarioPage() {
  const router = useRouter();
  const [viewMode, setViewMode] = useState<"semana" | "dia" | "mes">("semana");

  const citas = [
    {
      id: 1,
      dia: "Lun 29",
      cliente: "Giordi P.",
      hora: "8:30 AM",
      color: "blue",
    },
    {
      id: 2,
      dia: "Lun 29",
      cliente: "Andrés B.",
      hora: "10:00 AM",
      color: "green",
    },
    {
      id: 3,
      dia: "Mar 30",
      cliente: "María R.",
      hora: "9:00 AM",
      color: "yellow",
    },
    {
      id: 4,
      dia: "Jue 2",
      cliente: "Leonardo R.",
      hora: "3:00 PM",
      color: "blue",
    },
    {
      id: 5,
      dia: "Vie 3",
      cliente: "Cliente App",
      hora: "4:00 PM",
      color: "yellow",
    },
  ];

  const diasSemana = [
    "Lun 29",
    "Mar 30",
    "Mié 1",
    "Jue 2",
    "Vie 3",
    "Sáb 4",
    "Dom 5",
  ];

  const handleCitaClick = (cita: typeof citas[0]) =>
    alert(`Detalle Cita: ${cita.cliente} (${cita.hora})`);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b pb-3">
        <h1 className="text-3xl font-bold text-gray-800">
          Calendario de Citas y Agendamiento
        </h1>
        <button
          onClick={() => router.push("/")}
          className="flex items-center text-blue-600 hover:text-blue-800 font-semibold p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al Dashboard
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Columna 1: Acciones */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <h2 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
              <PlusSquare className="w-5 h-5 mr-2 text-indigo-500" /> Agendar Cita
              Rápida
            </h2>
            <button
              className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition shadow-md flex items-center justify-center"
              onClick={() => alert("Crear nueva cita manual")}
            >
              <CalendarPlus className="w-5 h-5 mr-2" /> Nueva Cita Manual
            </button>
            <p className="mt-4 text-sm text-gray-600 border-t pt-3">
              <span className="font-bold">Solicitudes App (Pendientes):</span>{" "}
              <span className="text-red-600">2</span>
              <button className="ml-2 text-blue-500 hover:text-blue-700 text-xs">
                Revisar
              </button>
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <h2 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
              <ListTodo className="w-5 h-5 mr-2 text-green-500" /> Resumen del Día
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-center">
                <span className="font-semibold">Citas Confirmadas:</span>
                <span className="text-green-600 font-bold">4</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-semibold">Horas Ocupadas:</span>
                <span className="text-gray-800 font-bold">8.5 hrs</span>
              </li>
              <li className="flex justify-between items-center border-t pt-2 mt-2">
                <span className="font-semibold">Disponibilidad:</span>
                <span className="text-blue-600 font-bold">Media</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Columna 2-4: Calendario */}
        <div className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-xl">
          {/* Header Semana */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Semana del 29 Sep - 05 Oct
            </h2>
            <div className="flex space-x-2">
              <button className="p-2 border rounded-lg bg-gray-100 hover:bg-gray-200">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 border rounded-lg bg-gray-100 hover:bg-gray-200">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Botones de vista */}
          <div className="flex mb-4 space-x-2">
            {["semana", "dia", "mes"].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode as "semana" | "dia" | "mes")}
                className={`py-1 px-4 rounded-lg text-sm font-semibold ${
                  viewMode === mode
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {mode[0].toUpperCase() + mode.slice(1)}
              </button>
            ))}
          </div>

          {/* Vista Semanal */}
          <div className="overflow-x-auto">
            <div className="grid grid-cols-5 md:grid-cols-7 gap-1 min-w-[700px] border border-gray-300 rounded-lg">
              {diasSemana.map((d, i) => (
                <div
                  key={i}
                  className={`text-center font-bold text-sm p-2 border-r ${
                    i >= 5
                      ? "bg-red-100 text-red-700 hidden md:block"
                      : "bg-gray-100"
                  }`}
                >
                  {d}
                </div>
              ))}

              {/* Grid de citas */}
              <div className="col-span-5 md:col-span-7 grid grid-cols-5 md:grid-cols-7 gap-1 p-2 bg-gray-50 text-xs h-[400px]">
                {diasSemana.map((d, i) => (
                  <div
                    key={i}
                    className={`relative h-full space-y-1 ${
                      i >= 5 ? "bg-red-50 hidden md:block" : ""
                    }`}
                  >
                    {i >= 5 ? (
                      <p
                        className={`absolute top-1 left-1 ${
                          i === 5 ? "text-red-400" : "text-red-400"
                        }`}
                      >
                        Cerrado
                      </p>
                    ) : (
                      <>
                        {citas
                          .filter((c) => c.dia === d)
                          .map((c) => (
                            <div
                              key={c.id}
                              onClick={() => handleCitaClick(c)}
                              className={`absolute p-1 text-${c.color}-800 bg-${c.color}-200 rounded-lg shadow-sm cursor-pointer hover:bg-${c.color}-300 transition duration-150`}
                              style={{
                                top:
                                  c.hora.includes("8:")
                                    ? "20%"
                                    : c.hora.includes("10:")
                                    ? "40%"
                                    : c.hora.includes("3:")
                                    ? "50%"
                                    : "70%",
                                height: c.hora.includes("10:")
                                  ? "15%"
                                  : c.hora.includes("4:")
                                  ? "20%"
                                  : "10%",
                              }}
                            >
                              {c.cliente} ({c.hora})
                            </div>
                          ))}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

