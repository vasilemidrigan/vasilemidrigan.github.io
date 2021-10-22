// Toggle between showing and hiding the navigation menu when the user click
//  on the hamburger menu icon
const links = document.getElementById("links");

function showHide() {
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}

const hamburgerMenu = document.getElementById("hamburger-menu");

function hamburgerAnimation() {
  hamburgerMenu.classList.toggle("active");
}
