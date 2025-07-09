// Optional: add scroll reveal animation
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.card');
  const triggerBottom = window.innerHeight * 0.9;

  elements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < triggerBottom) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});
