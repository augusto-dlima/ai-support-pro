import { initHeaderEffects } from './header.js';
import { initScrollAnimations } from './scroll-anim.js';
import { initFAQ } from './faq.js';
import { initPromoModal, initPromoNotification } from './modal.js';
import { redirectToWhatsApp } from './whatsapp.js';
import { $ } from './dom.js';
import { track } from './analytics.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeaderEffects();
  initScrollAnimations();
  initFAQ();
  initPromoModal();
  initPromoNotification();

  // Smooth scroll com compensação do header
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      const target = href && document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
      window.scrollTo({ top: target.offsetTop - headerHeight - 20, behavior: 'smooth' });
      track('nav_click', { href });
    });
  });

  // CTAs de planos
  document.querySelectorAll('.pricing-cta[data-plan]').forEach(btn => {
    btn.addEventListener('click', () => {
      const plan = btn.getAttribute('data-plan');
      track('cta_plan_click', { plan });
      redirectToWhatsApp(plan);
    });
  });

  // CTA do hero
  const heroCta = document.querySelector('.hero-cta');
  heroCta?.addEventListener('click', () => track('cta_hero_click', {}));

  // Botão voltar ao topo
  $('#backToTop')?.addEventListener('click', () => track('back_to_top', {}));

  console.log('🚀 AI Support Pro inicializada');
});
