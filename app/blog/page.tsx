import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";
import Icon from "@/components/Icons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

export const metadata = {
  title: "Блог о спецтехнике — статьи, цены и нюансы аренды",
  description:
    "Разбираем задачи, цены и нюансы аренды спецтехники: манипулятор, экскаватор-погрузчик, эвакуатор, вывоз мусора и демонтаж.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero страницы */}
        <section className="bg-cat-black py-16 pt-28 sm:py-20 sm:pt-32">
          <div className="container-x">
            <nav className="mb-6 flex items-center gap-2 font-body text-sm text-white/50">
              <Link href="/" className="hover:text-cat-yellow">
                Главная
              </Link>
              <span>/</span>
              <span className="text-cat-yellow">Блог</span>
            </nav>
            <h1 className="font-heading text-4xl font-black uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Блог о <span className="text-cat-yellow">спецтехнике</span>
            </h1>
            <p className="mt-5 max-w-2xl font-body text-lg text-white/80 sm:text-xl">
              Разбираем задачи, цены и нюансы аренды спецтехники.
            </p>
            <div className="mt-7 h-1 w-24 bg-cat-yellow" />
          </div>
        </section>

        {/* Список статей */}
        <section className="bg-cat-gray/10 py-16 sm:py-24">
          <div className="container-x">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {BLOG_POSTS.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-cat-gray/20 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-cat-yellow hover:shadow-lg"
                >
                  {/* Заглушка-превью */}
                  <div className="relative flex h-44 items-center justify-center bg-cat-gray/10">
                    <Icon name="document" className="h-14 w-14 text-cat-gray/30" />
                    <span className="absolute left-3 top-3 rounded bg-cat-yellow px-2 py-0.5 font-heading text-xs font-bold uppercase text-cat-black">
                      {p.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-heading text-lg font-bold text-cat-black transition-colors group-hover:text-cat-yellow">
                      {p.title}
                    </h2>
                    <p className="mt-2 flex-1 font-body text-sm text-cat-gray/80">
                      {p.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 font-heading text-xs font-bold uppercase text-cat-gray/60 group-hover:text-cat-yellow">
                      Читать
                      <Icon name="arrow-right" className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA внизу */}
            <div className="mt-14 text-center">
              <p className="font-body text-base text-cat-gray/70">
                Нужно решить задачу со спецтехникой?
              </p>
              <Link href="/#form" className="btn-primary mt-4 inline-flex px-8 py-4">
                Получить цену
                <Icon name="arrow-right" className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
