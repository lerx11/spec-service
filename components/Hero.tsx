"use client";

import { useEffect, useRef, useState } from "react";
import { SERVICE } from "@/lib/constants";
import Icon from "./Icons";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  // Лёгкий параллакс: видео движется медленнее скролла.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = sectionRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Скролл внутри секции: 0, когда секция в верхней части.
        const scrolled = -rect.top;
        // Видео «отстаёт» на 30% от скролла.
        setOffset(scrolled * 0.3);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-cat-black pt-16"
    >
      {/* Базовый градиент (виден, пока видео не загрузилось) */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-cat-gray via-cat-black to-cat-black"
        aria-hidden="true"
      />

      {/* Видеофон с параллаксом */}
      <div
        className="absolute -top-[10%] left-0 z-0 h-[120%] w-full overflow-hidden"
        aria-hidden="true"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      >
        <video
          className="h-full w-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      {/* Затемнение поверх видео */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/80 via-black/55 to-black/85"
        aria-hidden="true"
      />

      {/* Лёгкая сетка для текстуры */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#FFC400 1px, transparent 1px), linear-gradient(90deg, #FFC400 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="container-x relative z-10 py-16">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cat-yellow/40 bg-cat-yellow/10 px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.2em] text-cat-yellow">
            <Icon name="geolocation" className="h-3.5 w-3.5" />
            Поиск по России
          </p>

          <h1 className="font-heading text-4xl font-black uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Спецтехника
            <br />
            и специалисты
            <br />
            <span className="relative inline-block text-cat-yellow">
              по России
              <span className="absolute -bottom-1 left-0 h-1.5 w-full bg-cat-yellow/60 sm:h-2" />
            </span>
          </h1>

          <p className="mt-6 max-w-2xl font-body text-lg text-white/80 sm:text-xl">
            Нужно что-то перевезти, выкопать, демонтировать или вывезти?
            Оставьте короткую заявку — поможем найти подходящий вариант и узнать
            стоимость.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#form"
              onClick={scrollToForm}
              className="btn-primary animate-pulse-slow px-8 py-4 text-base sm:px-10 sm:py-5 sm:text-lg"
            >
              Получить цену
              <Icon name="arrow-right" className="h-5 w-5" />
            </a>
            <a href={SERVICE.phoneHref} className="btn-outline px-8 py-4 text-base sm:px-10 sm:py-5 sm:text-lg">
              <Icon name="phone" className="h-5 w-5" />
              Позвонить
            </a>
          </div>

          <p className="mt-7 font-body text-sm text-white/60 sm:text-base">
            {SERVICE.heroCities}
          </p>
        </div>
      </div>

      {/* Индикатор скролла */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-cat-yellow" />
        </div>
      </div>
    </section>
  );
}
