import { $, add, remove } from './dom.js';

export const initPromoModal = () => {
  const overlay = $('#promoModal');
  if (!overlay) return;

  const monthTarget = document.getElementById('currentMonth');
  if (monthTarget) {
    const mes = new Date().toLocaleString('pt-BR', { month: 'long' });
    monthTarget.textContent = mes.charAt(0).toUpperCase() + mes.slice(1);
  }

  // abrir após 12s
  setTimeout(() => add(overlay, 'active'), 12000);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) remove(overlay, 'active');
  });
  const closeBtn = overlay.querySelector('.promo-modal-close');
  closeBtn.addEventListener('click', () => remove(overlay, 'active'));

  // scroll to plans via botão do modal
  const goPlans = overlay.querySelector('[data-action="scroll-to-plans"]');
  if (goPlans) {
    goPlans.addEventListener('click', () => {
      const target = document.getElementById('pricing');
      const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
      window.scrollTo({ top: target.offsetTop - headerHeight - 20, behavior: 'smooth' });
      remove(overlay, 'active');
    });
  }
};

export const initPromoNotification = () => {
  const notif = document.getElementById('promoNotification');
  const overlay = document.getElementById('promoModal');
  if (!notif || !overlay) return;
  setTimeout(() => notif.classList.add('visible'), 6000);
  notif.addEventListener('click', () => overlay.classList.add('active'));
};
