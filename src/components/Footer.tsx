"use client";

import Link from "next/link";
import Image from "next/image";
import { Cormorant_Upright } from "next/font/google";
import { MessageCircle, MapPin } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { useLocale, useTranslations } from "next-intl";

const cormorantUpright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <footer
      className={`w-full bg-black text-brand-gold shadow-md min-h-32 bp781:h-26 mt-12 ${cormorantUpright.className}`}
    >
      <div className="flex flex-col items-center w-full h-full gap-6 px-4 md:flex-row bp781:flex-row md:items-center bp781:items-center md:justify-between bp781:justify-between footer-inner">
        <div className="w-full md:flex-1 bp781:flex-1">
          <Link
            href="/terms"
            className="text-xl font-bold text-center transition footer-terms hover:text-gold-500 bp781:text-left"
          >
            {t("terms")}
          </Link>
        </div>
        <div className="flex justify-center w-full mt-4 md:flex-1 bp781:flex-1 md:mt-0 bp781:mt-0">
          <div className="flex items-center space-x-6 text-2xl md:space-x-8 bp781:space-x-8">
            <Link
              href="https://www.instagram.com/graoliveiraa_/#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("social.instagram")}
              className="flex items-center transition hover:text-gold-500"
            >
              <SiInstagram className="w-7 h-7 md:w-9 md:h-9 bp781:w-9 bp781:h-9" />
            </Link>
            <Link
              href="https://www.facebook.com/share/19hqNKE8Ki/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("social.facebook")}
              className="flex items-center transition hover:text-gold-500"
            >
              <SiFacebook className="w-7 h-7 md:w-9 md:h-9 bp781:w-9 bp781:h-9" />
            </Link>
            <Link
              href="http://maps.app.goo.gl/ta55s7oxp6i3v5bW6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("social.location")}
              className="flex items-center transition hover:text-gold-500"
            >
              <MapPin className="w-7 h-7 md:w-9 md:h-9 bp781:w-9 bp781:h-9" />
            </Link>
            <Link
              href="https://wa.me/351919506691"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("social.whatsapp")}
              className="flex items-center transition hover:text-gold-500"
            >
              <MessageCircle className="w-7 h-7 md:w-9 md:h-9 bp781:w-9 bp781:h-9" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center w-full mt-4 md:flex-1 bp781:flex-1 md:items-end bp781:items-end md:mt-0 bp781:mt-0 footer-right">
          <p className="text-lg font-bold text-center md:text-right bp781:text-right">
            © {new Date().getFullYear()} Gra Oliveira Nail Design.{" "}
            {t("copyright")}
          </p>
          <div className="flex items-center justify-center mt-4 space-x-4 md:justify-end bp781:justify-end md:space-x-6 bp781:space-x-6">
            <Link href="/pt" aria-label="Português">
              <span
                className="rounded-sm p-0.5"
                style={
                  locale === "pt"
                    ? {
                        border: "2px solid var(--brand-gold)",
                        display: "inline-block",
                      }
                    : { display: "inline-block" }
                }
              >
                <Image
                  src="/flags/pt.svg"
                  alt={t("flags.pt")}
                  width={24}
                  height={16}
                  className="object-cover rounded-sm"
                />
              </span>
            </Link>
            <Link href="/en" aria-label="English">
              <span
                className="rounded-sm p-0.5"
                style={
                  locale === "en"
                    ? {
                        border: "2px solid var(--brand-gold)",
                        display: "inline-block",
                      }
                    : { display: "inline-block" }
                }
              >
                <Image
                  src="/flags/en.svg"
                  alt={t("flags.en")}
                  width={24}
                  height={16}
                  className="object-cover rounded-sm"
                />
              </span>
            </Link>
            <Link href="/fr" aria-label="Français">
              <span
                className="rounded-sm p-0.5"
                style={
                  locale === "fr"
                    ? {
                        border: "2px solid var(--brand-gold)",
                        display: "inline-block",
                      }
                    : { display: "inline-block" }
                }
              >
                <Image
                  src="/flags/fr.svg"
                  alt={t("flags.fr")}
                  width={24}
                  height={16}
                  className="object-cover rounded-sm"
                />
              </span>
            </Link>
            <Link href="/es" aria-label="Español">
              <span
                className="rounded-sm p-0.5"
                style={
                  locale === "es"
                    ? {
                        border: "2px solid var(--brand-gold)",
                        display: "inline-block",
                      }
                    : { display: "inline-block" }
                }
              >
                <Image
                  src="/flags/es.svg"
                  alt={t("flags.es")}
                  width={24}
                  height={16}
                  className="object-cover rounded-sm"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
