/* ═══════════════════════════════════════
   COCO PORTFOLIO — Vanilla JS
═══════════════════════════════════════ */

// ── Scroll Reveal (todas las secciones) ──────────────────────────────────────
// threshold: 0.05 → dispara cuando el 5 % del elemento entra al viewport.
// Sin rootMargin negativo para que no bloquee la detección en pantallas pequeñas.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target); // sólo se anima una vez
      }
    });
  },
  { threshold: 0.4 }   // dispara cuando el 40 % del elemento es visible
);

// Observa elementos de reveal normales Y bento cards (tienen clase reveal-heart)
// Cuando is-visible se añade, el CSS .bento-card.is-visible aplica la rotación
// automáticamente sin necesitar un observer separado.
document.querySelectorAll('.reveal, .reveal-heart').forEach((el) => {
  revealObserver.observe(el);
});

// ── Sección Transformación ───────────────────────────────────────────────────
const transformation = document.getElementById('transformacion');

if (transformation) {
  const transformObserver = new IntersectionObserver(
    ([entry]) => {
      transformation.classList.toggle('is-active', entry.isIntersecting);
    },
    { threshold: 0.3 }
  );
  transformObserver.observe(transformation);
}

// ── Footer sticky — cambia de color al entrar en sección Coco Heart ──────────
const footer    = document.getElementById('contact-footer');
const heartHero = document.getElementById('coco-heart-hero');

if (footer && heartHero) {
  const heartObserver = new IntersectionObserver(
    ([entry]) => {
      footer.classList.toggle('contact-footer--heart', entry.isIntersecting);
      footer.classList.toggle('contact-footer--coco',  !entry.isIntersecting);
    },
    { threshold: 0.01 }
  );
  heartObserver.observe(heartHero);
}
