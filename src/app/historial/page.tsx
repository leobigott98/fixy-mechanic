"use client";

import { ArrowLeft, Star } from "lucide-react";
import { useRouter } from "next/navigation";

interface MaintenanceRecord {
  id: number;
  title: string;
  date: string;
  client: string;
  vehicle: string;
  model: string;
  color: string;
  rating: number;
  price: number;
  review: string;
}

const maintenanceData: MaintenanceRecord[] = [
  {
    id: 1,
    title: "Cambio de Aceite y Filtros",
    date: "25/09/2025",
    client: "Giordi Pérez",
    vehicle: "Chevrolet Aveo",
    model: "2012",
    color: "Rojo",
    rating: 5,
    price: 55.0,
    review:
      "El servicio de cambio de aceite fue rápido y profesional. La cotización en la app fue respetada. ¡Gran trabajo!",
  },
  {
    id: 2,
    title: "Reemplazo de Pastillas de Freno",
    date: "22/09/2025",
    client: "Gabriel Cova",
    vehicle: "Ford Fiesta",
    model: "2015",
    color: "Negro",
    rating: 4,
    price: 120.5,
    review:
      "Buen diagnóstico, aunque el repuesto tardó un día extra en llegar al taller. Pero el trabajo final quedó excelente.",
  },
  {
    id: 3,
    title: "Servicio Mayor (Tune-Up)",
    date: "18/09/2025",
    client: "Leonardo Ruíz",
    vehicle: "Toyota Corolla",
    model: "2020",
    color: "Blanco",
    rating: 5,
    price: 250.0,
    review:
      "El mejor servicio mayor que he recibido en Caracas. Totalmente transparentes y profesionales.",
  },
];

export default function HistorialPage() {
  const router = useRouter();

  const renderStars = (count: number) => (
    <span className="text-yellow-500 text-lg">
      {"★".repeat(count)}
      <span className="text-gray-300">
        {"★".repeat(5 - count)}
      </span>
    </span>
  );

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b pb-3">
        <h1 className="text-3xl font-bold text-gray-800">
          Historial de Mantenimientos Completados
        </h1>
        <button
          onClick={() => router.push("/")}
          className="flex items-center text-blue-600 hover:text-blue-800 font-semibold p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al Dashboard
        </button>
      </div>

      {/* Main content */}
      <div className="bg-white p-6 rounded-2xl shadow-xl">
        <p className="text-gray-600 mb-4">
          Registro detallado de los trabajos realizados y la experiencia del cliente.
        </p>

        <div className="space-y-6">
          {maintenanceData.map((m) => (
            <div
              key={m.id}
              className="border p-4 rounded-xl shadow-md hover:shadow-lg transition duration-150 bg-gray-50"
            >
              {/* Header */}
              <div className="flex justify-between items-start border-b pb-3 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{m.title}</h3>
                  <p className="text-sm text-gray-500">Fecha de Atención: {m.date}</p>
                </div>
                <div className="text-right">
                  {renderStars(m.rating)}
                  <p className="text-sm font-semibold text-green-600">
                    ${m.price.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Vehicle details */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm text-gray-700 mb-4">
                <div>
                  <span className="font-semibold">Cliente:</span> {m.client}
                </div>
                <div>
                  <span className="font-semibold">Vehículo:</span> {m.vehicle}
                </div>
                <div>
                  <span className="font-semibold">Modelo/Año:</span> {m.model}
                </div>
                <div>
                  <span className="font-semibold">Color:</span> {m.color}
                </div>
              </div>

              {/* Customer review */}
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <p className="text-xs font-semibold text-gray-800 mb-1">
                  Reseña del Cliente:
                </p>
                <p className="text-sm italic text-gray-700">&ldquo;{m.review}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

