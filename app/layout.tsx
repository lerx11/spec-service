import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Спецтехника и специалисты по России — Манипулятор, Эвакуатор, Экскаватор",
  description:
    "Нужно перевезти, выкопать, демонтировать или вывезти? Оставьте заявку — поможем найти подходящий вариант и узнать стоимость. Москва, Санкт-Петербург и другие города.",
  keywords: [
    "спецтехника",
    "манипулятор",
    "эвакуатор",
    "экскаватор",
    "вывоз мусора",
    "демонтаж",
    "земляные работы",
    "Россия",
  ],
  openGraph: {
    title: "Спецтехника и специалисты по России",
    description:
      "Оставьте заявку — поможем найти подходящий вариант и узнать стоимость.",
    type: "website",
    locale: "ru_RU",
  },
  formatDetection: {
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${robotoCondensed.variable}`}>
      <body className="font-body bg-white text-cat-black antialiased">
        {children}

        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=111879926', 'ym');

            ym(111879926, 'init', {
              ssr: true,
              webvisor: true,
              clickmap: true,
              ecommerce: "dataLayer",
              referrer: document.referrer,
              url: location.href,
              accurateTrackBounce: true,
              trackLinks: true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/111879926"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
      </body>
    </html>
  );
}
