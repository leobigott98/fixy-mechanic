import Link from "next/link";

export default function MarketingFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row gap-8 justify-between">
          <div>
            <div className="font-semibold">Fixy</div>
            <div className="text-sm text-muted-fg mt-1">
              La plataforma para talleres mecánicos modernos.
            </div>
            <div className="text-xs text-muted-fg mt-4">
              Tip: prueba temas con <span className="font-mono">?theme=teal</span>,{" "}
              <span className="font-mono">?theme=purple</span>.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <div className="font-semibold">Producto</div>
              <Link className="text-muted-fg hover:text-fg block" href="/pricing">
                Planes
              </Link>
              <Link className="text-muted-fg hover:text-fg block" href="/auth/sign-up">
                Registro
              </Link>
            </div>
            <div className="space-y-2">
              <div className="font-semibold">Legal</div>
              <Link className="text-muted-fg hover:text-fg block" href="/legal/terms">
                Términos
              </Link>
              <Link className="text-muted-fg hover:text-fg block" href="/legal/privacy">
                Privacidad
              </Link>
            </div>
          </div>
        </div>

        <div className="text-xs text-muted-fg mt-10">
          © {new Date().getFullYear()} Fixy. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}