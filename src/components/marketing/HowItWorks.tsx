export default function HowItWorks() {
  const steps = [
    { n: "1", title: "Crea tu cuenta", desc: "Registra tu taller en minutos." },
    { n: "2", title: "Configura servicios", desc: "Precios, tiempos, categorías." },
    { n: "3", title: "Recibe y gestiona órdenes", desc: "Agenda, estados y comunicación." },
    { n: "4", title: "Crece con métricas", desc: "Ingresos, demanda, rendimiento." },
  ];

  return (
    <section className="bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-card border border-border shadow-sm">
          <h2 className="text-2xl font-bold">Cómo funciona</h2>
          <p className="mt-2 text-muted-fg">Un flujo simple, diseñado para talleres ocupados.</p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div key={s.n} className="p-5 rounded-2xl bg-bg border border-border">
                <div className="h-9 w-9 rounded-xl bg-brand text-brand-fg grid place-items-center font-bold">
                  {s.n}
                </div>
                <div className="mt-3 font-semibold">{s.title}</div>
                <div className="mt-1 text-sm text-muted-fg">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}