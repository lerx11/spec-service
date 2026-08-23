import { PRICES } from "@/lib/constants";
import Icon from "./Icons";
import Reveal from "./Reveal";

export default function Prices() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-x">
        <div className="text-center">
          <h2 className="section-title text-cat-black">Ориентировочные цены</h2>
          <div className="mx-auto mt-5 h-1 w-24 bg-cat-yellow" />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PRICES.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div className="group h-full rounded-xl border border-cat-gray/15 bg-cat-gray/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cat-yellow/60 hover:shadow-lg">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-cat-yellow/10 text-cat-gray transition-colors group-hover:text-cat-yellow">
                  <Icon name="truck" className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-base font-bold text-cat-black">
                  {p.title}
                </h3>
                <p className="mt-1 font-heading text-xl font-extrabold text-cat-yellow">
                  {p.price}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center font-body text-sm text-cat-gray/70 sm:text-base">
          Точная стоимость зависит от города, адреса, объёма и типа техники.
          Оставьте заявку — уточним актуальную цену.
        </p>
      </div>
    </section>
  );
}
