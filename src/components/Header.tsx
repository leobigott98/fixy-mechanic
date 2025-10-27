"use client";
import { useState } from "react";
import { LifeBuoy, Box, MessageCircle, Menu, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Mensajes", icon: <MessageCircle className="w-5 h-5 mr-1" />, path: "/mensajeria" },
    { label: "Inventario", icon: <Box className="w-5 h-5 mr-1" />, path: "/inventario" },
    { label: "Soporte", icon: <LifeBuoy className="w-5 h-5 mr-1" />, path: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div
          onClick={() => router.push("/")}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="16 3 21 8 21 21 3 21 3 8 8 3" />
            <line x1="12" y1="12" x2="12" y2="17" />
            <line x1="17" y1="12" x2="17" y2="17" />
            <line x1="7" y1="12" x2="7" y2="17" />
          </svg>
          <span className="text-xl font-extrabold text-blue-600">FIxy</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => router.push(item.path)}
              className="flex items-center text-gray-600 hover:text-gray-800 transition"
            >
              {item.icon} {item.label}
            </button>
          ))}

          <button
            onClick={() => router.push("/perfil")}
            className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-3 rounded-full hover:bg-blue-600 shadow-md transition"
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

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 hover:text-gray-900"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="absolute top-0 left-0 w-64 h-full bg-white shadow-2xl p-6 flex flex-col"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-extrabold text-blue-600">FIxy</span>
                <button onClick={() => setIsOpen(false)}>
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              <div className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      setIsOpen(false);
                      router.push(item.path);
                    }}
                    className="flex items-center text-gray-700 hover:text-blue-600 w-full text-left transition"
                  >
                    {item.icon} {item.label}
                  </button>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    router.push("/perfil");
                  }}
                  className="flex items-center w-full space-x-2 bg-blue-500 text-white py-2 px-3 rounded-full hover:bg-blue-600 shadow-md transition"
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

