// A small, bounded scroll parallax; no continuous animation loop.
(() => {
 const preference = matchMedia('(prefers-reduced-motion: reduce)');
 let pending = false;
 const draw = () => { pending = false; document.documentElement.style.setProperty('--landscape-shift', preference.matches ? '0px' : `${Math.min(scrollY * .018, 18)}px`); };
 addEventListener('scroll', () => {if (!pending) {pending = true; requestAnimationFrame(draw);}}, {passive:true});
 preference.addEventListener('change', draw);
 draw();
})();
