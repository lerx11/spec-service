"use client";

import { TASKS } from "@/lib/constants";
import Icon, { type IconName } from "./Icons";
import Reveal from "./Reveal";

export default function Tasks() {
  const goToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-cat-gray/10 py-16 sm:py-24">
      <div className="container-x">
        <div className="text-center">
          <h2 className="section-title text-cat-black">Что нужно сделать?</h2>
          <div className="mx-auto mt-5 h-1 w-24 bg-cat-yellow" />
          <p className="section-subtitle mx-auto max-w-2xl">
            Выберите задачу — перейдём к заявке
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TASKS.map((t, i) => (
            <Reveal key={t.id} delay={(i % 3) * 60}>
              <a
                href="#form"
                onClick={goToForm}
                className="group flex h-full items-center gap-4 rounded-xl border border-cat-gray/20 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cat-yellow hover:shadow-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cat-yellow/10 text-cat-gray transition-colors group-hover:bg-cat-yellow group-hover:text-cat-black">
                  <Icon name={t.icon as IconName} className="h-6 w-6" />
                </span>
                <span className="font-heading text-base font-bold text-cat-black">
                  {t.title}
                </span>
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
