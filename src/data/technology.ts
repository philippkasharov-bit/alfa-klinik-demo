// Technology & modern dentistry. Every item is named on alfaklinik.ru:
//   rentgendiagnostik.htm — computer & X-ray diagnostics, panoramic image, visiography
//   skidki.htm            — intraoral 3D scanning with camera + photo protocol; ZOOM 4 Led;
//                           Air-Flow, ultrasound; filling & crown brands;
//                           "technology, equipment and materials of the latest generation
//                           (USA, Germany, Japan, Austria)… we will gladly demonstrate"
//   stomatology.htm       — orthopantomograph, physiodispenser; dental laboratory
//   stamotologia3.htm     — implant systems ASTRA TECH, Nobel Biocare, Biotech
// Grouped by treatment stage so it reads as care, not an equipment catalogue.

export interface TechChapter {
  id: string;
  title: string;
  text: string;
  details: string[];
  imageLabel: string;
}

export const technology = {
  eyebrow: 'Технологии',
  heading: { lead: 'Точная диагностика —', accent: 'основа лечения' },
  intro:
    'Любому лечению предшествует диагностика, которая его определяет. Технологии, оборудование и материалы клиники — из США, Германии, Японии и Австрии, и их можно увидеть лично перед любой процедурой.',
  chapters: [
    {
      id: 'diagnostics',
      title: 'Цифровая диагностика',
      text: 'Компьютерная и рентгендиагностика, интраоральное 3D-сканирование зубов камерой и фотопротокол — фотофиксация состояния зубов до начала лечения.',
      details: ['Ортопантомограф', 'Панорамный снимок', 'Визиография', '3D-сканирование'],
      imageLabel: 'кабинет диагностики',
    },
    {
      id: 'implantology',
      title: 'Имплантация',
      text: 'Для имплантации в клинике есть необходимое оборудование — ортопантомограф и физиодиспенсер — и имплантационные системы трёх производителей.',
      details: ['Физиодиспенсер', 'ASTRA TECH · Швеция', 'Nobel Biocare · США', 'Biotech · Франция'],
      imageLabel: 'хирургический кабинет',
    },
    {
      id: 'aesthetics',
      title: 'Бережная эстетика',
      text: 'Отбеливание Philips ZOOM 4 Led действует бережнее аппаратов прежнего поколения — эмаль светлеет до 10–12 тонов. Гигиена — ультразвуком и Air-Flow.',
      details: ['Philips ZOOM 4 Led', 'Air-Flow', 'Ультразвуковая чистка'],
      imageLabel: 'процедура отбеливания',
    },
    {
      id: 'prosthetics',
      title: 'Материалы и лаборатория',
      text: 'Протезирование опирается на услуги современно оснащённой лаборатории. Коронки — металлокерамика и оксид циркония, пломбировочные материалы — премиум-уровня.',
      details: ['DUCERAM', 'VITA', 'Noritake', 'Оксид циркония', 'Gradia · Estelite · Kerr'],
      imageLabel: 'зуботехническая лаборатория',
    },
  ] satisfies TechChapter[],
};
