// Контакты сервиса
export const SERVICE = {
  brand: "Спецтехника",
  brandSuffix: "| Россия",
  phoneDisplay: "+7 (915) 013-57-22",
  phoneHref: "tel:+79150135722",
  whatsappHref: "https://wa.me/79150135722",
  telegramHref: "https://t.me/lex_88",
  email: "world_ph@mail.ru",
  cities: [
    "Москва",
    "Санкт-Петербург",
    "Краснодар",
    "Казань",
    "Екатеринбург",
    "Новосибирск",
    "Нижний Новгород",
    "Уфа",
    "Пермь",
    "Ростов-на-Дону",
  ],
  heroCities: "Москва · Санкт-Петербург · Краснодар · Казань · Екатеринбург · другие города",
};

export const PRICES = [
  { title: "Манипулятор", price: "от 4 000 ₽" },
  { title: "Эвакуатор", price: "от 3 500 ₽" },
  { title: "Экскаватор-погрузчик", price: "от 3 000 ₽/час" },
  { title: "Вывоз мусора", price: "от 3 500 ₽" },
  { title: "Земляные работы", price: "от 2 500 ₽/час" },
];

export const TASKS = [
  { id: "transport-cargo", title: "Перевезти груз", icon: "truck" },
  { id: "transport-cabin", title: "Перевезти бытовку", icon: "container" },
  { id: "excavation", title: "Выкопать / разработать грунт", icon: "excavator" },
  { id: "remove-trash", title: "Вывезти строительный мусор", icon: "trash" },
  { id: "remove-soil", title: "Вывезти грунт", icon: "soil" },
  { id: "demolition", title: "Демонтировать дом / сарай / конструкцию", icon: "house" },
  { id: "evacuate-car", title: "Эвакуировать автомобиль", icon: "car" },
  { id: "improve-land", title: "Благоустроить участок", icon: "road" },
  { id: "other", title: "Другая задача", icon: "dots" },
];

export const STEPS = [
  {
    num: "01",
    title: "Опишите задачу",
    text: "Пары предложений достаточно — что нужно сделать, где и когда.",
    icon: "document",
  },
  {
    num: "02",
    title: "Поможем найти вариант",
    text: "Уточним детали и предложим подходящую технику и специалиста.",
    icon: "search",
  },
  {
    num: "03",
    title: "Вы решаете",
    text: "Смотрите предложение и решаете, подходит ли оно вам.",
    icon: "check",
  },
];

export const WHY = [
  {
    title: "Проверенные специалисты",
    text: "Работаем с исполнителями, чьи данные и техника подтверждены.",
    icon: "shield",
  },
  {
    title: "Реальные данные",
    text: "Стоимость и условия — по вашей задаче, без скрытых условий.",
    icon: "document",
  },
  {
    title: "Подходящая техника",
    text: "Подбираем под объём и тип задачи: манипулятор, экскаватор, эвакуатор.",
    icon: "truck",
  },
  {
    title: "Не нужно искать самому",
    text: "Не тратьте время на звонки и сравнение — оставьте заявку.",
    icon: "clock",
  },
  {
    title: "Поиск по России",
    text: "Москва, Санкт-Петербург, Краснодар и другие города.",
    icon: "geolocation",
  },
];

export const POPULAR_SERVICES = [
  { title: "Манипулятор", icon: "truck" },
  { title: "Экскаватор", icon: "excavator" },
  { title: "Эвакуатор", icon: "car" },
  { title: "Земляные работы", icon: "excavator" },
  { title: "Вывоз мусора", icon: "trash" },
  { title: "Демонтаж", icon: "house" },
];

export const BLOG_POSTS = [
  {
    slug: "vyvoz-stroitelnogo-musora-cena",
    title: "Вывоз строительного мусора: цена",
    tag: "Вывоз мусора",
    excerpt: "Цены на вывоз строительного мусора в Москве: контейнер, машина, пухто.",
  },
  {
    slug: "zemlyanye-raboty-v-moskve",
    title: "Земляные работы в Москве",
    tag: "Земляные работы",
    excerpt: "Какие земляные работы выполняют и сколько это стоит. Простые примеры.",
  },
  {
    slug: "perevozka-bytovki-manipulyatorom",
    title: "Перевозка бытовки манипулятором",
    tag: "Манипулятор",
    excerpt: "Как перевозят бытовки, какой манипулятор нужен и от чего зависит цена.",
  },
  {
    slug: "arenda-yamobura-v-moskve",
    title: "Аренда ямобура в Москве",
    tag: "Земляные работы",
    excerpt: "Когда нужен ямобур, сколько стоит и что спросить перед заказом.",
  },
  {
    slug: "arenda-ekskavatora-v-moskve",
    title: "Аренда экскаватора в Москве: цена за час",
    tag: "Экскаватор",
    excerpt: "Сколько стоит аренда экскаватора в Москве в 2026 году, какой тип выбрать.",
  },
  {
    slug: "demontazh-doma-cena",
    title: "Демонтаж дома или дачи: цена и сроки",
    tag: "Демонтаж",
    excerpt: "Сколько стоит демонтаж дома в Москве и МО, от чего зависит цена и как проходит работа.",
  },
  {
    slug: "blagoustroystvo-uchastka-pod-klyuch",
    title: "Благоустройство участка под ключ",
    tag: "Благоустройство",
    excerpt: "Что входит в благоустройство участка, какая техника нужна и как считать стоимость.",
  },
  {
    slug: "arenda-manipulyatora-v-moskve",
    title: "Аренда манипулятора в Москве: цены 2026",
    tag: "Манипулятор",
    excerpt: "Сколько стоит манипулятор в Москве и МО в 2026 году, какой тоннаж выбрать и от чего зависит цена.",
  },
  {
    slug: "evakuator-v-moskve-cena",
    title: "Услуги эвакуатора в Москве: цена",
    tag: "Эвакуатор",
    excerpt: "Сколько стоит эвакуатор в Москве в 2026 году, как выбрать и что сказать при заказе.",
  },
  {
    slug: "vyvoz-musora-kontejnerom-v-moskve",
    title: "Вывоз мусора контейнером в Москве",
    tag: "Вывоз мусора",
    excerpt: "Контейнер 8, 20 и 27 м³ — цены 2026, что можно вывозить и как выбрать объём.",
  },
];
