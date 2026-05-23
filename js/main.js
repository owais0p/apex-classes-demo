document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // STICKY HEADER & SCROLL EFFECTS
  // ==========================================
  const header = document.querySelector('.main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ==========================================
  // MOBILE NAVIGATION DRAWER
  // ==========================================
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });

    // Close menu on nav link clicks
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // ==========================================
  // ACTIVE NAVIGATION LINK HIGHLIGHTING
  // ==========================================
  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === pageName) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // ==========================================
  // WHATSAPP WIDGET REDIRECT
  // ==========================================
  const whatsappWidget = document.querySelector('.whatsapp-widget');
  if (whatsappWidget) {
    whatsappWidget.addEventListener('click', () => {
      const phoneNumber = '919876543210'; // Representative WhatsApp Business number
      const message = encodeURIComponent('Hello Apex Classes Kota, I would like to inquire about admission for IIT JEE / NEET courses.');
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    });
  }

  // ==========================================
  // GOOGLE MAPS PLACEHOLDER LOADER
  // ==========================================
  const mapContainer = document.querySelector('.map-placeholder');
  if (mapContainer) {
    mapContainer.addEventListener('click', () => {
      // Kota center coordinates or generic location (e.g. Landmark City, Kota)
      // Allen-like area: Landmark City, Kunhari, Kota, Rajasthan
      const mapIframe = document.createElement('iframe');
      mapIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1706692552914!2d75.8080753761066!3d25.231201977688537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f9b4224c6efab%3A0xe54e2fcf27ff4b8!2sLandmark%20City%20Kunhari%20Kota%20Rajasthan!5e0!3m2!1sen!2sin!4v1716584284192!5m2!1sen!2sin';
      mapIframe.width = '100%';
      mapIframe.height = '100%';
      mapIframe.style.border = '0';
      mapIframe.allowFullscreen = true;
      mapIframe.loading = 'lazy';
      mapIframe.referrerPolicy = 'no-referrer-when-downgrade';

      mapContainer.innerHTML = '';
      mapContainer.appendChild(mapIframe);
    });
  }

  // ==========================================
  // INQUIRY FORM SUBMISSION / VALIDATION
  // ==========================================
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simple validation
      let isValid = true;
      const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = 'var(--danger)';
        } else {
          input.style.borderColor = 'var(--bg-gray)';
        }
      });

      if (isValid) {
        // Show success visual response
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.style.backgroundColor = 'var(--success)';
        submitBtn.innerHTML = 'Submitted Successfully! ✓';
        
        form.reset();

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.style.backgroundColor = '';
          submitBtn.innerHTML = originalText;
        }, 3000);
      }
    });
  });
});
