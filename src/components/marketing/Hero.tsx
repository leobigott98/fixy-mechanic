import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-fg text-xs font-semibold border border-border">
              Nuevo • Talleres con mini sitio público (fase 2: subdominios)
            </div>

            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
              Más clientes. Menos caos. <span className="text-[hsl(var(--brand))]">Todo en Fixy</span>.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted-fg">
              Administra órdenes, agenda, presupuestos, historial y comunicación con clientes desde un solo lugar.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/auth/sign-up"
                className="px-5 py-3 rounded-2xl bg-brand text-brand-fg hover:bg-brand-2 font-semibold shadow-sm text-center"
              >
                Crear cuenta
              </Link>
              <Link
                href="/pricing"
                className="px-5 py-3 rounded-2xl border border-border bg-card hover:bg-muted font-semibold text-center"
              >
                Ver planes
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
              <div className="p-3 rounded-2xl bg-card border border-border">
                <div className="font-bold">+Ventas</div>
                <div className="text-muted-fg">Mejor seguimiento</div>
              </div>
              <div className="p-3 rounded-2xl bg-card border border-border">
                <div className="font-bold">+Orden</div>
                <div className="text-muted-fg">Menos mensajes</div>
              </div>
              <div className="p-3 rounded-2xl bg-card border border-border">
                <div className="font-bold">+Reputación</div>
                <div className="text-muted-fg">Reseñas & rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-card border border-border shadow-sm p-5">
              <div className="text-sm font-semibold">Vista previa</div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {[
                  { label: "Ingresos", value: "$1,580" },
                  { label: "Servicios", value: "48" },
                  { label: "Pendientes", value: "5" },
                  { label: "Rating", value: "4.7" },
                ].map((k) => (
                  <div key={k.label} className="p-4 rounded-2xl bg-muted border border-border">
                    <div className="text-xs text-muted-fg font-semibold uppercase">{k.label}</div>
                    <div className="mt-2 text-2xl font-bold">{k.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 rounded-2xl bg-bg border border-border">
                <div className="text-sm font-semibold">Acciones rápidas</div>
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                  <div className="p-3 rounded-2xl bg-card border border-border">Órdenes</div>
                  <div className="p-3 rounded-2xl bg-card border border-border">Calendario</div>
                  <div className="p-3 rounded-2xl bg-card border border-border">Presupuesto</div>
                  <div className="p-3 rounded-2xl bg-card border border-border">Historial</div>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 -inset-6 blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle at 30% 20%, hsl(var(--brand)) 0%, transparent 60%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}