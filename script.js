const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".hero-nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
const identityCards = document.querySelectorAll(".identity-card");

identityCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.15}s`;
});
document.addEventListener('DOMContentLoaded', () => {
  const wrap = document.querySelector('.engine-circle-wrap');
  const rotor = document.querySelector('.engine-rotor');
  const innerEls = document.querySelectorAll('.engine-node-inner');

  if (!wrap || !rotor) return;

  // 1) Apply each node's image from its data-image attribute
  document.querySelectorAll('.engine-node').forEach((node) => {
    const src = node.getAttribute('data-image');
    const imgEl = node.querySelector('.engine-node-img');
    if (src && imgEl) {
      imgEl.style.backgroundImage = `url("${src}")`;
    }
  });

  // 2) Respect users who prefer reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const setSpinning = (running) => {
    const state = running ? 'running' : 'paused';
    rotor.style.animationPlayState = state;
    innerEls.forEach((el) => (el.style.animationPlayState = state));
  };

  if (prefersReduced) {
    setSpinning(false);
  }

  // 3) Optional: pause the spin on hover for readability
  wrap.addEventListener('mouseenter', () => setSpinning(false));
  wrap.addEventListener('mouseleave', () => {
    if (!prefersReduced) setSpinning(true);
  });

  // 4) Optional helper to change speed at runtime, e.g. setRotationSpeed(15)
  window.setRotationSpeed = (seconds) => {
    rotor.style.animationDuration = `${seconds}s`;
    innerEls.forEach((el) => (el.style.animationDuration = `${seconds}s`));
  };
});