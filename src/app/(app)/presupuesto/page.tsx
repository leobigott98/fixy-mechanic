"use client";

import { useState } from "react";
import {
  ArrowLeft,
  UserPlus,
  Search,
  ListPlus,
  Wrench,
  Package,
  Plus,
  Receipt,
  Send,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface Item {
  id: number;
  descripcion: string;
  costo: number;
}

export default function PresupuestoPage() {
  const router = useRouter();
  const [cliente, setCliente] = useState("");
  const [vehiculo, setVehiculo] = useState("");
  const [fecha, setFecha] = useState<string>(new Date().toISOString().slice(0, 10));

  const [tab, setTab] = useState<"mano" | "repuestos">("mano");
  const [manoObra, setManoObra] = useState<Item[]>([]);
  const [repuestos, setRepuestos] = useState<Item[]>([]);
  const [moDescripcion, setMoDescripcion] = useState("");
  const [moCosto, setMoCosto] = useState<number | "">("");
  const [repDescripcion, setRepDescripcion] = useState("");
  const [repCosto, setRepCosto] = useState<number | "">("");

  const addItem = (type: "mano" | "repuestos") => {
    if (type === "mano") {
      if (!moDescripcion || !moCosto) return alert("Complete los campos de mano de obra");
      setManoObra([
        ...manoObra,
        { id: Date.now(), descripcion: moDescripcion, costo: Number(moCosto) },
      ]);
      setMoDescripcion("");
      setMoCosto("");
    } else {
      if (!repDescripcion || !repCosto) return alert("Complete los campos de repuesto");
      setRepuestos([
        ...repuestos,
        { id: Date.now(), descripcion: repDescripcion, costo: Number(repCosto) },
      ]);
      setRepDescripcion("");
      setRepCosto("");
    }
  };

  const totalManoObra = manoObra.reduce((acc, i) => acc + i.costo, 0);
  const totalRepuestos = repuestos.reduce((acc, i) => acc + i.costo, 0);
  const totalFinal = totalManoObra + totalRepuestos;

  const sendCotizacion = () => {
    alert(`Cotización enviada al cliente ${cliente}. Total: $${totalFinal.toFixed(2)}`);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b pb-3">
        <h1 className="text-3xl font-bold text-gray-800">
          Generador de Presupuestos Rápidos
        </h1>
        <button
          onClick={() => router.push("/")}
          className="flex items-center text-blue-600 hover:text-blue-800 font-semibold p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al Dashboard
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cliente y Vehículo */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-xl h-fit">
          <h2 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
            <UserPlus className="w-5 h-5 mr-2 text-indigo-500" /> Cliente y Destino
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre del Cliente
              </label>
              <input
                type="text"
                value={cliente}
                onChange={(e) => setCliente(e.target.value)}
                placeholder="Ej: Giordi Pérez"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Busque cliente registrado o ingrese nuevo.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Vehículo a Cotizar
              </label>
              <input
                type="text"
                value={vehiculo}
                onChange={(e) => setVehiculo(e.target.value)}
                placeholder="Ej: Toyota Corolla 2020 (Placa: DEF-456)"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Fecha de Creación
              </label>
              <input
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                required
              />
            </div>
          </form>

          <button
            className="mt-5 w-full py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition shadow-md flex items-center justify-center"
            onClick={() => alert(`Buscar historial de ${cliente}`)}
          >
            <Search className="w-5 h-5 mr-2" /> Buscar Historial de Cliente
          </button>
        </div>

        {/* Ítems + Resumen */}
        <div className="lg:col-span-2 space-y-6">
          {/* Ítems */}
          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <h3 className="font-bold text-gray-700 border-b pb-2 mb-4 flex items-center">
              <ListPlus className="w-5 h-5 mr-2 text-red-500" /> Ítems de la
              Cotización
            </h3>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-4">
              <button
                onClick={() => setTab("mano")}
                className={`flex items-center p-3 text-sm ${
                  tab === "mano"
                    ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <Wrench className="w-4 h-4 mr-1" /> Mano de Obra
              </button>
              <button
                onClick={() => setTab("repuestos")}
                className={`flex items-center p-3 text-sm ${
                  tab === "repuestos"
                    ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <Package className="w-4 h-4 mr-1" /> Repuestos
              </button>
            </div>

            {/* Tab Content */}
            {tab === "mano" ? (
              <div>
                <h4 className="font-semibold mb-2 text-sm text-gray-700">
                  Agregar Servicio:
                </h4>
                <div className="flex space-x-2 mb-4">
                  <input
                    type="text"
                    value={moDescripcion}
                    onChange={(e) => setMoDescripcion(e.target.value)}
                    placeholder="Descripción del Trabajo"
                    className="w-2/3 rounded-md border-gray-300 shadow-sm p-2 border text-sm"
                  />
                  <input
                    type="number"
                    value={moCosto}
                    onChange={(e) => setMoCosto(Number(e.target.value))}
                    placeholder="Costo ($)"
                    className="w-1/3 rounded-md border-gray-300 shadow-sm p-2 border text-sm"
                  />
                  <button
                    onClick={() => addItem("mano")}
                    type="button"
                    className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition flex items-center"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                <table className="min-w-full divide-y divide-gray-200 mt-4 text-sm">
                  <tbody className="bg-white divide-y divide-gray-200">
                    {manoObra.map((item) => (
                      <tr key={item.id}>
                        <td className="px-3 py-2">{item.descripcion}</td>
                        <td className="px-3 py-2 text-right">${item.costo.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="px-3 py-2 text-right font-bold text-gray-800">
                        Total Mano de Obra:
                      </td>
                      <td className="px-3 py-2 font-bold text-red-600 text-right">
                        ${totalManoObra.toFixed(2)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            ) : (
              <div>
                <h4 className="font-semibold mb-2 text-sm text-gray-700">
                  Agregar Repuesto:
                </h4>
                <div className="flex space-x-2 mb-4">
                  <input
                    type="text"
                    value={repDescripcion}
                    onChange={(e) => setRepDescripcion(e.target.value)}
                    placeholder="Repuesto (Ej: Filtro de Aire)"
                    className="w-2/3 rounded-md border-gray-300 shadow-sm p-2 border text-sm"
                  />
                  <input
                    type="number"
                    value={repCosto}
                    onChange={(e) => setRepCosto(Number(e.target.value))}
                    placeholder="Precio ($)"
                    className="w-1/3 rounded-md border-gray-300 shadow-sm p-2 border text-sm"
                  />
                  <button
                    onClick={() => addItem("repuestos")}
                    type="button"
                    className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition flex items-center"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                <table className="min-w-full divide-y divide-gray-200 mt-4 text-sm">
                  <tbody className="bg-white divide-y divide-gray-200">
                    {repuestos.map((item) => (
                      <tr key={item.id}>
                        <td className="px-3 py-2">{item.descripcion}</td>
                        <td className="px-3 py-2 text-right">${item.costo.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="px-3 py-2 text-right font-bold text-gray-800">
                        Total Repuestos:
                      </td>
                      <td className="px-3 py-2 font-bold text-red-600 text-right">
                        ${totalRepuestos.toFixed(2)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            )}
          </div>

          {/* Resumen */}
          <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-green-500">
            <h3 className="font-bold text-gray-700 border-b pb-2 mb-4 flex items-center">
              <Receipt className="w-5 h-5 mr-2 text-green-500" /> Resumen Final
            </h3>

            <div className="flex justify-between items-center text-xl font-semibold mb-4">
              <span className="text-gray-600">
                Subtotal (Mano de Obra + Repuestos):
              </span>
              <span className="text-gray-800">
                ${(totalFinal || 0).toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between items-center text-xl font-bold mb-6 pt-2 border-t border-dashed">
              <span className="text-2xl text-gray-900">TOTAL A PAGAR:</span>
              <span className="text-3xl text-green-600">
                ${(totalFinal || 0).toFixed(2)}
              </span>
            </div>

            <button
              onClick={sendCotizacion}
              className="w-full py-3 bg-blue-600 text-white font-extrabold rounded-lg hover:bg-blue-700 transition shadow-lg flex items-center justify-center"
            >
              <Send className="w-6 h-6 mr-3" /> Enviar a Aprobación del Cliente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
