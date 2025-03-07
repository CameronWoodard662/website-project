const menuButton = document.querySelector("#menu-button");
const menuLinks = document.querySelector("#menu-container");

menuButton.addEventListener("click", () => {
  console.log(menuLinks);
  menuLinks.classList.toggle("hidden");
  menuLinks.classList.toggle("visible");
});
