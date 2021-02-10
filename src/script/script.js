// Side Menu

let openBurgerBtn = document.querySelector(".nav__burger-icon");
let sideMenu = document.querySelector(".nav__wrapper");
let hero = document.querySelector(".hero");
let closeBurgerBtn = document.querySelector(".nav__close-btn");

closeBurgerBtn.addEventListener("click", () => {
  sideMenu.classList.remove("open");
});

openBurgerBtn.addEventListener("click", () => {
  sideMenu.classList.add("open");
});

hero.addEventListener("click", (e) => {
  sideMenu.classList.remove("open");
});
