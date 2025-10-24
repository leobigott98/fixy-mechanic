"use client";

import { ArrowLeft, Star } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RankingPage() {
  const router = useRouter();

  const reviews = [
    {
      nombre: "Giordi Pérez",
      rating: 5,
      comentario:
        "¡Excelente servicio! Rápido y totalmente transparente con el presupuesto. El mejor taller de la zona.",
      vehiculo: "Chevrolet Aveo",
      fecha: "25/09/2025",
      destacado: true,
    },
    {
      nombre: "María Velez",
      rating: 4,
      comentario:
        "Buena atención. Solo un pequeño retraso en la entrega, pero el trabajo fue de calidad.",
      vehiculo: "Ford Fiesta",
      fecha: "22/09/2025",
      destacado: false,
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
          Reseñas y Reputación | Clientes FIxy
        </h1>
        <button
          onClick={() => router.push("/")}
          className="flex items-center text-blue-600 hover:text-blue-800 font-semibold p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al Dashboard
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <Star className="w-7 h-7 mr-2 text-yellow-500 fill-yellow-500" />{" "}
            Promedio General: 4.7/5.0
          </h2>
          <p className="text-sm text-gray-600">Basado en 125 opiniones</p>
        </div>

        <h3 className="text-xl font-bold text-gray-700 mb-4 border-t pt-4">
          Últimas Reseñas (Recientes a Antiguas)
        </h3>

        <div className="space-y-4">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`border p-4 rounded-xl shadow-sm ${
                r.destacado ? "bg-green-50" : "bg-gray-50"
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-900">{r.nombre}</span>
                {renderStars(r.rating)}
              </div>
              <p className="text-sm text-gray-700 italic">&ldquo;{r.comentario}&rdquo;</p>
              <p className="text-xs text-gray-500 mt-2">
                Vehículo: {r.vehiculo} | Fecha: {r.fecha}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

