"use client";

import { useEffect, useState } from "react";
import { SERVICE } from "@/lib/constants";
import Icon from "./Icons";

export default function MobileCallBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`no-print fixed inset-x-0 bottom-0 z-50 flex gap-2 p-3 transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="#form"
        onClick={goForm}
        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-cat-yellow px-4 py-3.5 font-heading text-base font-extrabold uppercase text-cat-black shadow-yellow-glow active:scale-95"
      >
        Получить цену
      </a>
      <a
        href={SERVICE.phoneHref}
        aria-label="Позвонить"
        className="flex items-center justify-center gap-2 rounded-lg border-2 border-cat-yellow bg-cat-black px-4 py-3.5 text-cat-yellow active:scale-95"
      >
        <Icon name="phone" className="h-5 w-5" />
      </a>
    </div>
  );
}
