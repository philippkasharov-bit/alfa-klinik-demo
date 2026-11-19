// Doctors.
//
// SOURCE CHECK (2026-09-17): alfaklinik.ru publishes NO doctor names, photos,
// credentials, experience or biographies. Checked: stomatology.htm, all six
// department pages, service pages, contacts.htm, price.htm, faq.htm,
// full_text.htm, specialists.htm (menu only), sitemap.htm.
//
// Therefore `doctors` is empty and the section renders placeholder slots — one per
// real dental department (department names ARE verified, from stomatology.htm).
//
// TO ADD A REAL DOCTOR: push an object into `doctors` with `department` matching a
// department id below. Any field left undefined simply doesn't render.

export type DepartmentId =
  | 'therapy'
  | 'surgery'
  | 'orthopedics'
  | 'orthodontics'
  | 'periodontics'
  | 'diagnostics';

/** The clinic's six dental departments, as named on stomatology.htm */
export const departments: Record<DepartmentId, string> = {
  therapy: 'Терапевтическая и эстетическая стоматология',
  surgery: 'Хирургическая стоматология и имплантология',
  orthopedics: 'Ортопедическая стоматология',
  orthodontics: 'Ортодонтия и зубочелюстные аномалии',
  periodontics: 'Пародонтология',
  diagnostics: 'Компьютерная и рентгендиагностика',
};

export interface Doctor {
  slug: string;
  name: string;
  /** e.g. «Врач-стоматолог-терапевт» — as stated by the clinic */
  specialty: string;
  department: DepartmentId;
  photo?: { src: string; alt: string; width: number; height: number };
  /** Verified credentials only: education, degrees, memberships */
  credentials?: string[];
  /** Year practice began — displayed as «Стаж с 2009 года», never as a computed count */
  practiceSince?: number;
  /** 1–2 sentences, verified */
  bio?: string;
  /** Profile page, once it exists */
  href?: string;
  featured?: boolean;
}

/** Real doctors. Empty until the clinic supplies verified information. */
export const doctors: Doctor[] = [];

/** Order in which department slots appear; the first is presented as the featured profile. */
export const doctorSlotOrder: DepartmentId[] = [
  'therapy',
  'surgery',
  'orthopedics',
  'orthodontics',
  'periodontics',
  'diagnostics',
];

export const doctorsSection = {
  heading: { lead: 'Врачи', accent: 'Альфа-Клиник' },
  /** Heading used while no verified doctor profiles exist */
  departmentsHeading: 'Шесть отделений стоматологии',
  // stomatology.htm: «специалистов, регулярно повышающих квалификацию в ведущих
  // клиниках и научных учреждениях России и Европы»
  intro:
    'Специалисты клиники регулярно повышают квалификацию в ведущих клиниках и научных учреждениях России и Европы.',
  placeholderNotice:
    'Профили врачей — фотографии, специализации и опыт — появятся после согласования с клиникой. Кто ведёт приём в нужном отделении, подскажет администратор.',
};
