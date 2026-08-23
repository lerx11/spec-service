"use client";

import { useEffect, useState } from "react";
import { SERVICE } from "@/lib/constants";
import Icon from "./Icons";

const NAV = [
  { label: "Услуги", href: "#services" },
  { label: "Города", href: "#cities" },
  { label: "Как это работает", href: "#how" },
  { label: "Блог", href: "#blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-cat-black/95 shadow-lg backdrop-blur" : "bg-cat-black"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between sm:h-18">
        {/* Логотип */}
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cat-black ring-2 ring-cat-yellow">
            <span className="font-heading text-base font-black text-cat-yellow">С</span>
          </span>
          <span className="font-heading text-base font-extrabold text-white sm:text-lg">
            {SERVICE.brand} <span className="text-cat-gray/60">|</span>{" "}
            <span className="text-cat-yellow">Россия</span>
          </span>
        </a>

        {/* Меню — десктоп */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={go(item.href)}
              className="font-body text-sm font-medium text-white/80 transition-colors hover:text-cat-yellow"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Телефон + CTA */}
        <div className="flex items-center gap-3">
          <a
            href={SERVICE.phoneHref}
            className="hidden items-center gap-1.5 font-heading text-sm font-bold text-cat-yellow hover:underline sm:flex"
          >
            <Icon name="phone" className="h-4 w-4" />
            {SERVICE.phoneDisplay}
          </a>
          <a
            href="#form"
            onClick={go("#form")}
            className="btn-primary px-5 py-2.5 text-sm"
          >
            Получить цену
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center text-white lg:hidden"
            aria-label="Меню"
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {open && (
        <nav className="border-t border-white/10 bg-cat-black px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={go(item.href)}
                className="rounded-md px-3 py-2.5 font-body text-base text-white/85 hover:bg-white/5 hover:text-cat-yellow"
              >
                {item.label}
              </a>
            ))}
            <a
              href={SERVICE.phoneHref}
              className="mt-1 flex items-center gap-2 rounded-md px-3 py-2.5 font-heading font-bold text-cat-yellow"
            >
              <Icon name="phone" className="h-4 w-4" />
              {SERVICE.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
