import type { Metadata } from "next";
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
        {/* Яндекс.Метрика — заглушка, будет подключена позже */}
        {/* <script type="text/javascript">...</script> */}
      </body>
    </html>
  );
}
