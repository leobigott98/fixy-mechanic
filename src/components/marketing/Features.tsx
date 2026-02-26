export default function Features() {
  const items = [
    { title: "Órdenes y estados", desc: "Pendiente, en progreso, completada. Sin perder contexto." },
    { title: "Presupuestos", desc: "Genera y comparte presupuestos más rápido." },
    { title: "Agenda de citas", desc: "Evita choques. Ve la carga semanal." },
    { title: "Historial del vehículo", desc: "Todo el mantenimiento en un solo lugar." },
    { title: "Métricas", desc: "Ingresos, demanda, top servicios, rendimiento." },
    { title: "Soporte", desc: "Canales claros y trazables, menos WhatsApp." },
  ];

  return (
    <section id="features" className="bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-bold">Hecho para talleres reales</h2>
          <p className="mt-2 text-muted-fg">
            Menos tareas repetitivas. Más control y profesionalismo.
          </p>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((i) => (
            <div key={i.title} className="p-6 rounded-3xl bg-card border border-border shadow-sm">
              <div className="font-semibold">{i.title}</div>
              <div className="mt-2 text-sm text-muted-fg">{i.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}