"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Wrench,
  CheckCircle,
  PlusCircle,
  ArrowRight,
  ArrowLeft,
  GripVertical,
  type LucideIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type ListaTipo = "presupuestos" | "patio";
type ColorTipo = "red" | "yellow" | "blue";

type Orden = {
  id: string;
  cliente: string;
  vehiculo: string;
  estado: string;
  color: ColorTipo;
  icon: LucideIcon;
  lista: ListaTipo;
  entrada?: string;
  tecnico?: string;
  pendiente?: string;
};

const initialOrdenes: Orden[] = [
  {
    id: "OT-4598",
    cliente: "María Rojas",
    vehiculo: "Toyota Hilux",
    estado: "DIAGNÓSTICO PENDIENTE",
    color: "red",
    entrada: "Hoy, 9:30 AM",
    icon: AlertTriangle,
    lista: "presupuestos",
  },
  {
    id: "OT-4597",
    cliente: "Andrés Bello",
    vehiculo: "Jeep Cherokee",
    estado: "EN REPARACIÓN",
    color: "yellow",
    tecnico: "Gabriel C.",
    icon: Wrench,
    lista: "patio",
  },
  {
    id: "OT-4596",
    cliente: "José Mendoza",
    vehiculo: "Ford Ka",
    estado: "LISTA P/ ENTREGA",
    color: "blue",
    pendiente: "$185.00",
    icon: CheckCircle,
    lista: "patio",
  },
];

const colorStyles: Record<
  ColorTipo,
  {
    card: string;
    title: string;
    badge: string;
    border: string;
  }
> = {
  red: {
    card: "bg-red-50",
    title: "text-red-800",
    badge: "bg-red-200 text-red-800",
    border: "border-red-200",
  },
  yellow: {
    card: "bg-yellow-50",
    title: "text-yellow-800",
    badge: "bg-yellow-200 text-yellow-800",
    border: "border-yellow-200",
  },
  blue: {
    card: "bg-blue-50",
    title: "text-blue-800",
    badge: "bg-blue-200 text-blue-800",
    border: "border-blue-200",
  },
};

function getOtherList(lista: ListaTipo): ListaTipo {
  return lista === "presupuestos" ? "patio" : "presupuestos";
}

function getListTitle(lista: ListaTipo) {
  return lista === "presupuestos"
    ? "Lista de Presupuestos"
    : "Lista de Vehículos en Patio";
}

type OrderCardProps = {
  orden: Orden;
  onOpen: (id: string) => void;
  onMove: (id: string, target: ListaTipo) => void;
};

