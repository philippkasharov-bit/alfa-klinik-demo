// Reveals [data-reveal] elements once as they enter the viewport.
// - elements already on screen at load reveal right away (hero entrance),
//   on the next frame so their transition still plays — never waiting on an observer
// - everything else: one shared IntersectionObserver, unobserved after reveal
// - reduced motion or no IO support: everything is simply visible
export function initReveal() {
  (window as unknown as { __revealReady?: boolean }).__revealReady = true;

  const els = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const show = (el: Element) => el.classList.add('is-visible');
  const nextFrame = (fn: () => void) => {
    let done = false;
    const run = () => { if (!done) { done = true; fn(); } };
    requestAnimationFrame(() => requestAnimationFrame(run));
    setTimeout(run, 60); // rAF can be throttled (background tabs); don't let content wait
  };

  const vh = window.innerHeight;
  const onScreen: HTMLElement[] = [];
  const later: HTMLElement[] = [];
  for (const el of els) {
    const r = el.getBoundingClientRect();
    (r.top < vh * 0.92 && r.bottom > 0 ? onScreen : later).push(el);
  }
  nextFrame(() => onScreen.forEach(show));

  // Image reveals start fully clipped (clip-path: inset(100% …)), which gives them
  // no intersectable area — so watch their unclipped parent instead.
  const targetOf = new Map<Element, HTMLElement>();
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        show(targetOf.get(e.target) ?? e.target);
        io.unobserve(e.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  later.forEach((el) => {
    const watch = el.dataset.reveal === 'image' && el.parentElement ? el.parentElement : el;
    targetOf.set(watch, el);
    io.observe(watch);
  });
}
