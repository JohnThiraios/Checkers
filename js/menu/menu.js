let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");
let hidden = document.querySelector(".hidden");
let menuItem = document.querySelectorAll(".menu-item");

toggle.onclick = () => {
  menu.classList.toggle("active");
  toggle.dispatchEvent(new Event("change"));
};

toggle.addEventListener("change", () => {
  menuItem.forEach((menuItem) => {
    menuItem.classList.toggle("hidden");
  });
});
