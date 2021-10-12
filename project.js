// Toggle between showing and hiding the navigation menu when the user click
//  on the hamburger menu icon
const links = document.getElementById("links");
const wrapper = document.querySelector(".wrapper");
const footer = document.querySelector("footer");

function showHide() {
  if (links.style.display === "block") {
    links.style.display = "none";
    wrapper.style.opacity = 1;
    footer.style.opacity = 1;
  } else {
    links.style.display = "block";
    wrapper.style.opacity = 0.2;
    footer.style.opacity = 0.2;
  }
}
