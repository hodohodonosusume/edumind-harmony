// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const navLinks = navbar.querySelectorAll('a');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
        navLinks.forEach(link => {
            link.classList.remove('text-white');
            link.classList.add('text-gray-800');
        });
    } else {
        navbar.classList.remove('navbar-scrolled');
        navLinks.forEach(link => {
            link.classList.add('text-white');
            link.classList.remove('text-gray-800');
        });
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            mobileMenu.classList.add('hidden');
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// FAQ accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('i');

        content.classList.toggle('active');
        icon.classList.toggle('transform');
        icon.classList.toggle('rotate-180');

        if (content.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = 0;
        }
    });
});

// Form validation
const contactForm = document.querySelector('#contact form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simple form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (name && email && subject && message) {
            // Form submission logic would go here
            alert('お問い合わせありがとうございます！折り返しご連絡いたします。');
            contactForm.reset();
        }
    });
}