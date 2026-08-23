"use client";

import { SERVICE } from "@/lib/constants";
import Icon from "./Icons";
import Reveal from "./Reveal";

export default function Cities() {
  const goToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cities" className="bg-white py-16 sm:py-24">
      <div className="container-x">
        <div className="text-center">
          <h2 className="section-title text-cat-black">Города</h2>
          <div className="mx-auto mt-5 h-1 w-24 bg-cat-yellow" />
        </div>

        <Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {SERVICE.cities.map((c) => (
              <div
                key={c}
                className="flex items-center gap-2.5 rounded-lg border border-cat-gray/20 bg-cat-gray/5 px-4 py-3 transition-colors hover:border-cat-yellow/60"
              >
                <Icon name="geolocation" className="h-5 w-5 text-cat-yellow" />
                <span className="font-body text-sm font-medium text-cat-black">
                  {c}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 text-center">
          <a
            href="#form"
            onClick={goToForm}
            className="btn-primary inline-flex px-8 py-4"
          >
            Выбрать город
            <Icon name="arrow-right" className="h-5 w-5" />
          </a>
          <p className="mx-auto mt-6 max-w-2xl font-body text-sm text-cat-gray/70">
            Работаем по России. Не нашли свой город? Оставьте заявку — подскажем
            вариант.
          </p>
        </div>
      </div>
    </section>
  );
}
