// Lightbox functionality
export function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const closeBtn = document.querySelector('.lightbox .close');
  
  // Close lightbox when the close button is clicked
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
  
  // Close lightbox when clicking outside the image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
  
  // Close lightbox with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'block') {
      lightbox.style.display = 'none';
    }
  });
}