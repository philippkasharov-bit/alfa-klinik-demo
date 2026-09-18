// Booking buttons adapt to the input device.
// Markup ships a real tel: link (phones dial, no-JS works). On devices with a
// precise pointer and hover — i.e. a desktop/laptop, where tel: usually does
// nothing — the same button opens the callback form instead:
//   · same page has the form → scroll to it and focus the first field
//   · otherwise             → /contacts, straight to its form
const DESKTOP = window.matchMedia('(hover: hover) and (pointer: fine)');
const CONTACTS_FORM = '/contacts#contacts-appt-form';

export function initBooking() {
  const buttons = [...document.querySelectorAll<HTMLAnchorElement>('a[data-book]')];
  if (!buttons.length) return;

  const form = document.querySelector<HTMLFormElement>('form[data-appt-form]');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  buttons.forEach((a) => {
    a.dataset.tel = a.getAttribute('href') ?? '';
    a.dataset.label = a.getAttribute('aria-label') ?? '';
  });

  const apply = () => {
    const toForm = DESKTOP.matches;
    buttons.forEach((a) => {
      const text = a.textContent?.replace(/\s+/g, ' ').trim() ?? '';
      if (toForm) {
        a.setAttribute('href', form ? `#${form.id}` : CONTACTS_FORM);
        a.setAttribute('aria-label', `${text}: оставить номер для обратного звонка`);
      } else {
        a.setAttribute('href', a.dataset.tel!);
        if (a.dataset.label) a.setAttribute('aria-label', a.dataset.label);
        else a.removeAttribute('aria-label');
      }
    });
  };

  if (form) {
    buttons.forEach((a) =>
      a.addEventListener('click', (e) => {
        if (!DESKTOP.matches) return;
        e.preventDefault();
        form.scrollIntoView({ behavior: reduced.matches ? 'auto' : 'smooth', block: 'center' });
        form.querySelector<HTMLElement>('input, textarea')?.focus({ preventScroll: true });
        history.replaceState(null, '', `#${form.id}`);
      }),
    );
  }

  apply();
  DESKTOP.addEventListener('change', apply);
}
