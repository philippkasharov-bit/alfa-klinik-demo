// Patient journey. Every step is supported by the source site:
//   01 skidki.htm        — «БЕСПЛАТНО: Расширенная консультация стоматолога (терапия, хирургия, ортопедия)»
//   02 skidki.htm        — computer & X-ray diagnostics, intraoral 3D scanning, photo protocol
//                          rentgendiagnostik.htm — «Любому лечению предшествует диагностика»
//   03 skidki.htm        — «Составление полного плана лечения», explanation of treatment, cost,
//                          timing and guarantees; results handed over, patient decides
//   04 stomatology.htm   — cost set at first consultation, unchanged during treatment
//                          skidki.htm — deferred payment 1–3 months, credit
//   05 skidki.htm        — «Гарантия на все виды услуг»
//                          stamotologia1.htm — regular preventive visits recommended

export interface JourneyStep {
  title: string;
  text: string;
  note?: string;
}

export const journey = {
  eyebrow: 'Как проходит лечение',
  heading: { lead: 'Пять шагов', accent: 'от консультации до гарантии' },
  intro: 'Что происходит на каждом этапе — от первого визита до завершения лечения.',
  steps: [
    {
      title: 'Консультация',
      text: 'Расширенная консультация стоматолога: терапия, хирургия, ортопедия.',
      note: 'Бесплатно',
    },
    {
      title: 'Диагностика',
      text: 'Рентген и компьютерная диагностика, 3D-сканирование зубов и фотопротокол.',
      note: 'Бесплатно',
    },
    {
      title: 'План лечения',
      text: 'Полный план: что нужно сделать, сколько стоит, сроки и гарантии — понятным языком.',
      note: 'Выдаётся на руки',
    },
    {
      title: 'Лечение',
      text: 'По согласованному плану и по цене, названной на консультации.',
      note: 'Отсрочка оплаты 1–3 месяца',
    },
    {
      title: 'Гарантия',
      text: 'Гарантия на все виды услуг. Клиника рекомендует регулярные профилактические визиты.',
    },
  ] satisfies JourneyStep[],
};
