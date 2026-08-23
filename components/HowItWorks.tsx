import { STEPS } from "@/lib/constants";
import Icon, { type IconName } from "./Icons";
import Reveal from "./Reveal";

export default function HowItWorks() {
  return (
    <section id="how" className="bg-white py-16 sm:py-24">
      <div className="container-x">
        <div className="text-center">
          <h2 className="section-title text-cat-black">Как это работает</h2>
          <div className="mx-auto mt-5 h-1 w-24 bg-cat-yellow" />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3 lg:gap-8">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 100}>
              <div className="relative h-full rounded-xl border border-cat-gray/15 bg-cat-gray/5 p-7 text-center">
                <span className="absolute right-5 top-4 font-heading text-5xl font-black text-cat-yellow/15">
                  {s.num}
                </span>
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-cat-yellow/10 text-cat-yellow">
                  <Icon name={s.icon as IconName} className="h-7 w-7" />
                </div>
                <h3 className="font-heading text-lg font-extrabold text-cat-black">
                  {s.title}
                </h3>
                <p className="mt-2 font-body text-sm text-cat-gray/80">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
