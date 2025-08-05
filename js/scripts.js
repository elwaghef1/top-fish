/*
 * Common JavaScript for the AFCO‑inspired demo site
 *
 * Handles initialising scroll animations (AOS), the mobile
 * navigation toggle and accordion interactions used on the
 * technologies section of the products page.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialise AOS animations if library is loaded
  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: true
    });
  }

  // Mobile navigation toggle - SIMPLE VERSION
  const toggle = document.querySelector('.toggle');
  const nav = document.querySelector('nav');
  
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      
      // Change icon
      if (nav.classList.contains('active')) {
        toggle.innerHTML = '<i class="fa-solid fa-times"></i>';
      } else {
        toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('active');
        toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }

  // Accordion functionality for technologies section
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('active');
    });
  });
});