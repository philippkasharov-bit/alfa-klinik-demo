// Every promotion on alfaklinik.ru/skidki.htm (checked 2026-09-17).
// Names, prices, discounts, conditions and dates are preserved exactly;
// only sentence structure is tightened. `originalTitle` keeps the site's heading.
//
// Not included: offers that appear only on department pages (implant offers
// №1–4, orthodontics 2-year payment plan). They reference a "СУПЕР АКЦИЯ 2500"
// that no longer exists on skidki.htm, so they need client confirmation.

export const promoValidity = {
  until: '2026-09-27',
  label: 'Запись по акциям — до 27 сентября 2026',
  short: 'до 27.09.2026',
};

export type PromoCategory = 'hygiene' | 'therapy' | 'aesthetics' | 'prosthetics' | 'general';

export const promoCategories: { id: PromoCategory; label: string }[] = [
  { id: 'hygiene', label: 'Гигиена' },
  { id: 'therapy', label: 'Лечение' },
  { id: 'aesthetics', label: 'Эстетика' },
  { id: 'prosthetics', label: 'Протезирование' },
  { id: 'general', label: 'Для всех пациентов' },
];

export interface PriceRow {
  label: string;
  /** Final price in ₽ as published */
  price: number;
  /** Other figures printed next to the price on the site, kept verbatim */
  note?: string;
}

export interface Promotion {
  id: string;
  category: PromoCategory;
  originalTitle: string;
  title: string;
  description: string;
  /** Single headline price, or a text benefit when there is no price */
  price?: number;
  /** Small line under a text benefit */
  benefitNote?: string;
  benefit?: string;
  /** Multi-tier prices (fillings, zirconia crowns) */
  priceRows?: PriceRow[];
  /** Clinic's own comparison, shown attributed and muted */
  comparison?: string;
  saving?: string;
  includes: string[];
  conditions: string[];
  /** Offer is time-limited by the global booking deadline */
  dated: boolean;
}

