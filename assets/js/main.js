const revealElements = document.querySelectorAll('[data-reveal]');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealElements.forEach((element, idx) => {
  element.style.transitionDelay = `${Math.min(idx * 55, 260)}ms`;
  revealObserver.observe(element);
});
