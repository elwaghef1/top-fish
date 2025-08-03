/*
 * Simplified Animations for Top Fish Trade
 * 
 * Only button and grid animations as requested
 */

class SimpleAnimationController {
  constructor() {
    this.init();
  }

  init() {
    this.enhanceButtons();
    this.enhanceGrids();
  }

  // Enhanced Button Effects
  enhanceButtons() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.classList.add('btn-enhanced', 'btn-ripple');
      
      // Add ripple effect on click
      button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
        `;
        
        button.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }

  // Enhanced Grid Effects
  enhanceGrids() {
    // Service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
      card.classList.add('grid-card');
    });

    // Product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
      card.classList.add('grid-card');
    });

    // Gallery images
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    galleryImages.forEach(img => {
      img.classList.add('grid-item-animation');
    });

    // Generic cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.classList.add('grid-card');
    });
  }
}

// Initialize simplified animation controller when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const animationController = new SimpleAnimationController();
  
  // Make controller globally available for manual control
  window.animationController = animationController;
});

// Simple utility functions
const SimpleAnimationUtils = {
  // Add hover animation to element
  addHoverAnimation(element) {
    element.classList.add('grid-item-animation');
  },
  
  // Add button enhancement
  enhanceButton(button) {
    button.classList.add('btn-enhanced', 'btn-ripple');
  }
};

// Export for use in other scripts
window.SimpleAnimationUtils = SimpleAnimationUtils;