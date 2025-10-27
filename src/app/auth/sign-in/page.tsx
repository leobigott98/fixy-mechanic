"use client";

import { useState, useActionState } from "react";
import { signIn } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { LogIn, Wrench } from "lucide-react";

const initialState = { error: null, loading: false };

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, formAction, isPending] = useActionState(signIn, initialState);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-600 text-white p-3 rounded-full shadow-md">
            <Wrench className="w-6 h-6" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Bienvenido a FIxy
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Inicia sesión para acceder al panel de tu taller
        </p>

        <form action={formAction} className="space-y-4 text-left">
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="ejemplo@fixy.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {state?.error && (
            <p className="text-red-600 text-sm">{state.error}</p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition shadow-md flex items-center justify-center"
          >
            {isPending ? (
              "Ingresando..."
            ) : (
              <>
                <LogIn className="w-5 h-5 mr-2" /> Ingresar
              </>
            )}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          ¿No tienes cuenta?{" "}
          <button
            onClick={() => router.push("/auth/sign-up")}
            className="text-blue-600 hover:underline"
          >
            Regístrate
          </button>
        </p>
      </div>
    </div>
  );
}