export const promotions: Promotion[] = [
  {
    id: 'cleaning',
    category: 'hygiene',
    originalTitle: 'СУПЕР АКЦИЯ 3 900!',
    title: 'Комплексная чистка полости рта',
    description: 'Включает 7 процедур.',
    price: 3900,
    comparison: 'Средняя стоимость этих процедур в Москве — 11 000–14 000 ₽',
    saving: 'Экономия 70%',
    includes: [
      'Ультразвуковая чистка зубных отложений',
      'Осветляющая процедура Air-Flow',
      'Лечебная обработка дёсен',
      'Полировка зубов',
      'Фторирование всех зубов',
      'Оптрагейт',
    ],
    conditions: [
      'По желанию — обучение правильной чистке зубов.',
      'Дополнительные процедуры (насыщение Ca, CaNa, лечебная повязка и др.) оплачиваются отдельно.',
      'По желанию — бесплатная консультация с цифровой диагностикой, 3D-сканированием и фотопротоколом.',
    ],
    dated: true,
  },
  {
    id: 'fillings',
    category: 'therapy',
    originalTitle: 'ПЛОМБА по АКЦИИ!',
    title: 'Светоотверждаемые пломбы',
    description: 'Пломбы по прежним ценам и дополнительно скидка 15%. Цены фиксированные, всё включено.',
    priceRows: [
      { label: 'Малая пломба · поверхностный кариес', price: 5800, note: '6 900 (8 800)' },
      { label: 'Средняя пломба · средний кариес', price: 7400, note: '8 700 (9 700)' },
      { label: 'Большая пломба · глубокий кариес', price: 8200, note: '9 300 (13 000)' },
      { label: 'Художественная реставрация зуба', price: 9900, note: '11 400 (14 500)' },
    ],
    benefit: 'Скидка 15%',
    includes: ['Анестезия', 'Материалы: Gradia, Estelite (Япония), Kerr (США)', 'Работа врача'],
    conditions: [
      'Размер пломбы определяется глубиной поражения тканей зуба.',
      'По желанию — бесплатная консультация с цифровой диагностикой, 3D-сканированием и фотопротоколом.',
    ],
    dated: true,
  },
  {
    id: 'whitening',
    category: 'aesthetics',
    originalTitle: 'Белоснежная улыбка 17 900!',
    title: 'Фотоотбеливание ZOOM 4',
    description: 'Бережное отбеливание по технологии Philips ZOOM 4 Led — эмаль светлеет до 10–12 тонов.',
    price: 17900,
    comparison: 'Средняя стоимость в Москве — 28 000–37 000 ₽',
    saving: 'Экономия 49%',
    includes: [
      'Осмотр и консультация',
      'Рентгендиагностика при необходимости',
      'Нанесение геля',
      'Сеансы отбеливания лампой ZOOM 4',
      'Экспресс-реминерализация',
    ],
    conditions: ['Только оригинальные материалы.'],
    dated: true,
  },
  {
    id: 'crown-duceram',
    category: 'prosthetics',
    originalTitle: 'МЕГА АКЦИЯ 12 700!',
    title: 'Металлокерамическая коронка DUCERAM',
    description: '1 единица «под ключ». Германия, кобальт-хром.',
    price: 12700,
    comparison: 'Средняя стоимость 1 ед. DUCERAM в Москве — 19 000–25 000 ₽',
    saving: 'Экономия 49%',
    includes: ['Работа врача', 'Снятие слепков', 'Анестезия', 'Консультация', 'Панорамные снимки', 'Лабораторная часть'],
    conditions: ['Действует только на металлокерамические коронки DUCERAM.'],
    dated: true,
  },
  {
    id: 'crown-zirconia',
    category: 'prosthetics',
    originalTitle: 'МЕГА АКЦИИ 20 950 – 22 950!',
    title: 'Коронки из оксида циркония',
    description: 'Коронки на основе оксида циркония «под ключ». Цена зависит от количества.',
    priceRows: [
      { label: 'До 5 коронок', price: 22950 },
      { label: 'До 10 коронок', price: 21950 },
      { label: 'Более 10 коронок', price: 20950 },
    ],
    comparison: 'Средняя стоимость 1 коронки из оксида циркония в Москве — 38 000–48 000 ₽',
    saving: 'Экономия 50%',
    includes: ['Работа врача', 'Снятие слепков', 'Анестезия', 'Консультация', 'Панорамные снимки', 'Лабораторная часть'],
    conditions: [],
    dated: true,
  },
  {
    id: 'crown-vita',
    category: 'prosthetics',
    originalTitle: 'МЕГА АКЦИЯ 15 000!',
    title: 'Металлокерамическая коронка VITA',
    description: '1 единица «под ключ». Германия, кобальт-хром.',
    price: 15000,
    comparison: 'Средняя стоимость 1 ед. VITA в Москве — 23 000–29 000 ₽',
    saving: 'Экономия 49%',
    includes: ['Работа врача', 'Снятие слепков', 'Анестезия', 'Консультация', 'Панорамные снимки', 'Лабораторная часть'],
    conditions: ['Действует только на металлокерамические коронки VITA.'],
    dated: true,
  },
  {
    id: 'crown-noritake',
    category: 'prosthetics',
    originalTitle: 'МЕГА АКЦИЯ 16 900!',
    title: 'Металлокерамическая коронка Noritake',
    description: '1 единица последнего поколения «под ключ». Япония, кобальт-хром.',
    price: 16900,
    comparison: 'Средняя стоимость 1 ед. Noritake в Москве — 27 000–32 000 ₽',
    saving: 'Экономия 49%',
    includes: ['Работа врача', 'Снятие слепков', 'Анестезия', 'Консультация', 'Панорамные снимки', 'Лабораторная часть'],
    conditions: ['Действует только на металлокерамические коронки Noritake.'],
    dated: true,
  },
  {
    id: 'consultation',
    category: 'general',
    originalTitle: 'БЕСПЛАТНО',
    title: 'Расширенная консультация и план лечения',
    description: 'Консультация стоматолога по терапии, хирургии и ортопедии, с диагностикой.',
    benefit: 'Бесплатно',
    includes: [
      'Компьютерная и рентгендиагностика (панорамный снимок, визиография)',
      'Интраоральное 3D-сканирование и фотопротокол',
      'Составление полного плана лечения',
    ],
    conditions: ['Результаты консультации оформляются и выдаются на руки.'],
    dated: false,
  },
  {
    id: 'card',
    category: 'general',
    originalTitle: 'ПОДАРОК – 15%',
    title: 'Накопительная дисконтная карта',
    description: 'Подарок при первом посещении: карта со скидкой 15% на все услуги.',
    benefit: '15%',
    benefitNote: 'Ускоренный рост скидки до 25–30% без затрат',
    includes: ['Вручается при первом посещении', 'Распространяется на всех членов семьи'],
    conditions: [],
    dated: false,
  },
];

/** Conditions that apply to every promotion (from skidki.htm) */
export const promoRules = [
  'Акции не исключают друг друга и суммируются в любом количестве.',
  'Все включено, без скрытых платежей.',
  'Гарантия на все виды услуг.',
];

/**
 * Conditions & information for the promotions page.
 * Source: skidki.htm — booking deadline line, «Как у нас:» block, repeated offer
 * footers («Отсутствие скрытых платежей», «Гарантия на все виды услуг»), and
 * price.htm («актуальные цены уточняйте у оператора»).
 */
export const promoConditions = [
  { title: 'Срок записи', text: 'Запись по всем стоматологическим акциям — до 27 сентября 2026 года.' },
  { title: 'Акции суммируются', text: 'Акции не исключают друг друга, их можно использовать в любом количестве.' },
  { title: 'Всё включено', text: 'В акционную цену входит всё, что указано в описании акции. Скрытых платежей нет.' },
  { title: 'Условия конкретной акции', text: 'Ограничения указаны в карточке — например, акция на металлокерамику DUCERAM действует только на эти коронки.' },
  { title: 'Информация окончательная', text: 'Клиника указывает, что изложенная информация является окончательной и полной и несёт за неё ответственность.' },
  { title: 'Материалы можно увидеть', text: 'Материалы, технологии и оборудование можно увидеть лично во время посещения и перед любой манипуляцией.' },
  { title: 'Гарантия', text: 'Гарантия на все виды услуг.' },
];

export const featuredPromoId = 'cleaning';
export const secondaryPromoIds = ['consultation', 'whitening'];
