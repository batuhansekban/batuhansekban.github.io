const menuButton = document.querySelector(".creative__logo");
const invisible = document.querySelector(".navbar__nav--mobile");
const creative = document.querySelector(".creative");
const arrow = document.querySelector(".creative__arrow");
let menu = menuButton.addEventListener("click", function () {
  if (invisible.style.display === "block") {
    invisible.style.display = "none";
    creative.style.display = "block";
    arrow.style.display = "block";
  } else {
    invisible.style.display = "block";
    creative.style.display = "none";
    arrow.style.display = "none";
  }
});
