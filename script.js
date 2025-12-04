// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Smooth close menu after click on mobile
navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Contact form (demo only)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    statusEl.textContent = `Thanks, ${name || 'friend'} — your message has been recorded (demo).`;
    form.reset();
  });
}

// Promotional Material Carousel
const promoTrack = document.getElementById('promoTrack');
const promoArrowLeft = document.getElementById('promoArrowLeft');
const promoArrowRight = document.getElementById('promoArrowRight');
const promoDotsContainer = document.getElementById('promoDots');

if (promoTrack && promoArrowLeft && promoArrowRight) {
  const promoCards = Array.from(promoTrack.children);
  const totalCards = promoCards.length;
  const cardsPerPage = 3;
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  let currentPage = 0;

  // Create pagination dots
  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement('button');
    dot.classList.add('promo-dot');
    dot.setAttribute('aria-label', `Go to page ${i + 1}`);
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToPage(i));
    promoDotsContainer.appendChild(dot);
  }

  const dots = promoDotsContainer.querySelectorAll('.promo-dot');

  function updateCarousel() {
    const offset = currentPage * 100;
    promoTrack.style.transform = `translateX(-${offset}%)`;
    
    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentPage);
    });
    
    // Update arrow states
    promoArrowLeft.disabled = currentPage === 0;
    promoArrowRight.disabled = currentPage === totalPages - 1;
  }

  function goToPage(page) {
    currentPage = Math.max(0, Math.min(page, totalPages - 1));
    updateCarousel();
  }

  promoArrowLeft.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      updateCarousel();
    }
  });

  promoArrowRight.addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      updateCarousel();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      promoArrowLeft.click();
    } else if (e.key === 'ArrowRight') {
      promoArrowRight.click();
    }
  });

  // Initialize
  updateCarousel();
}


