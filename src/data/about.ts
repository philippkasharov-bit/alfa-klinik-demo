// "About" content. Sources:
//   stomatology.htm — approach, tooth preservation, fixed treatment cost
//   site header     — «Многопрофильный медицинский центр»
//   main menu       — 14 non-dental departments (listed below)
//   footer          — legal entity
// Deliberately not repeated here (already in the trust section): staff training,
// written consultation results, diagnostics.

export const otherDepartments = [
  'Урология-андрология',
  'Акушерство-гинекология',
  'Маммология',
  'ЛОР',
  'Иммунология-аллергология',
  'Флебология',
  'Эндокринология',
  'Дерматология',
  'Мануальная терапия',
  'Хирургия',
  'Терапия',
  'Кардиология',
  'Неврология',
  'Геронтология',
];

export const about = {
  eyebrow: 'О клинике',
  heading: { lead: 'Многопрофильный медицинский центр', accent: 'на Воронцовских прудах' },
  paragraph:
    'Основа подхода Альфа-Клиник к лечению зубов — качественные и доступные услуги, подробная консультация о состоянии зубов и объективная оценка того, какое обследование и лечение действительно нужны.',
  points: [
    {
      title: 'Сохраняем зубы',
      text: 'Клиника не торопится удалять зуб. Когда терапевтического лечения недостаточно, проводятся хирургические зубосохраняющие операции.',
    },
    {
      title: 'Не только стоматология',
      text: `Помимо стоматологии — ещё ${otherDepartments.length} медицинских направлений, от кардиологии до дерматологии.`,
    },
  ],
};
