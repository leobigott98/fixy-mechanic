// src/app/(marketing)/pricing/page.tsx
import PricingPreview from "@/components/marketing/PricingPreview";
import FAQ from "@/components/marketing/FAQ";

export default function PricingPage() {
  return (
    <div className="bg-bg text-fg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold">Planes</h1>
          <p className="mt-2 text-muted-fg">
            Elige un plan para tu taller y empieza a recibir más clientes con menos fricción.
          </p>
        </div>

        <PricingPreview fullPage />
        <FAQ />
      </div>
    </div>
  );
}