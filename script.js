const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".hero-nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
const identityCards = document.querySelectorAll(".identity-card");

identityCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.15}s`;
});