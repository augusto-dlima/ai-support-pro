import { $$ } from './dom.js';

export const initFAQ = () => {
  const buttons = $$('.faq-question');

  buttons.forEach(btn => {
    const answer = btn.parentElement.querySelector('.faq-answer');
    const id = answer.id || `faq-${Math.random().toString(36).slice(2)}`;
    answer.id = id;

    btn.setAttribute('aria-controls', id);
    btn.setAttribute('aria-expanded', 'false');

    btn.addEventListener('click', () => {
      const isActive = btn.classList.contains('active');

      // Fecha todos antes
      buttons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-expanded', 'false');
        b.parentElement.querySelector('.faq-answer').classList.remove('active');
      });

      // Se não estava ativo → abre
      if (!isActive) {
        btn.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        answer.classList.add('active');
      }
      // Se já estava ativo, ele fecha e pronto (não reabre).
    });
  });
};
