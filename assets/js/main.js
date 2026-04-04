// Intersection Observer for fade-in animations on scroll
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in sections
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    fadeInSections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Scroll to sections with keyboard shortcuts
    const shortcuts = {
        's': '#skills',
        'c': '#career',
        'h': '#hobbies',
        'o': '#contact'
    };

    if (shortcuts[e.key]) {
        const target = document.querySelector(shortcuts[e.key]);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
});

// Analytics tracking (optional - remove if not needed)
console.log('Profile page loaded successfully');
