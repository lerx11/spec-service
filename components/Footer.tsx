import { SERVICE } from "@/lib/constants";
import Icon from "./Icons";

const NAV = [
  { label: "Услуги", href: "#services" },
  { label: "Города", href: "#cities" },
  { label: "Как это работает", href: "#how" },
  { label: "Блог", href: "#blog" },
];

export default function Footer() {
  return (
    <footer className="bg-cat-black pt-14 pb-24 sm:pb-14">
      <div className="container-x">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Бренд */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 font-heading text-lg font-extrabold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cat-black ring-2 ring-cat-yellow">
                <span className="text-xl font-black text-cat-yellow">С</span>
              </span>
              <span>
                {SERVICE.brand} <span className="text-cat-gray">|</span>{" "}
                <span className="text-cat-yellow">Россия</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs font-body text-sm text-white/60">
              Помогаем найти спецтехнику и специалистов по России. Оставьте
              заявку — поможем с вариантом и стоимостью.
            </p>
          </div>

          {/* Меню */}
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-wide text-cat-yellow">
              Разделы
            </h3>
            <ul className="mt-4 space-y-2 font-body text-sm text-white/70">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-cat-yellow">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-wide text-cat-yellow">
              Услуги
            </h3>
            <ul className="mt-4 space-y-2 font-body text-sm text-white/70">
              <li><a href="#services" className="hover:text-cat-yellow">Манипулятор</a></li>
              <li><a href="#services" className="hover:text-cat-yellow">Экскаватор</a></li>
              <li><a href="#services" className="hover:text-cat-yellow">Эвакуатор</a></li>
              <li><a href="#services" className="hover:text-cat-yellow">Вывоз мусора</a></li>
              <li><a href="#services" className="hover:text-cat-yellow">Демонтаж</a></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-wide text-cat-yellow">
              Контакты
            </h3>
            <ul className="mt-4 space-y-3 font-body text-sm text-white/70">
              <li>
                <a
                  href={SERVICE.phoneHref}
                  className="font-heading text-base font-bold text-cat-yellow hover:underline"
                >
                  {SERVICE.phoneDisplay}
                </a>
              </li>
              <li className="flex flex-wrap gap-3">
                <a href={SERVICE.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded border border-white/15 px-3 py-1.5 hover:border-cat-yellow hover:text-cat-yellow">
                  <Icon name="whatsapp" className="h-4 w-4" />
                  WhatsApp
                </a>
                <a href={SERVICE.telegramHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded border border-white/15 px-3 py-1.5 hover:border-cat-yellow hover:text-cat-yellow">
                  <Icon name="telegram" className="h-4 w-4" />
                  Telegram
                </a>
              </li>
              <li>
                <a href={`mailto:${SERVICE.email}`} className="hover:text-cat-yellow">
                  {SERVICE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 font-body text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SERVICE.brand} | Россия</p>
          <p className="text-white/40">
            Работаем с реальными специалистами и владельцами техники.
          </p>
        </div>
      </div>
    </footer>
  );
}
