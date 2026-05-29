/* ═══════════════════════════════════════
   COCO PORTFOLIO — Vanilla JS
═══════════════════════════════════════ */

// ── Scroll Reveal ────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { rootMargin: '-80px 0px', threshold: 0.1 }
);

document.querySelectorAll('.reveal, .reveal-heart').forEach((el) => {
  revealObserver.observe(el);
});

// ── Transformation section ───────────
const transformation = document.getElementById('transformacion');

const transformObserver = new IntersectionObserver(
  ([entry]) => {
    transformation.classList.toggle('is-active', entry.isIntersecting);
  },
  { threshold: 0.3 }
);

if (transformation) transformObserver.observe(transformation);

// ── Bento cards staggered rotation ──
document.querySelectorAll('.bento-card').forEach((card) => {
  const rotateObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        card.classList.add('is-visible');
        rotateObserver.unobserve(card);
      }
    },
    { rootMargin: '-50px 0px', threshold: 0.1 }
  );
  rotateObserver.observe(card);
});

// ── Sticky footer color switch ───────
const footer    = document.getElementById('contact-footer');
const heartHero = document.getElementById('coco-heart-hero');

if (footer && heartHero) {
  const footerObserver = new IntersectionObserver(
    ([entry]) => {
      footer.classList.toggle('contact-footer--heart', entry.isIntersecting);
      footer.classList.toggle('contact-footer--coco',  !entry.isIntersecting);
    },
    { rootMargin: '0px 0px -100% 0px', threshold: 0 }
  );

  // Watch when heart section enters the viewport from above
  const heartObserver = new IntersectionObserver(
    ([entry]) => {
      footer.classList.toggle('contact-footer--heart', entry.isIntersecting);
      footer.classList.toggle('contact-footer--coco',  !entry.isIntersecting);
    },
    { threshold: 0.01 }
  );

  heartObserver.observe(heartHero);
}
