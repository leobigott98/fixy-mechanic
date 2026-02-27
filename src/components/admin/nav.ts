import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Wrench,
  TrendingUp,
  BarChart3,
} from "lucide-react";

export const adminNav = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Clientes", href: "/admin/clientes", icon: Users },
  { label: "Órdenes", href: "/admin/ordenes", icon: ClipboardList },
  { label: "Servicios", href: "/admin/servicios", icon: Wrench },
  { label: "Finanzas", href: "/admin/finanzas", icon: TrendingUp },
  { label: "Reportes", href: "/admin/reportes", icon: BarChart3 },
];