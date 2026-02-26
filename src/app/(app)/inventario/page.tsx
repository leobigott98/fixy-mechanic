"use client";

import { useState } from "react";
import {
  ArrowLeft,
  PackagePlus,
  Save,
  ListChecks,
  AlertTriangle,
  Lightbulb,
  Trash2,
  Edit3,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  title: string;
  units: number;
  cost: number;
  price: number;
}

export default function InventarioPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [units, setUnits] = useState<number | "">("");
  const [cost, setCost] = useState<number | "">("");
  const [price, setPrice] = useState<number | "">("");
  const [inventory, setInventory] = useState<Product[]>([
    { id: 1, title: "Filtro de Aceite", units: 3, cost: 8, price: 12 },
    { id: 2, title: "Aceite 20W-40 Shellby", units: 15, cost: 10, price: 14 },
  ]);

  const lowStockItems = inventory.filter((item) => item.units < 5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !units || !cost || !price) {
      alert("Por favor complete todos los campos");
      return;
    }

    const newItem: Product = {
      id: Date.now(),
      title,
      units: Number(units),
      cost: Number(cost),
      price: Number(price),
    };

    setInventory([...inventory, newItem]);
    setTitle("");
    setUnits("");
    setCost("");
    setPrice("");
  };

  const deleteItem = (id: number) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b pb-3">
        <h1 className="text-3xl font-bold text-gray-800">
          Gestión de Inventario y Repuestos
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
        {/* Registrar Nuevo Ítem */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-xl h-fit">
          <h2 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
            <PackagePlus className="w-5 h-5 mr-2 text-green-500" /> Registrar
            Nuevo Ítem
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Título / Descripción
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ej: Aceite 20W-40 Shellby"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Nombre exacto y especificaciones del repuesto.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Unidades (Stock)
                </label>
                <input
                  type="number"
                  value={units}
                  onChange={(e) => setUnits(Number(e.target.value))}
                  placeholder="40"
                  min="0"
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Stock disponible en físico.
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Costo Unitario ($)
                </label>
                <input
                  type="number"
                  value={cost}
                  onChange={(e) => setCost(Number(e.target.value))}
                  placeholder="40.00"
                  step="0.01"
                  min="0"
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Costo unitario de adquisición.
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Precio de Venta Sugerido ($)
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                placeholder="45.00"
                step="0.01"
                min="0"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                required
              />
              <p className="text-xs text-blue-500 mt-1 flex items-center">
                <Lightbulb className="w-4 h-4 mr-1" />
                Precio optimizado para Marketplace.
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-md flex items-center justify-center"
            >
              <Save className="w-5 h-5 mr-2" /> Guardar Ítem de Inventario
            </button>
          </form>
        </div>

        {/* Tabla de Inventario */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-xl overflow-x-auto">
          <h2 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
            <ListChecks className="w-5 h-5 mr-2 text-blue-500" /> Stock Actual y
            Alertas
          </h2>

          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Producto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Unidades
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Costo ($)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Precio Venta ($)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {inventory.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-3 font-medium text-gray-800">
                    {item.title}
                  </td>
                  <td
                    className={`px-6 py-3 ${
                      item.units < 5
                        ? "text-red-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {item.units}
                  </td>
                  <td className="px-6 py-3 text-gray-700">
                    ${item.cost.toFixed(2)}
                  </td>
                  <td className="px-6 py-3 text-gray-700">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-3 space-x-2 flex items-center">
                    <button
                      onClick={() => alert("Editar funcionalidad futura")}
                      className="p-1 text-blue-600 hover:text-blue-800"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="p-1 text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {lowStockItems.length > 0 && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Alerta: El stock de{" "}
              <span className="font-semibold mx-1">
                {lowStockItems.map((i) => `"${i.title}"`).join(", ")}
              </span>
              está por debajo de 5 unidades.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
