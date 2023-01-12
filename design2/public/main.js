const menu = document.querySelector("#menu");
const menu_toggle = document.querySelector("#toggle-menu");

menu_toggle.addEventListener("click", () => {
  menu.classList.toggle("translate-x-[100%]");
});
