import RevenueTrend from "@/components/admin/RevenueTrend";
import TopServicesTable from "@/components/admin/TopServicesTable";
import StatCards from "@/components/admin/StatCards";
import RecentOrders from "@/components/admin/RecentOrders";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-600">
          Visión general del negocio (últimos 30 días).
        </p>
      </div>

      <StatCards />

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