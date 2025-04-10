// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
});

// Close mobile navigation when clicking on a link
document.querySelectorAll('.nav-list ul li a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navList.classList.remove('active');
  });
});

// Sticky Header
window.addEventListener('scroll', () => {
  const header = document.querySelector('#header .header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// Smooth Scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Animation on Scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY + 200;
  
  sections.forEach(section => {
    if (scrollPosition > section.offsetTop && scrollPosition < (section.offsetTop + section.offsetHeight)) {
      const sectionId = section.getAttribute('id');
      const currentNavLink = document.querySelector(`.nav-list ul li a[href="#${sectionId}"]`);
      
      if (currentNavLink) {
        document.querySelectorAll('.nav-list ul li a').forEach(link => {
          link.classList.remove('active');
        });
        currentNavLink.classList.add('active');
      }
    }
  });
});