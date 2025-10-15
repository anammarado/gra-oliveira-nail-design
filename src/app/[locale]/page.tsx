"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Handlee } from "next/font/google";

const handlee = Handlee({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function LocaleHome() {
  const t = useTranslations();
  return (
    <div className="min-h-screen p-8 pb-20 font-sans sm:p-20">
      <main className="flex flex-col items-center gap-8 mx-auto max-w-screen-2xl hero bp781:flex-row bp781:items-start bp781:gap-16 bp781:justify-between">
        <div
          className={`flex flex-col items-center w-full gap-4 text-center hero-text bp781:w-5/12 bp781:items-start bp781:text-left bp781:pl-0 bp781:-translate-x-6 self-start bp781:self-start`}
        >
          <h1
            className={`${handlee.className} text-xl sm:text-2xl md:text-3xl text-brand-gold font-bold mb-6`}
          >
            {t("introduction.title")}
          </h1>
          <div
            className={`${handlee.className} font-light w-full text-base sm:text-lg md:text-xl bp781:text-4xl leading-relaxed text-muted bp781:max-w-lg bp781:ml-0`}
          >
            {(t("introduction.description"))
              .split("\n\n")
              .map((para, i) => (
                <p key={i} className="mb-4 last:mb-0">
                  {para}
                </p>
              ))}
          </div>
        </div>
        <div className="flex items-center self-start justify-center w-full hero-image bp781:w-6/12 bp781:pl-6 bp781:justify-end bp781:translate-x-6 bp781:self-start">
          <div className="flex items-center justify-center w-full h-40 max-w-md rounded-lg shadow-lg bp781:h-64 bp781:max-w-none">
            <Image
              src="/intro.jpg"
              alt={
                t("introduction.hero.imageAlt") ||
                t("introduction.title") ||
                "Photo"
              }
              width={440}
              height={300}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
