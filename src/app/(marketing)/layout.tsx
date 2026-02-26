// src/app/(marketing)/layout.tsx
import { ReactNode } from "react";
import MarketingHeader from "@/components/marketing/MarketingHeader";
import MarketingFooter from "@/components/marketing/MarketingFooter";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <MarketingHeader />
      <main>{children}</main>
      <MarketingFooter />
    </div>
  );
}