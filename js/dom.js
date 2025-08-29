export const $ = (s, root = document) => root.querySelector(s);
export const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
export const on = (el, ev, cb) => el && el.addEventListener(ev, cb);
export const add = (el, cls) => el && el.classList.add(cls);
export const remove = (el, cls) => el && el.classList.remove(cls);
export const toggle = (el, cls) => el && el.classList.toggle(cls);
