const menu = document.querySelector("#menu");
const toggle_btn = document.querySelector("#toggle-menu");

toggle_btn.addEventListener("click", () => {
  menu.classList.toggle("invisible");
});
