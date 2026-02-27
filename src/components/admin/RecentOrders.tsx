"use client";

const orders = [
  { id: "OT-1042", customer: "Carlos P.", status: "Pendiente", total: "$28.00" },
  { id: "OT-1041", customer: "María G.", status: "En progreso", total: "$55.00" },
  { id: "OT-1040", customer: "Taller Express", status: "Completada", total: "$19.00" },
  { id: "OT-1039", customer: "Luis R.", status: "Completada", total: "$42.00" },
];

const badge = (s: string) => {
  if (s === "Completada") return "bg-green-50 text-green-700 border-green-200";
  if (s === "En progreso") return "bg-blue-50 text-blue-700 border-blue-200";
  return "bg-amber-50 text-amber-700 border-amber-200";
};

export default function RecentOrders() {
  return (
    <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm">
      <h2 className="text-base font-semibold text-gray-900">Órdenes recientes</h2>
      <div className="mt-4 space-y-3">
        {orders.map((o) => (
          <div key={o.id} className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-gray-900">{o.id}</div>
              <div className="text-sm text-gray-600">{o.customer}</div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-xs px-2 py-1 rounded-full border ${badge(o.status)}`}>
                {o.status}
              </span>
              <span className="text-sm font-semibold text-gray-900">{o.total}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}