import { notFound } from "next/navigation";
import {
  UserSquare,
  Wrench,
  FileCheck,
  Hourglass,
  ShoppingCart,
  FileText,
  Lock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Orden = {
  id: string;
  cliente: string;
  vehiculo: string;
  placa: string;
  entrada: string;
  tecnico: string;
  tiempo: string;
  tareas: string[];
  repuestos: string[];
  costo: string;
};

const ordenes: Record<string, Orden> = {
  "OT-4597": {
    id: "OT-4597",
    cliente: "Andrés Bello",
    vehiculo: "Jeep Cherokee",
    placa: "AB123CD",
    entrada: "Ayer, 8:15 AM",
    tecnico: "Gabriel C.",
    tiempo: "1 día, 3h",
    tareas: ["Cambio de bujías", "Revisión de frenos", "Diagnóstico eléctrico"],
    repuestos: ["Bujías NGK x4", "Líquido de frenos", "Fusible 10A"],
    costo: "$185.00",
  },
};

export default function OrdenDetail({
  params,
}: {
  params: { id: string };
}) {
  const orden = ordenes[params.id];
  if (!orden) return notFound();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Detalle de {orden.id}
        </h2>
        <Link href="/ordenes" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
          ← Volver a la Lista
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Col 1: Cliente */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-xl">
          <h3 className="font-bold text-gray-700 border-b pb-2 mb-4 flex items-center">
            <UserSquare className="w-5 h-5 mr-2 text-indigo-500" />
            Cliente y Vehículo
          </h3>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">Cliente:</span> {orden.cliente}
            </p>
            <p>
              <span className="font-semibold">Vehículo:</span> {orden.vehiculo}
            </p>
            <p>
              <span className="font-semibold">Placa:</span> {orden.placa}
            </p>
            <p>
              <span className="font-semibold">Entrada:</span> {orden.entrada}
            </p>
            <p>
              <span className="font-semibold">Técnico:</span> {orden.tecnico}
            </p>
            <p className="pt-2 text-red-600 font-bold flex items-center">
              <Hourglass className="w-4 h-4 mr-1" /> Tiempo en Patio:{" "}
              {orden.tiempo}
            </p>
          </div>
          <button className="mt-4 w-full text-sm py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
            Ver Historial Completo del Vehículo
          </button>
        </div>

        {/* Col 2–3: Tareas y Factura */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <h3 className="font-bold text-gray-700 border-b pb-2 mb-4 flex items-center">
              <Wrench className="w-5 h-5 mr-2 text-red-500" />
              Detalle de Tareas y Costos
            </h3>

            <p className="font-semibold text-sm mb-1">Mano de Obra:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mb-4">
              {orden.tareas.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>

            <div className="border-t pt-4">
              <p className="font-semibold text-sm mb-1 flex justify-between items-center">
                Repuestos Requeridos ({orden.repuestos.length} items)
                <button className="text-xs text-blue-500 hover:text-blue-700 flex items-center">
                  <ShoppingCart className="w-4 h-4 mr-1" /> Ir al Marketplace
                </button>
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                {orden.repuestos.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 p-3 bg-gray-50 rounded-lg text-right font-bold text-lg">
              Costo Total Estimado:{" "}
              <span className="text-green-600">{orden.costo}</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl border-l-4 border-green-500">
            <h3 className="font-bold text-gray-700 border-b pb-2 mb-4 flex items-center">
              <FileCheck className="w-5 h-5 mr-2 text-green-500" />
              Facturación y Validación
            </h3>

            <button className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition shadow-md mb-4">
              Subir/Generar Factura Final y Completar OT
            </button>

            <div className="border border-dashed p-4 rounded-lg bg-gray-50 mb-4">
              <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <FileText className="w-4 h-4 mr-2" /> Documento Adjunto
              </p>
              <Image
                src="https://placehold.co/400x150/f0fdf4/1e3b0b?text=Factura+Digital"
                alt="Factura"
                width={100}
                height={100}
                className="w-full rounded-md shadow-inner"
              />
            </div>

            <div className="p-3 bg-green-100 rounded-lg">
              <p className="text-xs font-semibold text-green-800 flex items-center">
                <Lock className="w-4 h-4 mr-1" /> Validación FIxy:
              </p>
              <p className="text-xs text-green-700">
                Certificado digitalmente por el Taller a las 11:30 AM del
                26/09/2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
