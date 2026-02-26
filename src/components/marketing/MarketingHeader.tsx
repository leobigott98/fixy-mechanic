"use client";

import Link from "next/link";

export default function MarketingHeader() {
  return (
    <header className="sticky top-0 z-40 bg-card/80 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-brand text-brand-fg grid place-items-center font-bold">
            F
          </div>
          <div className="leading-tight">
            <div className="font-semibold">Fixy</div>
            <div className="text-xs text-muted-fg">Talleres • Clientes</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link className="text-muted-fg hover:text-fg" href="/pricing">
            Planes
          </Link>
          <a className="text-muted-fg hover:text-fg" href="#features">
            Beneficios
          </a>
          <a className="text-muted-fg hover:text-fg" href="#faq">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/auth/sign-in"
            className="px-3 py-2 rounded-xl border border-border bg-card hover:bg-muted text-sm font-semibold"
          >
            Entrar
          </Link>
          <Link
            href="/auth/sign-up"
            className="px-3 py-2 rounded-xl bg-brand text-brand-fg hover:bg-brand-2 text-sm font-semibold shadow-sm"
          >
            Crear cuenta
          </Link>
        </div>
      </div>
    </header>
  );
}