import {
  LayoutDashboard,
  ClipboardList,
  CalendarDays,
  FileText,
  Car,
  //MessageCircle,
  //Settings,
  //Clock,
  Banknote,
  //ChartLineIcon,
  Users
} from "lucide-react";

export const appNav = [
  { label: "Dashboard", href: "/app/dashboard", icon: LayoutDashboard },
  { label: "Presupuesto", href: "/app/presupuesto", icon: FileText },
  { label: "Órdenes", href: "/app/ordenes", icon: ClipboardList },
  { label: "Mecánicos", href: "/app/mecanicos", icon: Users },
  { label: "Calendario", href: "/app/calendario", icon: CalendarDays },
  { label: "Historial", href: "/app/historial", icon: FileText },
/*   { label: "Pendientes", href: "/app/pendientes", icon: Clock }, */
  { label: "Inventario", href: "/app/inventario", icon: Car },
/*   { label: "Mensajes", href: "/app/mensajeria", icon: MessageCircle }, */
  /* { label: "Ajustes", href: "/app/settings", icon: Settings }, */
/*   { label: "Ranking", href: "/app/ranking", icon: ChartLineIcon }, */
  { label: "Finanzas", href: "/app/ingresos", icon: Banknote },
];