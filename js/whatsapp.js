export const redirectToWhatsApp = (plan = 'basic') => {
  const map = {
    basic: 'BASIC',
    plus: 'PLUS',
    pro:  'PRO'
  };
  const number = document.body.dataset.whatsapp || '5582981777699';
  const msg = `Olá! Tenho interesse no plano ${map[plan]} do Agente IA. Gostaria de saber mais detalhes sobre a implementação.`;
  const url = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
};
