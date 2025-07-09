// Smooth scroll for navbar links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
      });
    }
    // Close mobile menu after click
    document.getElementById('navLinks').classList.remove('active');
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
menuToggle.addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('active');
}); 