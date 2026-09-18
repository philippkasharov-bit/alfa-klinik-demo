// Trust statements. Every item is condensed from alfaklinik.ru/skidki.htm
// ("Преимущества Альфа-Клиник" list and offer descriptions). `source` quotes
// the original wording so claims can be checked. The site publishes no
// statistics (years, patients, doctors), so none are shown.

export interface TrustPillar {
  label: string;
  title: string;
  text: string;
  source: string;
}

export const trustPillars: TrustPillar[] = [
  {
    label: 'Консультация',
    title: 'Понятный план лечения',
    text: 'Объясняем лечение, его стоимость, сроки и гарантии простым языком. Результаты консультации выдаём на руки.',
    source: 'Преимущества, п. 2–3',
  },
  {
    label: 'Диагностика',
    title: 'Цифровое обследование',
    text: 'Любое лечение начинается с полной диагностики — план строится по её результатам.',
    source: 'Описание акций',
  },
  {
    label: 'Стоимость',
    title: 'Без скрытых платежей',
    text: 'По акциям — фиксированные цены: анестезия, материалы и работа врача уже включены.',
    source: 'Описание акций',
  },
  {
    label: 'Специалисты',
    title: 'Постоянное обучение',
    text: 'Врачи проходят обучение и усовершенствование в ведущих учреждениях России и Европы.',
    source: 'Преимущества, п. 8',
  },
];

// Manufacturers named on the source page, with what they are used for there.
export const materials = [
  { name: 'Gradia', origin: 'Япония', use: 'пломбы' },
  { name: 'Estelite', origin: 'Япония', use: 'пломбы' },
  { name: 'Kerr', origin: 'США', use: 'пломбы' },
  { name: 'Philips ZOOM 4', origin: null, use: 'отбеливание' },
  { name: 'DUCERAM', origin: 'Германия', use: 'коронки' },
  { name: 'VITA', origin: null, use: 'коронки' },
  { name: 'Noritake', origin: null, use: 'коронки' },
] as const;

export const commitments = [
  'Гарантия на все виды услуг',
  'Отсрочка оплаты от 1 до 3 месяцев',
  'Возможность кредитования',
];
