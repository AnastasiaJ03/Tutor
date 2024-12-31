const burger = document.querySelector(".burger");
const list = document.querySelector(".main-menu-list");
const nav = document.querySelector(".navbar");
burger.addEventListener("click", function () {
  list.classList.toggle("active");
});
document.addEventListener("scroll", (e) => {
  if (window.scrollY >= 100) {
    if (!nav.classList.contains("active")) {
      nav.classList.add("active");
    }
  } else {
    nav.classList.remove("active");
  }
});
