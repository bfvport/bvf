// Animations for BFV Website

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    // Observe service cards
    document.querySelectorAll('.service-card, .pricing-card, .value-card, .team-member').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
    
    // Observe product details
    document.querySelectorAll('.product-detail').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
    
    // Observe stats
    document.querySelectorAll('.stat').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
    
    // Observe FAQ items
    document.querySelectorAll('.faq-item').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', function() {
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroBg.style.transform = `translateY(${rate}px)`;
    }
});

// Typing effect for hero text (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect on hero title
// document.addEventListener('DOMContentLoaded', function() {
//     const heroTitle = document.querySelector('.hero h1');
//     if (heroTitle) {
//         const text = heroTitle.textContent;
//         typeWriter(heroTitle, text, 80);
//     }
// });