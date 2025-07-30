"use strict";

// Get sections and nav links
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".nav-link");

// Clear all .active classes
function clearActiveLinks() {
  navLinks.forEach((link) => link.classList.remove("active"));
}

// Set active nav link based on scroll position
function setActiveLink() {
  let index = sections.length;
  while (--index >= 0 && window.scrollY + 100 < sections[index].offsetTop) {}

  if (index >= 0 && navLinks[index]) {
    clearActiveLinks(); // Enforce single active
    navLinks[index].classList.add("active");
  }
}

// Handle click on nav links
// navLinks.forEach((link) => {
//   link.addEventListener("click", function () {
//     clearActiveLinks(); // Remove from all
//     this.classList.add("active"); // Add to clicked
//     this.blur(); // Remove focus glow on mobile
//   });

//   link.addEventListener("touchstart", function () {
//     this.blur(); // Remove focus on touch devices
//   });
// });

// Sync on scroll and page load
window.addEventListener("scroll", setActiveLink);
setActiveLink();

