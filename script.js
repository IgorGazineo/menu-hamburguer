const menu = document.querySelector(".menu-hamburguer");

const bar1 = document.querySelector(".hamburguer-bar1");
const bar2 = document.querySelector(".hamburguer-bar2");
const bar3 = document.querySelector(".hamburguer-bar3");

menu.addEventListener("click", () => {
  bar1.classList.toggle("bar1");
  bar1.classList.toggle("reset-border-radius");
  bar2.classList.toggle("bar2");
  bar3.classList.toggle("bar3");
  menu.classList.toggle("reset-border-radius");
});
