import { WHY } from "@/lib/constants";
import Icon, { type IconName } from "./Icons";
import Reveal from "./Reveal";

export default function WhyUs() {
  return (
    <section className="bg-cat-black py-16 sm:py-24">
      <div className="container-x">
        <div className="text-center">
          <h2 className="section-title text-white">Почему обращаются к нам</h2>
          <div className="mx-auto mt-5 h-1 w-24 bg-cat-yellow" />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={(i % 5) * 70}>
              <div className="group h-full rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-cat-yellow/60 hover:bg-white/10">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-cat-yellow/15 text-cat-yellow">
                  <Icon name={w.icon as IconName} className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-base font-bold text-white">
                  {w.title}
                </h3>
                <p className="mt-2 font-body text-sm text-white/70">
                  {w.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
