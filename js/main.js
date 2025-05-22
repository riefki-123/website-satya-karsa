// Import modules
import { servicesData } from './services.js';
import { galleryData } from './gallery.js';
import { initNavigation } from './navigation.js';
import { initLightbox } from './lightbox.js';
import { initContactForm } from './contact.js';

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize navigation
  initNavigation();
  
  // Load services
  loadServices();
  
  // Load gallery
  loadGallery();
  
  // Initialize lightbox
  initLightbox();
  
  // Initialize contact form
  initContactForm();
});

// Function to load services
function loadServices() {
  const servicesContainer = document.getElementById('services-container');
  
  // Clear any existing content
  servicesContainer.innerHTML = '';
  
  // Loop through services data and create cards
  servicesData.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.className = 'service-card';
    
    serviceCard.innerHTML = `
      <div class="service-image">
        <img src="${service.image}" alt="${service.title}">
      </div>
      <div class="service-content">
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </div>
    `;
    
    servicesContainer.appendChild(serviceCard);
  });
}

// Function to load gallery
function loadGallery() {
  const galleryContainer = document.getElementById('gallery-container');
  
  // Clear any existing content
  galleryContainer.innerHTML = '';
  
  // Loop through gallery data and create items
  galleryData.forEach(item => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.setAttribute('data-id', item.id);
    
    galleryItem.innerHTML = `
      <img src="${item.thumbnail}" alt="${item.title}">
      <div class="overlay">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
      <div class="view-btn">
        <i class="fas fa-search-plus"></i>
      </div>
    `;
    
    // Add click event to open lightbox
    galleryItem.addEventListener('click', () => {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      const lightboxCaption = document.getElementById('lightbox-caption');
      
      lightboxImg.src = item.fullImage || item.thumbnail;
      lightboxCaption.textContent = item.title;
      lightbox.style.display = 'block';
    });
    
    galleryContainer.appendChild(galleryItem);
  });
}