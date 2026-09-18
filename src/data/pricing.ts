// Price guide.
//
// SOURCE CHECK (2026-09-17):
//   price.htm contains NO prices on the page. It links six PDF price lists
//   (price/therapy.pdf, hirurg.pdf, ortopedia.pdf, implant.pdf, ortodont.pdf, main.pdf)
//   last modified between 2010 and 2019, and states:
//   «В связи с быстро меняющейся финансовой обстановкой, актуальные цены уточняйте у оператора.»
//   Per project decision the PDFs were NOT downloaded or used (outdated).
//
// What IS shown:
//   - the six categories exactly as listed on price.htm
//   - current offer prices from skidki.htm (via data/promotions.ts), always with their conditions
//   - clearly marked placeholder rows where the clinic must supply an up-to-date list

import { promotions, promoValidity } from './promotions';

export interface PriceRow {
  name: string;
  detail?: string;
  /** ₽. Omit for text prices or placeholders */
  price?: number;
  priceText?: string;
  /** ₽ before the discount, shown struck through next to the price */
  was?: number;
  /** Always shown under the name when present — a price is never presented unconditionally */
  condition?: string;
  /** What the price covers — rendered as an expandable «Что входит» */
  includes?: string[];
  placeholder?: boolean;
}

export interface PriceCategory {
  id: string;
  title: string;
  /** Label of the corresponding link on price.htm */
  sourceLabel: string;
  rows: PriceRow[];
}

const p = (id: string) => promotions.find((x) => x.id === id)!;
// Short per-row tag; the deadline is stated once per category (offerNote) to keep rows scannable.
const OFFER = 'Цена по акции';
export const offerNote = `Цены по акции действуют при записи до ${promoValidity.label.replace('Запись по акциям — до ', '')}.`;

const placeholderRow = (what: string): PriceRow => ({
  name: `${what}: полный перечень услуг`,
  detail: 'Актуальный прайс-лист должна предоставить клиника',
  priceText: '—',
  placeholder: true,
});

const fillings = p('fillings');
const zirconia = p('crown-zirconia');

export const pricing = {
  eyebrow: 'Цены',
  heading: { lead: 'Стоимость', accent: 'лечения' },
  /** Verbatim from price.htm */
  sourceNotice: 'Цены прайс-листа могут меняться вместе с финансовой обстановкой — актуальные уточняйте у администратора. Это не касается уже начатого лечения.',
  /** stomatology.htm */
  fixedCostNote: 'Стоимость лечения определяется на первой консультации и не меняется на протяжении всего лечения.',
  /** price.htm + skidki.htm */
  giftNote: 'В подарок — накопительная дисконтная карта 15% на все услуги.',
  freeConsultation: {
    name: 'Расширенная консультация стоматолога',
    detail: 'Терапия, хирургия, ортопедия · рентген и компьютерная диагностика · 3D-сканирование и фотопротокол · полный план лечения',
    priceText: 'Бесплатно',
    condition: 'Акция клиники · срок не указан — уточняйте у администратора',
  },

  categories: [
    {
      id: 'therapy',
      title: 'Терапия',
      sourceLabel: 'Прайс Стоматологическая Терапия',
      rows: [
        {
          name: 'Комплексная чистка полости рта',
          detail: 'Ультразвук, Air-Flow, обработка дёсен, полировка, фторирование, оптрагейт',
          price: p('cleaning').price,
          condition: OFFER,
          includes: p('cleaning').includes,
        },
        ...fillings.priceRows!.map<PriceRow>((r) => ({
          name: r.label.split(' · ')[0],
          detail: r.label.split(' · ')[1],
          price: r.price,
          was: r.note ? Number(r.note.split('(')[0].replace(/\s/g, '')) : undefined,
          condition: `${OFFER} · скидка 15%`,
          includes: fillings.includes,
        })),
        {
          name: 'Фотоотбеливание Philips ZOOM 4',
          detail: 'Все этапы, включая консультацию и экспресс-реминерализацию',
          price: p('whitening').price,
          condition: OFFER,
          includes: p('whitening').includes,
        },
        placeholderRow('Терапия'),
      ],
    },
    {
      id: 'surgery',
      title: 'Хирургия',
      sourceLabel: 'Прайс Стоматологическая Хирургия',
      rows: [placeholderRow('Хирургия')],
    },
    {
      id: 'orthopedics',
      title: 'Ортопедия',
      sourceLabel: 'Прайс Стоматологическая Ортопедия',
      rows: [
        {
          name: 'Металлокерамическая коронка DUCERAM',
          detail: '1 единица «под ключ» · Германия, кобальт-хром',
          price: p('crown-duceram').price,
          condition: OFFER,
          includes: p('crown-duceram').includes,
        },
        {
          name: 'Металлокерамическая коронка VITA',
          detail: '1 единица «под ключ» · Германия, кобальт-хром',
          price: p('crown-vita').price,
          condition: OFFER,
          includes: p('crown-vita').includes,
        },
        {
          name: 'Металлокерамическая коронка Noritake',
          detail: '1 единица «под ключ» · Япония, кобальт-хром',
          price: p('crown-noritake').price,
          condition: OFFER,
          includes: p('crown-noritake').includes,
        },
        ...zirconia.priceRows!.map<PriceRow>((r) => ({
          name: 'Коронки из оксида циркония',
          detail: `${r.label} · «под ключ»`,
          price: r.price,
          condition: OFFER,
          includes: zirconia.includes,
        })),
        placeholderRow('Ортопедия'),
      ],
    },
    {
      id: 'implantology',
      title: 'Имплантация',
      sourceLabel: 'Прайс Стоматологическая Имплантация',
      rows: [placeholderRow('Имплантация')],
    },
    {
      id: 'orthodontics',
      title: 'Ортодонтия',
      sourceLabel: 'Прайс Стоматологическая Ортодонтия',
      rows: [placeholderRow('Ортодонтия')],
    },
    {
      id: 'general',
      title: 'Общемедицинские услуги',
      sourceLabel: 'Прайс на Общемедицинские услуги (Терапия, Кардиология, Неврология и пр.)',
      rows: [placeholderRow('Общемедицинские услуги')],
    },
  ] satisfies PriceCategory[],
};

/**
 * Important notes for the /price page. Sources: price.htm (notice, gift card),
 * stomatology.htm (fixed cost), skidki.htm (deadline, combining, deferral, credit).
 */
export const pricingNotes = [
  { title: 'Актуальные цены — у администратора', text: pricing.sourceNotice + ' Цены на услуги, которых нет в списке, сообщат по телефону.' },
  { title: 'Стоимость не меняется', text: pricing.fixedCostNote },
  { title: 'Цены по акции', text: offerNote },
  { title: 'Акции суммируются', text: 'Акции не исключают друг друга, их можно использовать в любом количестве.' },
  { title: 'Отсрочка и кредит', text: 'Возможна отсрочка оплаты от 1 до 3 месяцев и кредитование.' },
  { title: 'Дисконтная карта', text: 'В подарок — накопительная дисконтная карта 15% на все услуги; распространяется на всех членов семьи.' },
];
