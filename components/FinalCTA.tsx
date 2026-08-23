"use client";

import { SERVICE } from "@/lib/constants";
import Icon from "./Icons";

export default function FinalCTA() {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-cat-black py-20 sm:py-28">
      <div
        className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cat-yellow/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-cat-yellow/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative z-10 text-center">
        <h2 className="font-heading text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
          Нужно решить задачу
          <br />
          со <span className="text-cat-yellow">спецтехникой</span>?
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-body text-lg text-white/80">
          Опишите, что требуется, и получите подходящий вариант.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#form"
            onClick={scrollToForm}
            className="btn-primary animate-pulse-slow w-full px-8 py-5 text-base sm:w-auto sm:text-lg"
          >
            Получить цену
            <Icon name="arrow-right" className="h-5 w-5" />
          </a>
          <a
            href={SERVICE.phoneHref}
            className="btn-outline w-full px-8 py-5 text-base sm:w-auto sm:text-lg"
          >
            <Icon name="phone" className="h-5 w-5" />
            Позвонить
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 font-body text-sm text-white/60">
          <a href={SERVICE.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-cat-yellow">
            <Icon name="whatsapp" className="h-4 w-4" />
            WhatsApp
          </a>
          <span className="text-white/20">·</span>
          <a href={SERVICE.telegramHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-cat-yellow">
            <Icon name="telegram" className="h-4 w-4" />
            Telegram
          </a>
          <span className="text-white/20">·</span>
          <a href={`mailto:${SERVICE.email}`} className="inline-flex items-center gap-1.5 hover:text-cat-yellow">
            {SERVICE.email}
          </a>
        </div>
      </div>
    </section>
  );
}