function OrderCard({ orden, onOpen, onMove }: OrderCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: orden.id });

  const styles = colorStyles[orden.color];
  const Icon = orden.icon;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const targetList = getOtherList(orden.lista);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={[
        "border rounded-xl shadow-sm hover:shadow-md transition-all duration-200",
        "cursor-pointer select-none",
        "bg-white",
        isDragging ? "opacity-60 scale-[1.02] rotate-[0.5deg]" : "",
        styles.border,
      ].join(" ")}
      onClick={() => onOpen(orden.id)}
    >
      <div className={`rounded-xl p-4 ${styles.card}`}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 min-w-0 flex-1">
            <button
              type="button"
              {...attributes}
              {...listeners}
              onClick={(e) => e.stopPropagation()}
              className="mt-0.5 p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-white/70 cursor-grab active:cursor-grabbing"
              aria-label={`Arrastrar orden ${orden.id}`}
              title="Arrastrar"
            >
              <GripVertical className="w-4 h-4" />
            </button>

            <div className="min-w-0">
              <h3 className={`font-bold flex items-center ${styles.title}`}>
                <Icon className="w-5 h-5 mr-2 shrink-0" />
                {orden.id}
              </h3>

              <p className="text-sm text-gray-700 font-semibold truncate">
                {orden.cliente} ({orden.vehiculo})
              </p>

              <div className="mt-2 space-y-1">
                {orden.entrada && (
                  <p className="text-xs text-gray-500">
                    Entrada: {orden.entrada}
                  </p>
                )}
                {orden.tecnico && (
                  <p className="text-xs text-gray-500">
                    Asignado a: {orden.tecnico}
                  </p>
                )}
                {orden.pendiente && (
                  <p className="text-xs text-gray-500">
                    Total pendiente: {orden.pendiente}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2 shrink-0">
            <span
              className={`px-3 py-1 text-[11px] font-semibold rounded-full ${styles.badge}`}
            >
              {orden.estado}
            </span>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onMove(orden.id, targetList);
              }}
              className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 transition"
              title={`Mover a ${getListTitle(targetList)}`}
            >
              {orden.lista === "presupuestos" ? (
                <>
                  Mover <ArrowRight className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  <ArrowLeft className="w-3.5 h-3.5" /> Mover
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

type ColumnProps = {
  id: ListaTipo;
  title: string;
  countLabel: string;
  ordenes: Orden[];
  activeId: string | null;
  onOpen: (id: string) => void;
  onMove: (id: string, target: ListaTipo) => void;
  footerButton?: {
    label: string;
    onClick: () => void;
  };
};

function Column({
  id,
  title,
  countLabel,
  ordenes,
  activeId,
  onOpen,
  onMove,
  footerButton,
}: ColumnProps) {
  const isActiveDropZone = activeId !== null;

  return (
    <div
      className={[
        "w-full min-w-[320px] lg:min-w-0 lg:flex-1",
        "rounded-2xl border bg-white shadow-sm",
        "transition-all duration-200",
        isActiveDropZone ? "border-green-300 ring-2 ring-green-100" : "border-gray-200",
      ].join(" ")}
    >
      <div className="p-5 border-b border-gray-100">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 mt-1">{countLabel}</p>
      </div>

      <div className="p-4">
        <SortableContext
          items={ordenes.map((o) => o.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-3 min-h-[260px]">
            {ordenes.length === 0 ? (
              <div className="h-[180px] rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-sm text-gray-500 text-center px-6">
                Suelta una orden aquí o usa la flecha para moverla
              </div>
            ) : (
              ordenes.map((orden) => (
                <OrderCard
                  key={orden.id}
                  orden={orden}
                  onOpen={onOpen}
                  onMove={onMove}
                />
              ))
            )}
          </div>
        </SortableContext>

        {footerButton && (
          <button
            onClick={footerButton.onClick}
            className="mt-4 w-full px-4 py-2.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition shadow-sm flex justify-center items-center"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            {footerButton.label}
          </button>
        )}
      </div>
    </div>
  );
}

function OverlayCard({ orden }: { orden: Orden }) {
  const styles = colorStyles[orden.color];
  const Icon = orden.icon;

  return (
    <div className={`border rounded-xl shadow-2xl bg-white ${styles.border} rotate-1`}>
      <div className={`rounded-xl p-4 ${styles.card}`}>
        <h3 className={`font-bold flex items-center ${styles.title}`}>
          <Icon className="w-5 h-5 mr-2" />
          {orden.id}
        </h3>
        <p className="text-sm text-gray-700 font-semibold">
          {orden.cliente} ({orden.vehiculo})
        </p>
      </div>
    </div>
  );
}

export default function OrdenesPage() {
  const router = useRouter();
  const [ordenes, setOrdenes] = useState<Orden[]>(initialOrdenes);
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 6,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 180,
        tolerance: 8,
      },
    })
  );

  const presupuestos = useMemo(
    () => ordenes.filter((ot) => ot.lista === "presupuestos"),
    [ordenes]
  );

  const patio = useMemo(
    () => ordenes.filter((ot) => ot.lista === "patio"),
    [ordenes]
  );

  const activeOrden =
    activeId ? ordenes.find((orden) => orden.id === activeId) ?? null : null;

  const moveOrden = (ordenId: string, targetList: ListaTipo) => {
    setOrdenes((prev) =>
      prev.map((ot) =>
        ot.id === ordenId
          ? {
              ...ot,
              lista: targetList,
            }
          : ot
      )
    );
  };

  const findListByItemId = (itemId: string): ListaTipo | null => {
    const order = ordenes.find((o) => o.id === itemId);
    return order?.lista ?? null;
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    const activeId = String(active.id);
    const overId = String(over.id);

    const activeList = findListByItemId(activeId);

    let targetList: ListaTipo | null = null;

    if (overId === "presupuestos" || overId === "patio") {
      targetList = overId;
    } else {
      targetList = findListByItemId(overId);
    }

    if (!activeList || !targetList || activeList === targetList) return;

    moveOrden(activeId, targetList);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b pb-3">
        <h1 className="text-3xl font-bold text-gray-800">Órdenes de Trabajo</h1>
      </div>

      <div className="rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900">
        <span className="font-semibold">Tip:</span> puedes arrastrar las tarjetas
        entre listas, o tocar la flecha de cada tarjeta para moverla manualmente.
        En móvil, mantén presionada la tarjeta un instante y luego arrástrala.
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={(event) => setActiveId(String(event.active.id))}
        onDragEnd={handleDragEnd}
        onDragCancel={() => setActiveId(null)}
      >
        <div className="flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory">
          <div id="presupuestos" className="snap-start w-full">
            <Column
              id="presupuestos"
              title="Lista de Presupuestos"
              countLabel={`${presupuestos.length} enviados`}
              ordenes={presupuestos}
              activeId={activeId}
              onOpen={(id) => router.push(`/app/ordenes/${id}`)}
              onMove={(id, target) => moveOrden(id, target)}
              footerButton={{
                label: "Crear Nuevo Presupuesto",
                onClick: () => router.push("/app/presupuesto"),
              }}
            />
          </div>

          <div id="patio" className="snap-start w-full">
            <Column
              id="patio"
              title="Lista de Vehículos en Patio"
              countLabel={`${patio.length} activas`}
              ordenes={patio}
              activeId={activeId}
              onOpen={(id) => router.push(`/app/ordenes/${id}`)}
              onMove={(id, target) => moveOrden(id, target)}
            />
          </div>
        </div>

        <DragOverlay>
          {activeOrden ? <OverlayCard orden={activeOrden} /> : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
