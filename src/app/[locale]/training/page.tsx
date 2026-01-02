"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Handlee } from "next/font/google";
import { Coffee, FileText, Award, MessageCircle, Sparkles } from "lucide-react";

const handlee = Handlee({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function TrainingPage() {
  const t = useTranslations();
  const title = t("trainingPage.title");
  const renderParagraph = (chunks: any) => (
    <p className="mb-4 last:mb-0">{chunks}</p>
  );

  const renderStar = () => (
    <Sparkles className="inline w-5 h-5 mr-2 text-brand-gold" />
  );

  return (
    <div className="min-h-screen p-8 pb-12 sm:p-20">
      <main className="flex flex-col items-center gap-8 mx-auto max-w-screen-2xl hero bp781:flex-row bp781:items-start bp781:gap-16 bp781:justify-between">
        <div className="flex flex-col items-center self-start w-full gap-4 text-center hero-text bp781:w-5/12 bp781:items-start bp781:text-left bp781:self-start">
          <h1
            className={`${handlee.className} mb-4 text-3xl font-bold text-brand-gold`}
          >
            {title}
          </h1>
          <div
            className={`${handlee.className} w-full text-base leading-relaxed sm:text-lg md:text-xl text-muted bp781:max-w-lg`}
          >
            {(t as any).rich("trainingPage.description", {
              p: renderParagraph,
              paragraph: renderParagraph,
              sparkles: renderStar,
            })}
          </div>
        </div>

        <div className="flex items-center self-start justify-center w-full hero-image hero-frame-offset bp781:w-6/12 bp781:pl-6 bp781:justify-end bp781:self-start">
          <div className="w-full h-auto max-w-md gap-4 rounded-lg shadow-lg hero-image-grid bp781:gap-6 bp781:max-w-none hero-image-offset">
            <Image
              src="/formadora 1.jpg"
              alt={t("trainingPage.imageAlt")}
              width={360}
              height={240}
              className="object-cover rounded w-[260px] sm:w-[300px] bp781:w-[420px]"
              style={{ height: "auto", width: "auto" }}
              priority
            />
            <Image
              src="/formadora 2.jpg"
              alt={t("trainingPage.imageAlt") + " 2"}
              width={360}
              height={240}
              className="object-cover rounded w-[260px] sm:w-[300px] bp781:w-[420px]"
              style={{ height: "auto", width: "auto" }}
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
