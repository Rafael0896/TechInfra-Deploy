
  // Navbar scroll effect
  window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
  navbar.classList.add('scrolled');
} else {
  navbar.classList.remove('scrolled');
}
});

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

  // Accordion functionality
  function toggleAccordion(index) {
  const headers = document.querySelectorAll('.accordion-header');
  const contents = document.querySelectorAll('.accordion-content');

  // Close all other accordions
  headers.forEach((header, i) => {
  if (i !== index) {
  header.classList.remove('active');
  contents[i].classList.remove('active');
}
});

  // Toggle current accordion
  headers[index].classList.toggle('active');
  contents[index].classList.toggle('active');
}

  // Intersection Observer for animations
  const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

  const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

  // Observe accordion items for scroll animations
  document.querySelectorAll('.accordion-item').forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(30px)';
  item.style.transition = 'all 0.6s ease';
  observer.observe(item);
});

  // Auto-close accordion when clicking outside
  document.addEventListener('click', function(e) {
  if (!e.target.closest('.accordion-item')) {
  document.querySelectorAll('.accordion-header').forEach(header => {
  header.classList.remove('active');
});
  document.querySelectorAll('.accordion-content').forEach(content => {
  content.classList.remove('active');
});
}
});

  // Prevent accordion auto-close when clicking inside
  document.querySelectorAll('.accordion-item').forEach(item => {
  item.addEventListener('click', function(e) {
    e.stopPropagation();
  });
});
