// NAVBAR
const menuButton = document.getElementById("menu-button");
const sidebar = document.querySelector(".sidebar");

const container = document.querySelector(".container"); // konten utama

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("is-active"); // animasi hamburger
  sidebar.classList.toggle("active");       // sidebar slide
  container.classList.toggle("blur");         // blur konten
});

// ANIMASI SCROLL
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.slide-left, .slide-right, .slide-top, .slide-bottom, .progress')
  .forEach(el => observer.observe(el));

