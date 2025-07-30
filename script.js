"use strict";

// Grab nav links and sections
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section");

// Clear all active classes
function clearActiveLinks() {
  document.querySelectorAll(".nav-link.active").forEach(link => {
    link.classList.remove("active");
  });
}

// Set active link on scroll
function setActiveLink() {
  let fromTop = window.scrollY + 150;

  let currentSection = [...sections].find((section) =>
    fromTop >= section.offsetTop && fromTop < section.offsetTop + section.offsetHeight
  );

  if (currentSection) {
    let id = currentSection.getAttribute("id");
    let targetLink = document.querySelector(`.nav-link[href="#${id}"]`);
    if (targetLink) {
      clearActiveLinks();
      targetLink.classList.add("active");
    }
  }
}

// Handle manual clicks
navLinks.forEach(link => {
  link.addEventListener("click", function () {
    clearActiveLinks();
    this.classList.add("active");
    this.blur();
  });

  link.addEventListener("touchstart", function () {
    this.blur();
  });
});

// On scroll and load
window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);
