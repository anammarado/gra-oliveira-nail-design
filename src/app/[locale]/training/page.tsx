"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Handlee } from "next/font/google";
import { Coffee, FileText, Award, MessageCircle } from "lucide-react";

const handlee = Handlee({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function TrainingPage() {
  const t = useTranslations();

  const title = t("trainingPage.title");
  const description = t("trainingPage.description");

  return (
    <div className="min-h-screen p-8 pb-12 sm:p-20">
      <main className="flex flex-col items-center gap-8 mx-auto max-w-screen-2xl hero bp781:flex-row bp781:items-start bp781:gap-16 bp781:justify-between">
        <div className="flex flex-col items-center w-full gap-4 text-center hero-text bp781:w-5/12 bp781:items-start bp781:text-left self-start bp781:self-start">
          <h1
            className={`${handlee.className} mb-4 text-3xl font-bold text-brand-gold`}
          >
            {title}
          </h1>
          <div
            className={`${handlee.className} w-full text-base leading-relaxed sm:text-lg md:text-xl text-muted bp781:max-w-lg`}
          >
            {description.split("\n\n").map((p: string, i: number) => (
              <p key={i} className="mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center w-full hero-image bp781:w-6/12 bp781:pl-6 bp781:justify-end self-start bp781:self-start">
          <div className="flex flex-col items-center justify-center w-full h-auto max-w-md gap-4 rounded-lg shadow-lg bp781:gap-6 bp781:max-w-none">
            <Image
              src="/formadora 1.jpg"
              alt={t("trainingPage.imageAlt")}
              width={360}
              height={240}
              className="object-cover rounded w-[260px] sm:w-[300px] bp781:w-[420px]"
              priority
            />

            <Image
              src="/formadora 2.jpg"
              alt={t("trainingPage.imageAlt") + " 2"}
              width={360}
              height={240}
              className="object-cover rounded w-[260px] sm:w-[300px] bp781:w-[420px]"
              priority
            />
          </div>
        </div>
      </main>

      <section className="px-4 mx-auto mt-12 max-w-screen-2xl sm:px-8">
        <h2
          className={`${handlee.className} mb-4 text-2xl font-bold text-brand-gold`}
        >
          {t("trainingPage.whatYouGet")}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <Coffee className="w-6 h-6 mt-1 text-brand-gold" />
            <div className={`${handlee.className} text-lg`}>
              {t("trainingPage.bullet1")}
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FileText className="w-6 h-6 mt-1 text-brand-gold" />
            <div className={`${handlee.className} text-lg`}>
              {t("trainingPage.bullet2")}
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Award className="w-6 h-6 mt-1 text-brand-gold" />
            <div className={`${handlee.className} text-lg`}>
              {t("trainingPage.bullet3")}
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MessageCircle className="w-6 h-6 mt-1 text-brand-gold" />
            <div className={`${handlee.className} text-lg`}>
              {t("trainingPage.bullet4")}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3">
          <Image
            src="/iniciante.jpg"
            alt="Formação iniciante"
            width={480}
            height={360}
            className="object-cover rounded"
          />
          <Image
            src="/nail design.jpg"
            alt="Nail design"
            width={480}
            height={360}
            className="object-cover rounded"
          />
          <Image
            src="/aperfeiçoamento.jpg"
            alt="Formação de aperfeiçoamento"
            width={480}
            height={360}
            className="object-cover rounded"
          />
        </div>
      </section>
    </div>
  );
}
