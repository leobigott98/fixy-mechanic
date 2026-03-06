import AppStatCards from "@/components/app/AppStatCards";
import RevenueTrend from "@/components/admin/RevenueTrend";
import RecentOrders from "@/components/admin/RecentOrders";
import TopServicesTable from "@/components/admin/TopServicesTable";
import Link from "next/link";
import { PlusCircle, Car } from "lucide-react";

export default function AppDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-fg">Dashboard</h1>
          <p className="text-sm text-muted-fg">
            Resumen de tu taller (últimos 30 días).
          </p>
        </div>
        <div className="w-full sm:w-auto px-4 py-0 rounded-lg bg-card border border-border shadow-sm">
          <div className="flex items-start justify-center">
            <div className="md:flex">
              <div className="text-xs font-semibold tracking-wide text-muted-fg uppercase my-auto">
                Espacios Disponibles:
              </div>
              <div className="flex sm:flex-col md:flex-row items-center gap-2 ml-4">
                <div className="my-auto text-xl font-bold text-fg ml-2">
                  2/4
                </div>
                <div className="my-auto ml-2 sm:ml-0 h-10 w-10 rounded-2xl bg-muted flex items-center justify-center">
                  <Car size={24} className="text-[hsl(var(--brand))]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link
            href={"/app/presupuesto"}
            className="mt-6 w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition shadow-md flex justify-center items-center"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            Crear Nuevo Presupuesto
          </Link>
        </div>
      </div>

      <AppStatCards />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <RevenueTrend />
        </div>
        <RecentOrders />
      </div>

      <TopServicesTable />
    </div>
  );
}
