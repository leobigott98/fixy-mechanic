export default function Testimonials() {
  const t = [
    { name: "Taller Mecánico Rápido", quote: "Bajamos el caos. Ahora las órdenes tienen estado y el cliente entiende el proceso." },
    { name: "Cliente (Caracas)", quote: "Me gustó que puedo ver el historial y el presupuesto sin estar preguntando todo el tiempo." },
    { name: "Taller Express", quote: "Las métricas ayudan a ver qué servicios dejan más y dónde se va el tiempo." },
  ];

  return (
    <section className="bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-card border border-border shadow-sm">
          <h2 className="text-2xl font-bold">Lo que dicen</h2>
          <p className="mt-2 text-muted-fg">Social proof (puedes reemplazar con reales luego).</p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {t.map((x) => (
              <div key={x.name} className="p-6 rounded-3xl bg-bg border border-border">
                <div className="text-sm text-muted-fg">“{x.quote}”</div>
                <div className="mt-4 font-semibold">{x.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}