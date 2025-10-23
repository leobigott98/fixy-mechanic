"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save } from "lucide-react";

export default function CrearOrdenPage() {
  const [cliente, setCliente] = useState("");
  const [vehiculo, setVehiculo] = useState("");
  const [placa, setPlaca] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Nueva orden creada para ${cliente} (${vehiculo})`);
    router.push("/ordenes");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Crear Nueva Orden de Trabajo
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-600">
            Cliente
          </label>
          <input
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            required
            className="w-full border rounded-lg px-3 py-2 mt-1"
            placeholder="Nombre del cliente"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-600">
            Vehículo
          </label>
          <input
            value={vehiculo}
            onChange={(e) => setVehiculo(e.target.value)}
            required
            className="w-full border rounded-lg px-3 py-2 mt-1"
            placeholder="Ej: Toyota Hilux"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-600">
            Placa
          </label>
          <input
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            required
            className="w-full border rounded-lg px-3 py-2 mt-1"
            placeholder="ABC123"
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600"
        >
          <Save className="w-5 h-5 mr-2" />
          Guardar Orden
        </button>
      </form>
    </div>
  );
}
