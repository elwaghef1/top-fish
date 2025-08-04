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
  const nav = document.querySelector('nav');
  const navMenu = document.querySelector('nav ul');
  
  if (toggle && nav && navMenu) {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      nav.classList.toggle('active');
      navMenu.classList.toggle('show');
      toggle.classList.toggle('active');
      
      // Toggle hamburger animation
      if (nav.classList.contains('active')) {
        toggle.innerHTML = '<i class="fa-solid fa-times"></i>';
      } else {
        toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        navMenu.classList.remove('show');
        toggle.classList.remove('active');
        toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('active');
        navMenu.classList.remove('show');
        toggle.classList.remove('active');
        toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
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