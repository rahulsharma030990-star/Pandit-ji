const steps = document.querySelectorAll('.step');
steps.forEach((step) => {
  step.style.opacity = '0';
  step.style.transform = 'translateY(14px)';
  step.style.transition = 'opacity .5s ease, transform .5s ease';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

steps.forEach((step) => observer.observe(step));
