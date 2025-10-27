"use client";

import { useState, useActionState } from "react";
import { useRouter } from "next/navigation";
import { UserPlus, Wrench } from "lucide-react";
import { signUp } from "@/lib/actions";

const initialState = { error: null, loading: false };

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [state, formAction, isPending] = useActionState(signUp, initialState);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-green-600 text-white p-3 rounded-full shadow-md">
            <Wrench className="w-6 h-6" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Crear cuenta FIxy
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Regístrate para gestionar tu taller
        </p>

        <form action={formAction} className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="ejemplo@fixy.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="********"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
          </div>

          {state?.error && <p className="text-red-600 text-sm">{state.error}</p>}

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition shadow-md flex items-center justify-center"
          >
            {isPending ? (
              "Creando cuenta..."
            ) : (
              <>
                <UserPlus className="w-5 h-5 mr-2" /> Registrarse
              </>
            )}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          ¿Ya tienes cuenta?{" "}
          <button
            onClick={() => router.push("/sign-in")}
            className="text-blue-600 hover:underline"
          >
            Inicia sesión
          </button>
        </p>
      </div>
    </div>
  );
}
