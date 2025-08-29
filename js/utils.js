export const debounce = (fn, wait = 10) => {
  let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
};

export const smoothScrollTo = (y) => window.scrollTo({ top: y, behavior: 'smooth' });
