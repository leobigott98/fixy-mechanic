
import "./globals.css";
import Header from "@/components/Header";
import type { ReactNode } from "react";

export const metadata = { title: "FIxy | Dashboard Comercio" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
      </body>
    </html>
  );
}
