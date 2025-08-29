import { $$, add } from './dom.js';
import { debounce } from './utils.js';

export const initScrollAnimations = () => {
  const elems = $$('.fade-in-up');
  const reveal = () => {
    elems.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 120) add(el, 'visible');
    });
  };
  reveal();
  window.addEventListener('scroll', debounce(reveal, 10));

  // Back to top
  const btn = document.getElementById('backToTop');
  const benefits = document.getElementById('benefits');
  if (btn && benefits) {
    window.addEventListener('scroll', () => {
      const show = window.scrollY >= benefits.offsetTop - 100;
      btn.classList.toggle('visible', show);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
};
