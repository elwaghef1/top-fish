/*
 * Lightbox functionality for the gallery pages
 *
 * This script enables a modal overlay that displays gallery images at
 * larger size. When an image in the gallery grid is clicked, the
 * lightbox opens and shows the clicked image. Navigation arrows and
 * keyboard events allow cycling through all images in the gallery,
 * and the overlay can be closed by clicking the close icon, the
 * background, or pressing the Escape key.
 */

document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = document.querySelectorAll('.gallery-grid img');
  const lightbox = document.getElementById('lightbox');
  // If no lightbox or gallery images are present, bail out.
  if (!lightbox || galleryImages.length === 0) return;

  const lightboxImg = lightbox.querySelector('img');
  const prevBtn = lightbox.querySelector('.prev');
  const nextBtn = lightbox.querySelector('.next');
  const closeBtn = lightbox.querySelector('.close');
  let currentIndex = 0;

  function updateLightbox() {
    const { src, alt } = galleryImages[currentIndex];
    lightboxImg.src = src;
    lightboxImg.alt = alt;
  }

  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.style.display = 'flex';
    // Prevent background scrolling while the lightbox is open
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateLightbox();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightbox();
  }

  // Attach click handlers to thumbnails
  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
  });

  // Navigation buttons
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  // Close the lightbox when clicking outside the image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation support
  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
      if (e.key === 'ArrowRight') {
        showNext();
      } else if (e.key === 'ArrowLeft') {
        showPrev();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    }
  });
});