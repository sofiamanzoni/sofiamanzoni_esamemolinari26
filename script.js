document.addEventListener("DOMContentLoaded", () => {

  /* carosello infinito */
  const track = document.querySelector(".carousel-track");
  const images = Array.from(track.children);

  // Duplica le immagini per creare loop infinito
  images.forEach(img => {
    const clone = img.cloneNode(true);
    track.appendChild(clone);
  });

  let position = 0;
  const speed = 2;

  function animateCarousel() {
    position -= speed;

    if (Math.abs(position) >= track.scrollWidth / 2) {
      position = 0;
    }

    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animateCarousel);
  }

  animateCarousel();

  /* elementi */
  const navbar = document.querySelector(".navbar");
  const progressBar = document.querySelector(".scroll-progress");
  const backToTop = document.getElementById("backToTop");

  /* effetto scroll */
  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / pageHeight) * 100;

    // Barra progresso
    progressBar.style.width = scrolled + "%";

    // Navbar effetto scrolled
    navbar.classList.toggle("scrolled", scrollTop > 50);

    // Bottone back-to-top
    backToTop.classList.toggle("show", scrollTop > 300);
  });

  /* back to top click */
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

});