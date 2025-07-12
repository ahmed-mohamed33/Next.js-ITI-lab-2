"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Users", path: "/users" },
  { name: "Login", path: "/login" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-xl">
            Ahmed Selim - Next.js App
          </Link>

          <div className="flex items-center space-x-4">
            {links.map((link) => (
              <Link
                href={link.path}
                key={link.name}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${pathname === link.path
                  ? "bg-green-500 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
