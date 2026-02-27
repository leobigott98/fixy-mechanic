export default function ClientesPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Clientes</h1>
          <p className="text-sm text-gray-600">Gestión de clientes del taller.</p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700">
          + Agregar
        </button>
      </div>

      <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
        <input
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 outline-none"
          placeholder="Buscar cliente…"
        />
      </div>

      <div className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
        <div className="grid grid-cols-12 px-5 py-3 text-xs font-semibold text-gray-500 bg-gray-50">
          <div className="col-span-3">RIF/Cédula</div>
          <div className="col-span-5">Nombre</div>
          <div className="col-span-2">Tipo</div>
          <div className="col-span-2 text-right">Acciones</div>
        </div>

        {[
          { id: "V-12345678", name: "Carlos Pérez", type: "Natural" },
          { id: "J-000063729", name: "Alimentos Polar C.A.", type: "Jurídico" },
        ].map((c) => (
          <div key={c.id} className="grid grid-cols-12 px-5 py-4 border-t">
            <div className="col-span-3 font-semibold text-gray-900">{c.id}</div>
            <div className="col-span-5 text-gray-800">{c.name}</div>
            <div className="col-span-2 text-gray-700">{c.type}</div>
            <div className="col-span-2 text-right text-blue-600 font-semibold cursor-pointer">
              •••
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}