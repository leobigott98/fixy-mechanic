export default function FAQ() {
  const items = [
    { q: "¿Fixy es para talleres o para clientes?", a: "Para ambos. En esta fase, el foco es que el taller gestione mejor y venda más." },
    { q: "¿Puedo tener una página pública para mi taller?", a: "Sí, pero lo dejaremos como feature premium en fase 2." },
    { q: "¿Cómo se pagan los planes?", a: "Podemos empezar con flujo simple y luego integrar pagos automatizados." },
  ];

  return (
    <section id="faq" className="bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="p-6 sm:p-10 rounded-3xl bg-card border border-border shadow-sm">
          <h2 className="text-2xl font-bold">Preguntas frecuentes</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {items.map((x) => (
              <div key={x.q} className="p-5 rounded-2xl bg-bg border border-border">
                <div className="font-semibold">{x.q}</div>
                <div className="mt-2 text-sm text-muted-fg">{x.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}