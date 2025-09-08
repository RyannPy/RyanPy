const menuButton = document.getElementById("menu-button");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container"); // konten utama

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("is-active"); // animasi hamburger
  sidebar.classList.toggle("active");       // sidebar slide
  container.classList.toggle("blur");         // blur konten
});
