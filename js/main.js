// PyCon Singapore 2026 - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80; // Account for fixed header
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile menu toggle (for future implementation)
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuButton && navMenu) {
        mobileMenuButton.addEventListener('click', function() {
            navMenu.classList.toggle('mobile-open');
            this.classList.toggle('active');
        });
    }
    
    // Header scroll effect
    const header = document.querySelector('nav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Form validation for speaker submission (placeholder)
    const speakerForm = document.querySelector('#speaker-form');
    
    if (speakerForm) {
        speakerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = this.querySelector('input[name="name"]');
            const email = this.querySelector('input[name="email"]');
            const topic = this.querySelector('input[name="topic"]');
            
            if (!name.value.trim() || !email.value.trim() || !topic.value.trim()) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Success message (placeholder)
            alert('Thank you for your speaker submission! We will review your proposal and get back to you soon.');
            this.reset();
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe sections for animations
    const sections = document.querySelectorAll('section, .hero-content');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Loading state management
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // Console welcome message
    console.log(`
    🐍 Welcome to PyCon Singapore 2026! 🇸🇬
    
    Interested in contributing? Check out our CONTRIBUTING.md file!
    Repository: https://github.com/pythonsingapore/pycon-2026
    
    Built with ❤️ by the Python Singapore community
    `);
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        debounce
    };
}