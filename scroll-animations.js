document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate project cards
          if (entry.target.classList.contains('project-card')) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
  
          // Animate education timeline cards
          if (entry.target.classList.contains('education-card')) {
            entry.target.classList.add('visible');
          }
        } else {
          // Reset animation if you want to replay on scroll
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
  
    // Observe both project and education cards
    document.querySelectorAll('.project-card, .education-card').forEach(card => {
      observer.observe(card);
    });
  });
  