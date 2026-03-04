document.addEventListener("DOMContentLoaded", setup);

function setup() {
    console.log("dom carico");
}

const track = document.querySelector('.carousel-track');
const imgs = Array.from(track.children);

// Duplica le immagini per il loop infinito
imgs.forEach(img => {
  const clone = img.cloneNode(true);
  track.appendChild(clone);
});

let position = 0;
let speed = 2; // Aumenta questo numero per velocità maggiore

function animateCarousel() {
  position -= speed; // scorre verso sinistra
  if (Math.abs(position) >= track.scrollWidth / 2) {
    position = 0; // reset loop infinito
  }
  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animateCarousel);
}

animateCarousel();

window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / height) * 100;
  document.querySelector(".scroll-progress").style.width = scrolled + "%";
});

const backToTop = document.getElementById("backToTop");

// Mostra la freccia dopo un po' di scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// Scrolla in alto quando clicchi
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});