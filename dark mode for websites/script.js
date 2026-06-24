let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;
function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}