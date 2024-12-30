const burger = document.querySelector(".burger");
const list = document.querySelector(".main-menu-list");
burger.addEventListener("click", function () {
  list.classList.toggle("active");
});
