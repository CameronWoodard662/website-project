const slideMenus = document.querySelector(".slide-menus");
const menuLinks = document.querySelector("#slide-links");

slideMenus.addEventListener("click", () => {
  console.log(menuLinks);
  menuLinks.classList.toggle("hidden");
  menuLinks.classList.toggle("visible");
});
