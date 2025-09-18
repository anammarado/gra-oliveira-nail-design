"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Upright } from "next/font/google";

const cormorantUpright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`w-full bg-black shadow-md ${cormorantUpright.className} h-26 relative`}
    >
      <div className="flex items-center justify-between w-full h-full px-4">
        <Link href="/" className="flex items-center pl-2">
          <Image
            src="/logo.png"
            alt="Gra Oliveira Logo"
            width={160}
            height={54}
            className="object-contain w-40 mt-1 -mb-2"
            priority
          />
        </Link>

        <button
          className="z-50 p-2 rounded md:hidden focus:outline-none focus:ring-2 focus:ring-brand-gold"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-brand-gold mb-1"></span>
          <span className="block w-6 h-0.5 bg-brand-gold mb-1"></span>
          <span className="block w-6 h-0.5 bg-brand-gold"></span>
        </button>

        <nav className="hidden pr-2 space-x-6 text-2xl font-bold md:flex">
          <Link
            href="#"
            className="font-bold text-brand-gold hover:text-gold-500"
          >
            Agenda Online
          </Link>
          <Link
            href="#"
            className="font-bold text-brand-gold hover:text-gold-500"
          >
            Formação
          </Link>
          <Link
            href="#"
            className="font-bold text-brand-gold hover:text-gold-500"
          >
            Galeria
          </Link>
          <Link
            href="#"
            className="font-bold text-brand-gold hover:text-gold-500"
          >
            Parcerias
          </Link>
          <Link
            href="#"
            className="font-bold text-brand-gold hover:text-gold-500"
          >
            Eventos
          </Link>
        </nav>
      </div>

      {menuOpen && (
        <nav className="absolute left-0 z-40 flex flex-col items-center w-full py-4 bg-black shadow-md top-full md:hidden">
          <Link
            href="#"
            className="py-2 text-lg font-bold text-brand-gold hover:text-gold-500"
            onClick={() => setMenuOpen(false)}
          >
            Agenda Online
          </Link>
          <Link
            href="#"
            className="py-2 text-lg font-bold text-brand-gold hover:text-gold-500"
            onClick={() => setMenuOpen(false)}
          >
            Formação
          </Link>
          <Link
            href="#"
            className="py-2 text-lg font-bold text-brand-gold hover:text-gold-500"
            onClick={() => setMenuOpen(false)}
          >
            Galeria
          </Link>
          <Link
            href="#"
            className="py-2 text-lg font-bold text-brand-gold hover:text-gold-500"
            onClick={() => setMenuOpen(false)}
          >
            Parcerias
          </Link>
          <Link
            href="#"
            className="py-2 text-lg font-bold text-brand-gold hover:text-gold-500"
            onClick={() => setMenuOpen(false)}
          >
            Eventos
          </Link>
        </nav>
      )}
    </header>
  );
}
