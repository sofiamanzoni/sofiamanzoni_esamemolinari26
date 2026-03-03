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