"use client";

const services = [
  { name: "Cambio de aceite", count: 42, revenue: "$1,260" },
  { name: "Alineación y balanceo", count: 28, revenue: "$980" },
  { name: "Diagnóstico", count: 21, revenue: "$630" },
  { name: "Frenos", count: 17, revenue: "$720" },
];

export default function TopServicesTable() {
  return (
    <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Servicios más vendidos</h2>
          <p className="text-sm text-gray-600">Top 4 (mock).</p>
        </div>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-gray-500">
            <tr className="border-b">
              <th className="py-2">Servicio</th>
              <th className="py-2">Cantidad</th>
              <th className="py-2">Ingresos</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr key={s.name} className="border-b last:border-b-0">
                <td className="py-3 font-medium text-gray-900">{s.name}</td>
                <td className="py-3 text-gray-700">{s.count}</td>
                <td className="py-3 font-semibold text-gray-900">{s.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}