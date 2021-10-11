// Toggle between showing and hiding the navigation menu when the user click
//  on the hamburger menu icon
const links = document.getElementById("links");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

function showHide() {
  if (links.style.display === "block") {
    links.style.display = "none";
    main.style.opacity = 1;
    footer.style.opacity = 1;
  } else {
    links.style.display = "block";
    main.style.opacity = 0.2;
    footer.style.opacity = 0.2;
  }
}
