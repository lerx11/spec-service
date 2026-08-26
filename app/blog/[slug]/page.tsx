import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticle } from "@/lib/articles";
import { BLOG_POSTS } from "@/lib/constants";
import Icon from "@/components/Icons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

export function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) return { title: "Статья не найдена" };
  return {
    title: `${article.title} — блог о спецтехнике`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  // Метка и краткое описание из списка публикаций
  const meta = BLOG_POSTS.find((p) => p.slug === article.slug);
  // Похожие статьи (остальные)
  const related = BLOG_POSTS.filter((p) => p.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main>
        {/* Hero статьи */}
        <section className="bg-cat-black py-12 pt-28 sm:py-16 sm:pt-32">
          <div className="container-x">
            <nav className="mb-6 flex items-center gap-2 font-body text-sm text-white/50">
              <Link href="/" className="hover:text-cat-yellow">
                Главная
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-cat-yellow">
                Блог
              </Link>
              <span>/</span>
              <span className="text-cat-yellow">{article.title}</span>
            </nav>
            <span className="inline-block rounded bg-cat-yellow px-2.5 py-0.5 font-heading text-xs font-bold uppercase text-cat-black">
              {meta?.tag ?? "Статья"}
            </span>
            <h1 className="mt-4 max-w-3xl font-heading text-3xl font-black uppercase leading-[1.1] text-white sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 max-w-2xl font-body text-lg text-white/80">
              {article.intro}
            </p>
          </div>
        </section>

        {/* Контент статьи */}
        <article className="bg-white py-12 sm:py-16">
          <div className="container-x">
            <div className="mx-auto max-w-3xl">
              {/* Основная часть */}
              <div className="space-y-10">
                {article.body.map((section, i) => (
                  <section key={i}>
                    <h2 className="font-heading text-2xl font-extrabold text-cat-black sm:text-3xl">
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((p, j) => (
                        <p
                          key={j}
                          className="font-body text-base leading-relaxed text-cat-gray sm:text-lg [&_a]:text-cat-black [&_a]:underline [&_a]:decoration-cat-yellow [&_a]:decoration-2 [&_a]:underline-offset-2 [&_a:hover]:decoration-cat-black"
                          dangerouslySetInnerHTML={{ __html: p }}
                        />
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* Ориентировочная цена */}
              <div className="mt-12 rounded-xl border-l-4 border-cat-yellow bg-cat-yellow/10 p-6">
                <p className="font-heading text-sm font-bold uppercase tracking-wide text-cat-gray">
                  Ориентировочная цена
                </p>
                <p className="mt-1 font-heading text-3xl font-black text-cat-black sm:text-4xl">
                  {article.price}
                </p>
                <p className="mt-2 font-body text-sm text-cat-gray/70">
                  Точная стоимость зависит от города, адреса и объёма работ. Оставьте заявку — уточним.
                </p>
              </div>

              {/* От чего зависит стоимость */}
              <div className="mt-12">
                <h2 className="font-heading text-2xl font-extrabold text-cat-black sm:text-3xl">
                  От чего зависит стоимость
                </h2>
                <ul className="mt-4 space-y-3">
                  {article.factors.map((f) => (
                    <li key={f} className="flex items-start gap-3 font-body text-base text-cat-gray">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cat-yellow text-cat-black">
                        <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Что сообщить исполнителю */}
              <div className="mt-12 rounded-xl border border-cat-gray/20 bg-cat-gray/5 p-6">
                <h2 className="font-heading text-xl font-extrabold text-cat-black sm:text-2xl">
                  Что сообщить исполнителю
                </h2>
                <ul className="mt-4 space-y-2">
                  {article.tellOperator.map((t) => (
                    <li key={t} className="flex items-start gap-3 font-body text-base text-cat-gray">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cat-yellow" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h2 className="font-heading text-2xl font-extrabold text-cat-black sm:text-3xl">
                  Частые вопросы
                </h2>
                <div className="mt-5 space-y-4">
                  {article.faq.map((item) => (
                    <details
                      key={item.q}
                      className="group rounded-xl border border-cat-gray/20 bg-white p-5 open:bg-cat-gray/5"
                    >
                      <summary className="flex cursor-pointer items-center justify-between font-heading text-base font-bold text-cat-black sm:text-lg">
                        {item.q}
                        <Icon
                          name="chevron-down"
                          className="h-5 w-5 text-cat-yellow transition-transform group-open:rotate-180"
                        />
                      </summary>
                      <p className="mt-3 font-body text-base leading-relaxed text-cat-gray">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-14 rounded-2xl bg-cat-black p-8 text-center sm:p-12">
                <h2 className="font-heading text-2xl font-black uppercase text-white sm:text-3xl">
                  Нужно решить задачу?
                </h2>
                <p className="mx-auto mt-3 max-w-md font-body text-base text-white/80">
                  Оставьте заявку — поможем найти подходящий вариант и узнать стоимость.
                </p>
                <Link
                  href="/#form"
                  className="btn-primary animate-pulse-slow mt-6 inline-flex px-8 py-4 text-base sm:text-lg"
                >
                  Получить цену
                  <Icon name="arrow-right" className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Похожие статьи */}
        <section className="bg-cat-gray/10 py-12 sm:py-16">
          <div className="container-x">
            <h2 className="font-heading text-2xl font-extrabold uppercase text-cat-black sm:text-3xl">
              Другие статьи
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block h-full overflow-hidden rounded-xl border border-cat-gray/20 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-cat-yellow hover:shadow-lg"
                >
                  <div className="relative flex h-32 items-center justify-center bg-cat-gray/10">
                    <Icon name="document" className="h-10 w-10 text-cat-gray/30" />
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
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/blog" className="btn-outline inline-flex px-8 py-4">
                Все статьи
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
