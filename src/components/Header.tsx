"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Upright } from "next/font/google";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import TrainingPage from "@/app/[locale]/training/page";

const cormorantUpright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`w-full bg-black shadow-md ${cormorantUpright.className} h-26 relative`}
    >
      <div className="flex items-center justify-between w-full h-full px-4">
        <Link href={`/${locale}`} className="flex items-center pl-2">
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
          <span className="block w-6 h-0.5 bg-brand-gold mb-1" />
          <span className="block w-6 h-0.5 bg-brand-gold mb-1" />
          <span className="block w-6 h-0.5 bg-brand-gold" />
        </button>

        <nav className="hidden pr-2 space-x-6 text-2xl font-bold md:flex">
          <Link
            href={`/${locale}`}
            className="font-bold text-brand-gold hover:text-gold-500"
          >
            {t("onlineSchedule")}
          </Link>
          <Link
            href={`/${locale}/training`}
            className="font-bold text-brand-gold hover:text-gold-500"
          >
            {t("training")}
          </Link>
          <Link
            href={`/${locale}`}
            className="font-bold text-brand-gold hover:text-gold-500"
          >
            {t("gallery")}
          </Link>
          <Link
            href={`/${locale}`}
            className="font-bold text-brand-gold hover:text-gold-500"
          >
            {t("partnerships")}
          </Link>
          <Link
            href={`/${locale}`}
            className="font-bold text-brand-gold hover:text-gold-500"
          >
            {t("events")}
          </Link>
        </nav>
      </div>

      {menuOpen && (
        <nav className="absolute left-0 z-40 flex flex-col items-center w-full py-4 bg-black shadow-md top-full md:hidden">
          <Link
            href={`/${locale}`}
            className="py-2 text-lg font-bold text-brand-gold hover:text-gold-500"
          >
            {t("onlineSchedule")}
          </Link>
          <Link
            href={`/${locale}`}
            className="py-2 text-lg font-bold text-brand-gold hover:text-gold-500"
          >
            {t("training")}
          </Link>
          <Link
            href={`/${locale}`}
            className="py-2 text-lg font-bold text-brand-gold hover:text-gold-500"
          >
            {t("gallery")}
          </Link>
          <Link
            href={`/${locale}`}
            className="py-2 text-lg font-bold text-brand-gold hover:text-gold-500"
          >
            {t("partnerships")}
          </Link>
          <Link
            href={`/${locale}`}
            className="py-2 text-lg font-bold text-brand-gold hover:text-gold-500"
          >
            {t("events")}
          </Link>
        </nav>
      )}
    </header>
  );
}
