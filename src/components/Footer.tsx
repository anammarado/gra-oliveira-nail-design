"use client";
import Link from "next/link";
import Image from "next/image";
import { Cormorant_Upright } from "next/font/google";
import { Facebook, Instagram, MessageCircle, MapPin } from "lucide-react";
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
      className={`w-full bg-black text-brand-gold shadow-md h-26 mt-12 ${cormorantUpright.className}`}
    >
      <div className="flex items-center w-full h-full px-4 gap-6">
        <div className="flex-1">
          <Link
            href="/terms"
            className="font-bold hover:text-gold-500 transition text-xl"
          >
            {t("termos")}
          </Link>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="flex items-center space-x-8 text-2xl">
            <Link
              href="https://www.instagram.com/graoliveiraa_/#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("social.instagram")}
              className="hover:text-gold-500 transition flex items-center"
            >
              <Instagram size={36} />
            </Link>
            <Link
              href="https://www.facebook.com/share/19hqNKE8Ki/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("social.facebook")}
              className="hover:text-gold-500 transition flex items-center"
            >
              <Facebook size={36} />
            </Link>
            <Link
              href="http://maps.app.goo.gl/ta55s7oxp6i3v5bW6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("social.localização")}
              className="hover:text-gold-500 transition flex items-center"
            >
              <MapPin size={36} />
            </Link>
            <Link
              href="https://wa.me/351919506691"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("social.whatsapp")}
              className="hover:text-gold-500 transition flex items-center"
            >
              <MessageCircle size={36} />
            </Link>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center md:items-end">
          <p className="font-bold text-lg text-center md:text-right">
            © {new Date().getFullYear()} Gra Oliveira Nail Design.{" "}
            {t("direitosReservados")}
          </p>

          <div className="flex items-center justify-center md:justify-end space-x-4 md:space-x-6 mt-4">
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
                  alt={t("bandeiras.pt")}
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
                  alt={t("bandeiras.en")}
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
                  alt={t("bandeiras.fr")}
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
                  alt={t("bandeiras.es")}
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
