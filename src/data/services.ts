// Major dental service categories. Structure follows the six departments listed
// on alfaklinik.ru/stomatology.htm plus professional hygiene, which the site
// presents as its own service and headline offer. Descriptions are condensed
// from the department pages; `source` names the page each fact came from.
// Deliberately omitted: "99% success", "implants last 15+ years", "95% of people",
// "all procedures painless" — marketing claims the client should substantiate first.

export interface Service {
  slug: string;
  name: string;
  /** One line, shown in the list */
  summary: string;
  /** 1–2 sentences, shown when the service is open */
  description: string;
  includes: string[];
  /** Optional factual offer from skidki.htm */
  offer?: string;
  /** Price-guide category for this service, if the clinic has published prices for it */
  priceHref?: string;
  imageLabel: string;
  source: string;
}

export const services: Service[] = [
  {
    slug: 'diagnostics',
    name: 'Диагностика',
    summary: 'Снимки и цифровое обследование',
    description:
      'Отделение компьютерной и рентгендиагностики: снимки и цифровое обследование перед любым лечением.',
    includes: ['Панорамный снимок', 'Визиография', 'Интраоральное 3D-сканирование', 'Фотопротокол'],
    imageLabel: 'диагностический кабинет',
    source: 'rentgendiagnostik.htm; skidki.htm',
  },
  {
    slug: 'hygiene',
    name: 'Профессиональная гигиена',
    summary: 'Комплексная чистка полости рта',
    description:
      'Комплексная чистка из семи процедур. По желанию — обучение правильной чистке зубов.',
    includes: ['Ультразвуковая чистка отложений', 'Air-Flow', 'Лечебная обработка дёсен', 'Полировка и фторирование'],
    offer: 'Акция 3 900 ₽ — запись до 27 сентября 2026',
    priceHref: '/price#price-therapy',
    imageLabel: 'гигиенический кабинет',
    source: 'paratendologiya.htm; skidki.htm',
  },
  {
    slug: 'therapy',
    name: 'Терапия и эстетика',
    summary: 'Лечение кариеса, каналов, реставрации',
    description:
      'Лечение кариеса, лечение и пломбирование каналов, художественная реставрация. Размер пломбы определяется глубиной поражения зуба.',
    includes: ['Пломбы Gradia, Estelite, Kerr', 'Художественная реставрация', 'Отбеливание Philips ZOOM 4'],
    priceHref: '/price#price-therapy',
    imageLabel: 'лечебный кабинет',
    source: 'stamotologia1.htm; skidki.htm',
  },
  {
    slug: 'periodontics',
    name: 'Пародонтология',
    summary: 'Здоровье дёсен и тканей вокруг зуба',
    description:
      'Лечение и профилактика заболеваний пародонта — дёсен, костной лунки и связок, удерживающих зуб. Начальные стадии часто протекают бессимптомно.',
    includes: ['Лечение заболеваний дёсен', 'Профилактика'],
    imageLabel: 'кабинет пародонтолога',
    source: 'paratendologiya.htm',
  },
  {
    slug: 'implantology',
    name: 'Имплантация и хирургия',
    summary: 'Восстановление утраченных зубов',
    description:
      'Имплантация восстанавливает один или несколько потерянных зубов. Клиника не спешит удалять зуб: при необходимости проводятся зубосохраняющие операции.',
    includes: ['Системы ASTRA TECH, Nobel Biocare, Biotech', 'Зубосохраняющие операции', 'Удаление зубов'],
    priceHref: '/price#price-implantology',
    imageLabel: 'хирургический кабинет',
    source: 'stamotologia3.htm; stomatology.htm',
  },
  {
    slug: 'prosthetics',
    name: 'Протезирование',
    summary: 'Коронки, в том числе на имплантатах',
    description:
      'Функциональное и эстетическое протезирование, включая протезирование на имплантатах. Коронки «под ключ»: работа врача, слепки, анестезия, снимки и лабораторная часть.',
    includes: ['Металлокерамика DUCERAM, VITA, Noritake', 'Коронки из оксида циркония'],
    offer: 'Коронки по акции от 12 700 ₽ — запись до 27 сентября 2026',
    priceHref: '/price#price-orthopedics',
    imageLabel: 'зуботехническая работа',
    source: 'stamotologia4.htm; stomatology.htm; skidki.htm',
  },
  {
    slug: 'orthodontics',
    name: 'Ортодонтия',
    summary: 'Исправление прикуса у детей и взрослых',
    description:
      'Коррекция прикуса и положения зубов съёмной или несъёмной аппаратурой. Лечение, как правило, длится не менее года.',
    includes: ['Брекет-системы: металлические, керамические, сапфировые, лингвальные', 'Пластинки и функциональные аппараты для детей'],
    priceHref: '/price#price-orthodontics',
    imageLabel: 'ортодонтическое лечение',
    source: 'stamotologia2.htm; stomatology.htm',
  },
];
