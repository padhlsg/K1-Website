const toggleButton = document.getElementById("toggleButton");
const navMenu = document.getElementById("navMenu");

toggleButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Enc Toggle button

// Fixed Navbar
window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navMenu");
var sticky = navbar.offsetTop;
var homeSection = document.getElementById("home");

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
    homeSection.style.paddingTop = "100px";
  } else {
    navbar.classList.remove("sticky");
    homeSection.style.paddingTop = "0";
  }
}
// End Fixed Navbar
