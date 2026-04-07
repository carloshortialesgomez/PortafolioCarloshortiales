// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navUl = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('open');
  menuToggle.innerHTML = navUl.classList.contains('open')
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu on link click
navUl.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navUl.classList.remove('open');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 64;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Animate skill bars on scroll
const animateBars = () => {
  document.querySelectorAll('.bar-fill').forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      bar.style.width = bar.style.width || bar.getAttribute('style').match(/width:([^;]+)/)?.[1] || '0%';
    }
  });
};

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      if (entry.target.classList.contains('skill-bar-item')) {
        const bar = entry.target.querySelector('.bar-fill');
        if (bar) {
          const target = bar.getAttribute('data-width') || bar.style.width;
          bar.style.width = target;
        }
      }
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Observe timeline cards
document.querySelectorAll('.timeline-card, .featured-card, .tech-category, .contact-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Add visible class logic
const visibilityObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      visibilityObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-card, .featured-card, .tech-category, .contact-card').forEach(el => {
  visibilityObserver.observe(el);
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul li a');

const highlightNav = () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${id}`) {
          link.style.color = 'var(--text-primary)';
        }
      });
    }
  });
};

window.addEventListener('scroll', highlightNav);
window.addEventListener('scroll', animateBars);
