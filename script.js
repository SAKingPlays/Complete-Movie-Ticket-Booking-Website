document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('.nav-links a, .hero a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animations on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.movie-card').forEach(card => {
        observer.observe(card);
    });

    // Particle animation for hero (premium effect)
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.background = 'white';
            particle.style.borderRadius = '50%';
            particle.style.opacity = Math.random();
            particle.style.width = `${Math.random() * 3}px`;
            particle.style.height = particle.style.width;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animation = `float ${Math.random() * 10 + 5}s infinite linear`;
            particlesContainer.appendChild(particle);
        }
    }

    // Modal handling
    const signupModal = document.getElementById('signupModal');
    const signinModal = document.getElementById('signinModal');
    const signupLink = document.querySelector('.signup-link');
    const signinLink = document.querySelector('.signin-link');
    const closeSignup = document.querySelector('.close-signup');
    const closeSignin = document.querySelector('.close-signin');

    signupLink.addEventListener('click', (e) => {
        e.preventDefault();
        signupModal.style.display = 'block';
    });

    signinLink.addEventListener('click', (e) => {
        e.preventDefault();
        signinModal.style.display = 'block';
    });

    closeSignup.addEventListener('click', () => {
        signupModal.style.display = 'none';
    });

    closeSignin.addEventListener('click', () => {
        signinModal.style.display = 'none';
    });

    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target === signupModal) {
            signupModal.style.display = 'none';
        }
        if (e.target === signinModal) {
            signinModal.style.display = 'none';
        }
    });

    // Switch between modals
    document.querySelector('.switch-to-signin').addEventListener('click', (e) => {
        e.preventDefault();
        signupModal.style.display = 'none';
        signinModal.style.display = 'block';
    });

    document.querySelector('.switch-to-signup').addEventListener('click', (e) => {
        e.preventDefault();
        signinModal.style.display = 'none';
        signupModal.style.display = 'block';
    });

    // Contact form submit
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (name && email && subject && message && message.length > 10) {
                alert(`Thank you, ${name}! Your message has been sent. We'll respond to ${email} soon.`);
                this.reset();
            } else {
                alert('Please fill out all fields correctly. Message should be at least 10 characters.');
            }
        });
    }

    // Sign In form submit
    const signinForm = document.getElementById('signinForm');
    if (signinForm) {
        signinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('signin-email').value;
            const password = document.getElementById('signin-password').value;

            if (email && password && password.length >= 6) {
                alert(`Welcome back! Signed in as ${email}.`);
                signinModal.style.display = 'none';
                this.reset();
            } else {
                alert('Please enter valid credentials. Password must be at least 6 characters.');
            }
        });
    }

    // Sign Up form submit
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (name && email && password && confirmPassword && password === confirmPassword && password.length >= 6) {
                alert(`Account created for ${name}! You can now sign in.`);
                signupModal.style.display = 'none';
                signinModal.style.display = 'block';
                this.reset();
            } else {
                alert('Please fill out all fields correctly. Passwords must match and be at least 6 characters.');
            }
        });
    }

    // Book Now buttons
    document.querySelectorAll('.book-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const movie = btn.dataset.movie;
            alert(`Booking for ${movie} coming soon!`);
        });
    });

    // View Showtimes buttons
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const theater = btn.dataset.theater;
            alert(`Showtimes for ${theater} coming soon!`);
        });
    });
});

// Particle float animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
}
`;
document.head.appendChild(style);