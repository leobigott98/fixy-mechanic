"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Users,
  MessageSquare,
  Send,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface ChatPreview {
  id: number;
  nombre: string;
  tipo: "SERVICIO" | "REPUESTO";
  detalle: string;
  ultimoMensaje: string;
  color: string;
}

interface Mensaje {
  de: "cliente" | "taller";
  texto: string;
  hora: string;
}

export default function MensajeriaPage() {
  const router = useRouter();
  const [chatSeleccionado, setChatSeleccionado] = useState<ChatPreview | null>(
    null
  );
  const [mensajes, setMensajes] = useState<Mensaje[]>([]);
  const [nuevoMensaje, setNuevoMensaje] = useState("");

  const chats: ChatPreview[] = [
    {
      id: 1,
      nombre: "Giordi Pérez",
      tipo: "SERVICIO",
      detalle: "Vehículo: Toyota Corolla",
      ultimoMensaje: "¿Pueden confirmar mi cita para el martes a las 10 am?",
      color: "blue",
    },
    {
      id: 2,
      nombre: "María Velez",
      tipo: "REPUESTO",
      detalle: "Repuesto: Filtro de Aceite (A01)",
      ultimoMensaje: "¿Hay disponibilidad inmediata para retirar hoy?",
      color: "green",
    },
    {
      id: 3,
      nombre: "Andrés Bello",
      tipo: "SERVICIO",
      detalle: "Vehículo: Jeep Cherokee",
      ultimoMensaje: "Acepto el presupuesto de $197. Pueden continuar.",
      color: "blue",
    },
    {
      id: 4,
      nombre: "Cliente Anónimo",
      tipo: "REPUESTO",
      detalle: "Repuesto: Bujías NGK (Juego)",
      ultimoMensaje: "¿Cuál es el precio si compro 2 juegos?",
      color: "green",
    },
    {
      id: 5,
      nombre: "Gabriel Cova",
      tipo: "SERVICIO",
      detalle: "Vehículo: Ford Fiesta",
      ultimoMensaje: "¿El reemplazo de pastillas incluye garantía de FIxy?",
      color: "blue",
    },
  ];

  const seleccionarChat = (chat: ChatPreview) => {
    setChatSeleccionado(chat);
    setMensajes([
      {
        de: "cliente",
        texto: chat.ultimoMensaje,
        hora: "10:45 AM",
      },
      {
        de: "taller",
        texto: "¡Hola! Claro que sí, déjame confirmarte eso.",
        hora: "10:46 AM",
      },
    ]);
  };

  const enviarMensaje = () => {
    if (!nuevoMensaje.trim()) return;
    const nuevo: Mensaje = {
      de: "taller",
      texto: nuevoMensaje,
      hora: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMensajes([...mensajes, nuevo]);
    setNuevoMensaje("");
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b pb-3">
        <h1 className="text-3xl font-bold text-gray-800">
          Mensajería Directa con Clientes FIxy
        </h1>
        <button
          onClick={() => router.push("/")}
          className="flex items-center text-blue-600 hover:text-blue-800 font-semibold p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al Dashboard
        </button>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[75vh]">
        {/* Lista de chats */}
        <div className="bg-white p-4 rounded-2xl shadow-xl overflow-y-auto">
          <h2 className="text-xl font-bold text-gray-700 mb-4 border-b pb-2 flex items-center">
            <Users className="w-5 h-5 mr-2" /> Conversaciones Activas
          </h2>

          <div className="space-y-3">
            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => seleccionarChat(chat)}
                className={`p-3 border-l-4 rounded-lg shadow-sm cursor-pointer transition duration-150 ${
                  chatSeleccionado?.id === chat.id
                    ? "bg-blue-100 border-blue-500"
                    : chat.color === "blue"
                    ? "border-blue-500 bg-blue-50 hover:bg-blue-100"
                    : "border-green-500 bg-green-50 hover:bg-green-100"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-gray-900">{chat.nombre}</span>
                  <span
                    className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                      chat.color === "blue"
                        ? "bg-blue-200 text-blue-800"
                        : "bg-green-200 text-green-800"
                    }`}
                  >
                    {chat.tipo}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{chat.detalle}</p>
                <p className="text-xs text-gray-500 italic mt-1 truncate">
                  &ldquo;{chat.ultimoMensaje}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Detalle de chat */}
        <div className="lg:col-span-2 bg-gray-100 rounded-2xl shadow-xl flex flex-col">
          {/* Encabezado */}
          <div className="p-4 border-b border-gray-200 bg-white rounded-t-2xl">
            {chatSeleccionado ? (
              <>
                <h3 className="text-xl font-bold text-gray-800">
                  {chatSeleccionado.nombre}
                </h3>
                <p className="text-sm text-gray-500">
                  {chatSeleccionado.detalle}
                </p>
              </>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-800">
                  Selecciona una conversación
                </h3>
                <p className="text-sm text-gray-500">
                  Para iniciar la mensajería.
                </p>
              </>
            )}
          </div>

          {/* Mensajes */}
          <div className="flex-grow p-4 space-y-4 overflow-y-auto">
            {chatSeleccionado ? (
              mensajes.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.de === "taller" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-xl shadow-sm ${
                      msg.de === "taller"
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-white text-gray-800 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm">{msg.texto}</p>
                    <p className="text-[10px] opacity-70 mt-1 text-right">
                      {msg.hora}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center p-4 bg-white rounded-xl text-gray-500 text-sm">
                <MessageSquare className="w-5 h-5 mx-auto mb-2" />
                El chat se cargará aquí al seleccionar una conversación de la lista.
              </div>
            )}
          </div>

          {/* Input */}
          {chatSeleccionado && (
            <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Escribe tu mensaje..."
                  value={nuevoMensaje}
                  onChange={(e) => setNuevoMensaje(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && enviarMensaje()}
                  className="flex-grow rounded-full border border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500"
                />
                <button
                  onClick={enviarMensaje}
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-150 shadow-lg flex items-center justify-center"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
