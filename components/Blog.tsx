import { BLOG_POSTS } from "@/lib/constants";
import Icon from "./Icons";
import Reveal from "./Reveal";

export default function Blog() {
  return (
    <section id="blog" className="bg-cat-gray/10 py-16 sm:py-24">
      <div className="container-x">
        <div className="text-center">
          <h2 className="section-title text-cat-black">Полезные статьи</h2>
          <div className="mx-auto mt-5 h-1 w-24 bg-cat-yellow" />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 70}>
              <a
                href="#blog"
                className="group block h-full overflow-hidden rounded-xl border border-cat-gray/20 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-cat-yellow hover:shadow-lg"
              >
                {/* Заглушка-превью */}
                <div className="relative flex h-40 items-center justify-center bg-cat-gray/10">
                  <Icon name="document" className="h-12 w-12 text-cat-gray/30" />
                  <span className="absolute left-3 top-3 rounded bg-cat-yellow px-2 py-0.5 font-heading text-xs font-bold uppercase text-cat-black">
                    {p.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-base font-bold text-cat-black transition-colors group-hover:text-cat-yellow">
                    {p.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 font-heading text-xs font-bold uppercase text-cat-gray/60 group-hover:text-cat-yellow">
                    Читать
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#blog" className="btn-outline inline-flex px-8 py-4">
            Все статьи
            <Icon name="arrow-right" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
