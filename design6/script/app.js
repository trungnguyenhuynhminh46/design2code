const btnToggle = document.getElementById("burger");
const menu = document.getElementById("menu");

btnToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});
