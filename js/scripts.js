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

  // Mobile navigation toggle
  const toggle = document.querySelector('.toggle');
  const navMenu = document.querySelector('nav ul');
  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
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