// Navigation. Every link resolves inside the redesign (no legacy .htm pages exist yet):
// services and doctors live on the homepage, prices/promotions/contacts have pages.

export interface NavItem {
  label: string;
  href: string;
}

export const primaryNav: NavItem[] = [
  { label: 'Услуги', href: '/#services' },
  { label: 'Цены', href: '/price' },
  { label: 'Акции', href: '/skidki' },
  { label: 'Врачи', href: '/#doctors' },
  { label: 'Контакты', href: '/contacts' },
];

/** Secondary links (footer) */
export const secondaryNav: NavItem[] = [
  { label: 'Как проходит лечение', href: '/#journey' },
  { label: 'Вопросы и ответы', href: '/#faq' },
];

// Mobile menu second tier: the original menu's services, each opening the
// matching category in the homepage services section.
export const dentalServices: NavItem[] = [
  { label: 'Имплантация', href: '/#service-implantology' },
  { label: 'Протезирование зубов', href: '/#service-prosthetics' },
  { label: 'Безметалловая керамика', href: '/#service-prosthetics' },
  { label: 'Металлокерамика', href: '/#service-prosthetics' },
  { label: 'Исправление прикуса', href: '/#service-orthodontics' },
  { label: 'Отбеливание зубов', href: '/#service-therapy' },
  { label: 'Реставрация зубов', href: '/#service-therapy' },
  { label: 'Лечение кариеса', href: '/#service-therapy' },
  { label: 'Пародонтология', href: '/#service-periodontics' },
  { label: 'Удаление зубного камня', href: '/#service-hygiene' },
  { label: 'Удаление зубов', href: '/#service-implantology' },
];

// No online booking exists on the source site; the appointment CTA calls the clinic.
export const appointmentCta = {
  label: 'Записаться',
  labelLong: 'Записаться на приём',
};

export const isCurrent = (pathname: string, href: string) =>
  pathname.replace(/\.html?$|\/$/, '') === href;
