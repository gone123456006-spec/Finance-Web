/* NAVBAR */
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  const hamburger = document.querySelector(".hamburger");
  const overlay = document.getElementById("menuOverlay");
  
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
  
  if (overlay) {
    overlay.classList.toggle("active");
  }
  
  // Prevent body scroll when menu is open
  if (navMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

// Close menu when clicking on a link
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      const navMenu = document.getElementById("navMenu");
      const hamburger = document.querySelector(".hamburger");
      const overlay = document.getElementById("menuOverlay");
      
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
        if (overlay) {
          overlay.classList.remove("active");
        }
        document.body.style.overflow = "";
      }
    });
  });
});

/* MODALS */
function openLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function openRegister() {
  document.getElementById("registerModal").style.display = "flex";
}

function switchModal(closeId, openId) {
  document.getElementById(closeId).style.display = "none";
  document.getElementById(openId).style.display = "flex";
}

window.onclick = e => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
};

/* IMAGE CAROUSEL */
let imageSlides = document.querySelectorAll(".carousel-slide");
let imageIndicators = document.querySelectorAll(".indicator");
let currentImageIndex = 0;

function showImage(index) {
  imageSlides.forEach(slide => slide.classList.remove("active"));
  imageIndicators.forEach(indicator => indicator.classList.remove("active"));
  
  if (imageSlides[index]) {
    imageSlides[index].classList.add("active");
  }
  if (imageIndicators[index]) {
    imageIndicators[index].classList.add("active");
  }
  
  currentImageIndex = index;
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % imageSlides.length;
  showImage(currentImageIndex);
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + imageSlides.length) % imageSlides.length;
  showImage(currentImageIndex);
}

function goToImage(index) {
  showImage(index);
}

// Auto-advance image carousel (same as slider - 4 seconds)
setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % imageSlides.length;
  showImage(currentImageIndex);
}, 4000);

showImage(0);

// ============= STATS COUNTER ANIMATION =============
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'));
  const suffix = element.getAttribute('data-suffix') || '';
  const duration = 2000; // 2 seconds
  const increment = target / (duration / 16); // 60fps
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      if (target > 1000) {
        element.textContent = Math.floor(current).toLocaleString() + suffix;
      } else {
        element.textContent = Math.floor(current) + suffix;
      }
      requestAnimationFrame(updateCounter);
    } else {
      if (target > 1000) {
        element.textContent = target.toLocaleString() + suffix;
      } else {
        element.textContent = target + suffix;
      }
    }
  };

  updateCounter();
}

// Intersection Observer for stats animation
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const numbers = entry.target.querySelectorAll('.stat-number');
      const progressBars = entry.target.querySelectorAll('.stat-progress-bar');
      
      // Animate numbers
      numbers.forEach(number => {
        animateCounter(number);
      });

      // Animate progress bars
      progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        setTimeout(() => {
          bar.style.width = progress + '%';
        }, 200);
      });

      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

// Observe stats section
const statsSection = document.querySelector('.finance-stats');
if (statsSection) {
  statsObserver.observe(statsSection);
}

/* CIRCULAR DIAGRAM TOGGLE */
document.addEventListener("DOMContentLoaded", function() {
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  const diagrams = document.querySelectorAll('.diagram-content');

  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const target = this.getAttribute('data-target');
      
      // Remove active class from all buttons
      toggleButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Hide all diagrams
      diagrams.forEach(diagram => diagram.classList.remove('active'));
      
      // Show target diagram
      const targetDiagram = document.getElementById(target + '-diagram');
      if (targetDiagram) {
        targetDiagram.classList.add('active');
      }
    });
  });
});

/* FAQ ACCORDION */
document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const icon = item.querySelector('.faq-icon');

    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all items
      faqItems.forEach(i => {
        i.classList.remove('open');
        const ic = i.querySelector('.faq-icon');
        if (ic) ic.textContent = '+';
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('open');
        if (icon) icon.textContent = '−';
      }
    });
  });
});

/* CONTACT "REQUEST A CALLBACK" → WHATSAPP */
function sendCallbackWhatsApp() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  const nameInput = form.querySelector('input[name="name"]');
  const emailInput = form.querySelector('input[name="email"]');
  const companyInput = form.querySelector('input[name="company"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  const name = nameInput ? nameInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : '';
  const company = companyInput ? companyInput.value.trim() : '';
  const message = messageInput ? messageInput.value.trim() : '';

  // basic required validation (same as HTML "required")
  if (!name || !email || !company) {
    alert('Please fill Name, Email and Company before requesting a callback.');
    return;
  }

  // Use config for phone number
  const phone = window.CONFIG ? window.CONFIG.whatsApp.callbackPhone : '919153832948';
  const messagePrefix = window.CONFIG ? window.CONFIG.whatsApp.messagePrefix : 'Callback request from Finvyce website';

  const rawText =
    messagePrefix + '\n\n' +
    'Name: ' + name + '\n' +
    'Email: ' + email + '\n' +
    'Company: ' + company + '\n' +
    'Message: ' + (message || 'N/A');

  const waUrl = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(rawText);

  // open in new tab/window so it works on both desktop (WhatsApp Web) and mobile
  window.open(waUrl, '_blank');
}

/* INITIALIZE CONTACT LINKS FROM CONFIG */
function initializeContactLinks() {
  if (!window.CONFIG) {
    console.warn('CONFIG not loaded. Using fallback values.');
    return;
  }

  const config = window.CONFIG.contact;

  // Contact Us section links
  const contactCallLink = document.getElementById('contactCallLink');
  const contactWhatsAppLink = document.getElementById('contactWhatsAppLink');
  const contactPhoneDisplay = document.getElementById('contactPhoneDisplay');
  const contactEmailDisplay = document.getElementById('contactEmailDisplay');
  const contactAddressDisplay = document.getElementById('contactAddressDisplay');

  if (contactCallLink) {
    contactCallLink.href = 'tel:+91' + config.primaryPhone;
  }
  if (contactWhatsAppLink) {
    contactWhatsAppLink.href = 'https://wa.me/91' + config.primaryPhone;
  }
  if (contactPhoneDisplay) {
    contactPhoneDisplay.textContent = '+91 ' + config.primaryPhone.replace(/(\d{5})(\d{5})/, '$1 $2');
  }
  if (contactEmailDisplay) {
    contactEmailDisplay.textContent = config.email;
  }
  if (contactAddressDisplay) {
    contactAddressDisplay.textContent = config.address;
  }

  // Floating action buttons
  const floatingCallLink = document.getElementById('floatingCallLink');
  const floatingWhatsAppLink = document.getElementById('floatingWhatsAppLink');

  if (floatingCallLink) {
    floatingCallLink.href = 'tel:+91' + config.floatingPhone;
  }
  if (floatingWhatsAppLink) {
    floatingWhatsAppLink.href = 'https://wa.me/91' + config.floatingPhone;
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
  initializeContactLinks();
  initializeValueChainToggle();
});

/* VALUE CHAIN TOGGLE */
function initializeValueChainToggle() {
  const toggleButtons = document.querySelectorAll('.value-toggle-btn');
  const contentTabs = document.querySelectorAll('.value-chain-content');

  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');

      // Remove active class from all buttons and content
      toggleButtons.forEach(btn => btn.classList.remove('active'));
      contentTabs.forEach(tab => tab.classList.remove('active'));

      // Add active class to clicked button and corresponding content
      this.classList.add('active');
      const targetTab = document.getElementById(targetId);
      if (targetTab) {
        targetTab.classList.add('active');
      }
    });
  });
}