import Link from "next/link";

export default function PricingPreview({ fullPage = false }: { fullPage?: boolean }) {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      desc: "Para probar Fixy.",
      features: ["Órdenes básicas", "Clientes", "Historial simple"],
      cta: "Comenzar",
      href: "/auth/sign-up",
      featured: false,
    },
    {
      name: "Pro",
      price: "$19",
      desc: "Para talleres activos.",
      features: ["Agenda", "Presupuestos", "Métricas", "Soporte prioritario"],
      cta: "Elegir Pro",
      href: "/auth/sign-up",
      featured: true,
    },
    {
      name: "Business",
      price: "$49",
      desc: "Para talleres con equipo.",
      features: ["Usuarios/roles", "Reportes", "Automatizaciones (próx.)", "Integraciones"],
      cta: "Hablar con ventas",
      href: "/auth/sign-up",
      featured: false,
    },
  ];

  return (
    <section className={fullPage ? "" : "bg-bg"}>
      <div className={fullPage ? "" : "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"}>
        {!fullPage && (
          <div>
            <h2 className="text-2xl font-bold">Planes</h2>
            <p className="mt-2 text-muted-fg">Empieza simple y sube cuando te convenga.</p>
          </div>
        )}

        <div className="mt-6 grid lg:grid-cols-3 gap-4">
          {plans.map((p) => (
            <div
              key={p.name}
              className={[
                "p-6 rounded-3xl border shadow-sm",
                p.featured ? "bg-card border-[hsl(var(--brand))]" : "bg-card border-border",
              ].join(" ")}
            >
              <div className="flex items-baseline justify-between">
                <div className="font-bold text-lg">{p.name}</div>
                {p.featured && (
                  <span className="text-xs px-2 py-1 rounded-full bg-brand text-brand-fg font-semibold">
                    Popular
                  </span>
                )}
              </div>
              <div className="mt-2 text-3xl font-bold">
                {p.price}
                <span className="text-sm text-muted-fg font-medium">/mes</span>
              </div>
              <div className="mt-2 text-sm text-muted-fg">{p.desc}</div>

              <ul className="mt-4 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={p.href}
                className={[
                  "mt-6 block text-center px-4 py-2.5 rounded-2xl font-semibold",
                  p.featured
                    ? "bg-brand text-brand-fg hover:bg-brand-2"
                    : "border border-border bg-bg hover:bg-muted",
                ].join(" ")}
              >
                {p.cta}
              </Link>

              <div className="mt-3 text-xs text-muted-fg">
                * Subdominio público por taller = fase 2 / plan premium.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}