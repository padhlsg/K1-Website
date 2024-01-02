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

function myFunction() {
  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
// End Fixed Navbar
