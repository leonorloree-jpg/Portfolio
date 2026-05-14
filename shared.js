/* ═══════════════════════════════════════════
   SHARED JS — Oliver Loree Portfolio
   ═══════════════════════════════════════════ */

// Scroll reveal
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  reveals.forEach(el => observer.observe(el));

  // Nav scroll shrink
  const nav = document.querySelector('nav.site-nav');
  if (nav) {
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50));
  }

  // Mobile nav
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const overlay = document.getElementById('navOverlay');

  function closeNav() {
    if (toggle) toggle.classList.remove('open');
    if (links) links.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.classList.toggle('open');
      if (links) links.classList.toggle('open', isOpen);
      if (overlay) overlay.classList.toggle('open', isOpen);
    });
  }
  if (overlay) overlay.addEventListener('click', closeNav);

  // Smooth scroll for hash links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        closeNav();
      }
    });
  });
});
