"use client";

import { POPULAR_SERVICES } from "@/lib/constants";
import Icon, { type IconName } from "./Icons";
import Reveal from "./Reveal";

export default function PopularServices() {
  const go = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-cat-gray/10 py-16 sm:py-24">
      <div className="container-x">
        <div className="text-center">
          <h2 className="section-title text-cat-black">Популярные услуги</h2>
          <div className="mx-auto mt-5 h-1 w-24 bg-cat-yellow" />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {POPULAR_SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 70}>
              <a
                href="#form"
                onClick={go}
                className="group flex items-center gap-5 rounded-xl border border-cat-gray/20 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cat-yellow hover:shadow-lg"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-cat-yellow/10 text-cat-gray transition-colors group-hover:bg-cat-yellow group-hover:text-cat-black">
                  <Icon name={s.icon as IconName} className="h-8 w-8" />
                </span>
                <h3 className="font-heading text-lg font-extrabold text-cat-black">
                  {s.title}
                </h3>
                <Icon
                  name="arrow-right"
                  className="ml-auto h-5 w-5 text-cat-gray/40 transition-colors group-hover:text-cat-yellow"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
