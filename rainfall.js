// Lightweight rain drawn behind the portfolio. Stops when hidden or motion is reduced.
(() => {
  const canvas = document.createElement('canvas');
  canvas.className = 'rainfall';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.append(canvas);
  const context = canvas.getContext('2d');
  if (!context) { canvas.remove(); return; }
  const button = document.createElement('button');
  button.className = 'rain-control';
  button.type = 'button';
  document.body.append(button);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let width = 0, height = 0, drops = [], frame = 0, previous = 0, paused = false;
  function resize() {
    width = innerWidth; height = innerHeight;
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    drops = Array.from({length: width < 768 ? 75 : 190}, () => ({
      x: Math.random() * (width + 100), y: Math.random() * height,
      depth: .35 + Math.random() * .65
    }));
  }
  function paint(time) {
    frame = requestAnimationFrame(paint);
    if (time - previous < 32) return;
    const elapsed = Math.min((time - previous) / 1000 || .032, .06);
    previous = time;
    context.clearRect(0, 0, width, height);
    context.lineCap = 'round';
    for (const drop of drops) {
      const length = 9 + drop.depth * 15;
      drop.y += (380 + drop.depth * 340) * elapsed;
      drop.x -= (35 + drop.depth * 45) * elapsed;
      if (drop.y > height + length) { drop.y = -length; drop.x = Math.random() * (width + 100); }
      if (drop.x < -30) drop.x = width + 25;
      context.strokeStyle = `rgba(210,232,241,${.12 + drop.depth * .24})`;
      context.lineWidth = .5 + drop.depth * .6;
      context.beginPath(); context.moveTo(drop.x, drop.y);
      context.lineTo(drop.x - length * .12, drop.y + length); context.stroke();
    }
  }
  function sync() {
    cancelAnimationFrame(frame); frame = 0; previous = 0;
    context.clearRect(0, 0, width, height);
    button.hidden = reduced.matches;
    button.textContent = paused ? 'Resume rain' : 'Pause rain';
    button.setAttribute('aria-label', paused ? 'Resume background rainfall' : 'Pause background rainfall');
    if (!paused && !reduced.matches && !document.hidden) frame = requestAnimationFrame(paint);
  }
  button.addEventListener('click', () => {paused = !paused; sync();});
  addEventListener('resize', resize, {passive:true});
  document.addEventListener('visibilitychange', sync);
  reduced.addEventListener('change', sync);
  resize(); sync();
})();
