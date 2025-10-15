
"use client";
import { LifeBuoy } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <div onClick={() => router.push("/")} className="flex items-center space-x-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <polyline points="16 3 21 8 21 21 3 21 3 8 8 3" />
            <line x1="12" y1="12" x2="12" y2="17" />
            <line x1="17" y1="12" x2="17" y2="17" />
            <line x1="7" y1="12" x2="7" y2="17" />
          </svg>
          <span className="text-xl font-extrabold text-blue-600">FIxy</span>
        </div>
        <nav className="flex items-center space-x-4">
          <button className="flex items-center text-gray-600 hover:text-gray-800">
            <LifeBuoy className="w-5 h-5 mr-1" /> Soporte
          </button>
          <button
            onClick={() => router.push("/perfil")}
            className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-3 rounded-full hover:bg-blue-600 shadow-md"
          >
            <Image
              src="https://placehold.co/150x150/0d6efd/ffffff?text=T"
              alt="Perfil"
              width={28}
              height={28}
              className="rounded-full"
              unoptimized
            />
            <span className="text-sm font-medium">Perfil de Taller</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
