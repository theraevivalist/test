"use strict";

// Get all sections and nav links
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".nav-link");

// Function to remove .active from all nav links
function clearActiveLinks() {
  navLinks.forEach((link) => link.classList.remove("active"));
}

// Function to set active link based on current section
function setActiveLink() {
  let index = sections.length;

  while (--index >= 0 && window.scrollY + 100 < sections[index].offsetTop) {}

  clearActiveLinks();
  if (navLinks[index]) navLinks[index].classList.add("active");
}

// Call on scroll
window.addEventListener("scroll", setActiveLink);

// Also allow clicking nav to manually set active (if scroll behavior is smooth)
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    clearActiveLinks();
    this.classList.add("active");
  });
});

// Run on page load
setActiveLink();

window.addEventListener("scroll", () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
});

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("touchend", () => {
    link.blur();
  });
  link.addEventListener("click", () => {
    link.blur();
  });
});
