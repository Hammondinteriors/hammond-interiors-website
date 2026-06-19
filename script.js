// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Logo click to scroll to top
const logoLink = document.getElementById('logoLink');
if (logoLink) {
    logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Close menu when link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && !e.target.closest('.nav-container')) {
        navMenu.classList.remove('active');
        if (navToggle) {
            navToggle.classList.remove('active');
        }
    }
});

// Navbar background on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    }
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const isExpanded = question.getAttribute('aria-expanded') === 'true';

        // Close all other answers
        faqQuestions.forEach(q => {
            if (q !== question) {
                q.setAttribute('aria-expanded', 'false');
                const nextElement = q.nextElementSibling;
                if (nextElement) {
                    nextElement.style.display = 'none';
                }
            }
        });

        // Toggle current answer
        question.setAttribute('aria-expanded', !isExpanded);
        const nextElement = question.nextElementSibling;
        if (nextElement) {
            nextElement.style.display = isExpanded ? 'none' : 'block';
        }
    });
});

// Gallery Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        // Filter gallery items
        galleryItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.classList.remove('hidden');
                item.style.animation = 'fadeInUp 0.6s ease-out';
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');

// Add click listeners to all gallery images
document.querySelectorAll('.gallery-image img').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close lightbox when close button is clicked
if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// Close lightbox when clicking outside the image
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Formspree handles form submission automatically via @formspree/ajax

// Custom Success Modal for Formspree
const successModal = document.getElementById('successModal');
const closeSuccessButton = document.getElementById('closeSuccessModal');
const contactForm = document.getElementById('contact-form');

if (closeSuccessButton) {
    closeSuccessButton.addEventListener('click', () => {
        successModal.classList.remove('active');
    });
}

// Close modal when clicking outside
if (successModal) {
    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) {
            successModal.classList.remove('active');
        }
    });
}

// Track form submission and show success modal
if (contactForm) {
    let lastFormState = contactForm.innerHTML;

    // Check every 500ms if form has been reset (indicating successful submission)
    const checkFormReset = setInterval(() => {
        const successDiv = document.querySelector('[data-fs-success]');

        // If success div is visible, show modal
        if (successDiv && successDiv.offsetParent !== null) {
            successModal.classList.add('active');
            clearInterval(checkFormReset);
            // Restart checking after modal closes
            setTimeout(() => {
                checkFormReset = setInterval(checkFormSubmission, 500);
            }, 5000);
        }
    }, 500);

    // Also listen for form reset event
    contactForm.addEventListener('reset', () => {
        // Small delay to let Formspree process
        setTimeout(() => {
            successModal.classList.add('active');
        }, 100);
    });
}

// Smooth scroll with offset for sticky navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (!target) return;

        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Lazy Loading Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Animate elements on scroll
if ('IntersectionObserver' in window) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe service cards, features, and other elements
    document.querySelectorAll('.service-card, .feature-card, .testimonial-card, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// Add touch device detection
const isTouchDevice = () => {
    return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
};

// Adjust for touch devices
if (isTouchDevice()) {
    document.body.classList.add('touch-device');
}

// Add keyboard navigation for service cards
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });
});

// Handle form input validation
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('blur', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !emailRegex.test(this.value)) {
            this.style.borderColor = '#ff6b6b';
        } else {
            this.style.borderColor = '';
        }
    });
}

// Phone input formatting for UK numbers
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            // UK phone number formatting
            // Keep it flexible: just add space after first 5 digits for readability
            if (value.length <= 5) {
                value = value;
            } else if (value.length <= 11) {
                value = value.slice(0, 5) + ' ' + value.slice(5);
            } else {
                value = value.slice(0, 11); // Max 11 digits for UK numbers
            }
        }
        e.target.value = value;
    });
}

// Detect scroll position for animations
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(() => {
        const scrollPos = window.scrollY;

        // Parallax effect for hero background
        const heroBg = document.querySelector('.hero');
        if (heroBg && scrollPos < window.innerHeight) {
            heroBg.style.backgroundPosition = '50% ' + (scrollPos * 0.5) + 'px';
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('Hammond Interiors website loaded');

    // Add loading complete indicator
    document.body.classList.add('loaded');
});
