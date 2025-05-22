// Contact form functionality
export function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Validate form
      if (validateForm(name, email, subject, message)) {
        // Here you would typically send the form data to a server
        // For this demo, we'll just show a success message
        showNotification('Your message has been sent successfully!', 'success');
        
        // Reset form
        contactForm.reset();
      }
    });
  }
}

// Validate form fields
function validateForm(name, email, subject, message) {
  // Check if all fields are filled
  if (!name || !email || !subject || !message) {
    showNotification('Please fill in all fields', 'error');
    return false;
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showNotification('Please enter a valid email address', 'error');
    return false;
  }
  
  return true;
}

// Show notification
function showNotification(message, type) {
  // Check if notification container exists, if not create it
  let notificationContainer = document.querySelector('.notification-container');
  
  if (!notificationContainer) {
    notificationContainer = document.createElement('div');
    notificationContainer.className = 'notification-container';
    document.body.appendChild(notificationContainer);
    
    // Style the notification container
    notificationContainer.style.position = 'fixed';
    notificationContainer.style.top = '20px';
    notificationContainer.style.right = '20px';
    notificationContainer.style.zIndex = '1000';
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  // Style the notification
  notification.style.backgroundColor = type === 'success' ? '#28a745' : '#dc3545';
  notification.style.color = '#fff';
  notification.style.padding = '15px 20px';
  notification.style.borderRadius = '5px';
  notification.style.marginBottom = '10px';
  notification.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  notification.style.opacity = '0';
  notification.style.transform = 'translateY(-20px)';
  notification.style.transition = 'all 0.3s ease';
  
  // Add notification to container
  notificationContainer.appendChild(notification);
  
  // Show notification with animation
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateY(0)';
  }, 10);
  
  // Remove notification after 5 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(-20px)';
    
    // Remove from DOM after animation completes
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 5000);
}