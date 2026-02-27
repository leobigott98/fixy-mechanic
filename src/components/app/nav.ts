import {
  LayoutDashboard,
  ClipboardList,
  CalendarDays,
  FileText,
  Car,
  MessageCircle,
  //Settings,
  Clock,
  Banknote,
  ChartLineIcon
} from "lucide-react";

export const appNav = [
  { label: "Dashboard", href: "/app/dashboard", icon: LayoutDashboard },
  { label: "Órdenes", href: "/app/ordenes", icon: ClipboardList },
  { label: "Calendario", href: "/app/calendario", icon: CalendarDays },
  { label: "Historial", href: "/app/historial", icon: FileText },
  { label: "Pendientes", href: "/app/pendientes", icon: Clock },
  { label: "Inventario", href: "/app/inventario", icon: Car },
  { label: "Mensajes", href: "/app/mensajeria", icon: MessageCircle },
  /* { label: "Ajustes", href: "/app/settings", icon: Settings }, */
  { label: "Presupuesto", href: "/app/presupuesto", icon: FileText },
  { label: "Ranking", href: "/app/ranking", icon: ChartLineIcon },
  { label: "Ingresos", href: "/app/ingresos", icon: Banknote },
];