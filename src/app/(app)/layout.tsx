// src/app/(app)/layout.tsx
import { ReactNode } from "react";
import Header from "@/components/Header";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
  <div className="min-h-screen bg-bg text-fg">
    <Header />
    {children}
</div>
  )
}
