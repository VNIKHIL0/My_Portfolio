document.addEventListener('DOMContentLoaded', () => {
  // === Scroll animations ===
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('project-card')) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
        if (entry.target.classList.contains('education-card')) {
          entry.target.classList.add('visible');
        }
      } else {
        if (entry.target.classList.contains('project-card')) {
          entry.target.classList.remove('opacity-100', 'translate-y-0');
          entry.target.classList.add('opacity-0', 'translate-y-10');
        }
        if (entry.target.classList.contains('education-card')) {
          entry.target.classList.remove('visible');
        }
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.project-card, .education-card').forEach(card => {
    observer.observe(card);
  });

  // === Certificate preview lightbox ===
  const certCards = document.querySelectorAll('.cert-item');
  const certImages = document.querySelectorAll('.cert-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  let currentIndex = 0;

  certCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      currentIndex = index;
      showImage();
    });
  });

  function showImage() {
    lightbox.style.display = 'flex';
    lightboxImg.src = certImages[currentIndex].src;
  }

  window.changeImage = function(n) {
    currentIndex = (currentIndex + n + certImages.length) % certImages.length;
    showImage();
  }

  window.closeLightbox = function() {
    lightbox.style.display = 'none';
  }
});
