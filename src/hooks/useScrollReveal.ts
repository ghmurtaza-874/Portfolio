import { useEffect } from 'react';

/**
 * Scroll-reveal helper.
 * Observes every `.reveal` element that has not been bound yet and adds
 * `.revealed` when it enters the viewport. Elements keep their class, so
 * re-rendered lists (e.g. filtered project cards) are safe to re-scan.
 *
 * The IntersectionObserver is only created once and shared via a module-level
 * map — cheap and leak-free (elements are unobserved after revealing).
 */
export function observeReveals(root: ParentNode = document): void {
  const elements = Array.from(
    root.querySelectorAll<HTMLElement>('.reveal:not([data-reveal-bound])'),
  );
  if (elements.length === 0) return;

  // Graceful fallback for very old browsers: show everything immediately.
  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
  );

  elements.forEach((el) => {
    el.dataset.revealBound = 'true';
    observer.observe(el);
  });
}

/** Run once from App to activate reveals for the whole page. */
export function useScrollReveal(): void {
  useEffect(() => {
    observeReveals();
  }, []);
}
