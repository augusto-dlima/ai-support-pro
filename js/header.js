import { $, on, add, remove, toggle } from './dom.js';

export const initHeaderEffects = () => {
  const header = $('#header');
  const mobileNav = $('#mobile-nav');
  const btn = $('.mobile-menu-btn');
  const threshold = 120;

  on(window, 'scroll', () => {
    if (window.scrollY > threshold) add(header, 'scrolled'); else remove(header, 'scrolled');
  });

  on(btn, 'click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    toggle(mobileNav, 'active');
  });

  on(document, 'click', (e) => {
    if (!mobileNav.contains(e.target) && !btn.contains(e.target)) {
      remove(mobileNav, 'active');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  on(document, 'keydown', (e) => {
    if (e.key === 'Escape') {
      remove(mobileNav, 'active');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
};
