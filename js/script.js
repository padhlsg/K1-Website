const toggleButton = document.getElementById("toggleButton");
const navMenu = document.getElementById("navMenu");

toggleButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Enc Toggle button

// Fixed Navbar
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".menu-navbar");
  navbar.classList.toggle("sticky", window.scrollY > 50);
});
