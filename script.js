// Smooth scroll navigation
document.querySelectorAll('.nav-links a, .btn-primary, .btn-outline').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const hash = this.getAttribute('href');

        if (hash && hash !== '#' && hash.startsWith('#') && hash.length > 1) {
            const target = document.querySelector(hash);

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: 'smooth'
                });

                history.pushState(null, null, hash);
            }
        }
    });
});

// Contact form handler
const contactForm = document.getElementById('demoForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        alert('✓ Message sent! I will get back to you within 24 hours.');

        contactForm.reset();
    });
}

console.log('✓ Portfolio loaded with fixed local images');