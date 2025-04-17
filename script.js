// Ambil container grid utama
const gridContainer = document.getElementById("grid-container");

// Array posisi objek (bisa disesuaikan berdasarkan desain pada content.png)
const objectPositions = [
  { col: 2, row: 1, colSpan: 2, rowSpan: 2 },
  { col: 5, row: 1, colSpan: 2, rowSpan: 2 },
  { col: 8, row: 1, colSpan: 2, rowSpan: 2 },
  { col: 3, row: 4, colSpan: 3, rowSpan: 2 },
  { col: 7, row: 4, colSpan: 3, rowSpan: 2 },
  { col: 5, row: 7, colSpan: 3, rowSpan: 2 },
];

// Tambahkan objek ke dalam grid
objectPositions.forEach((pos, index) => {
  const obj = document.createElement("div");
  obj.classList.add("object");
  obj.textContent = `Objek ${index + 1}`;
  obj.style.gridColumn = `${pos.col} / span ${pos.colSpan}`;
  obj.style.gridRow = `${pos.row} / span ${pos.rowSpan}`;
  gridContainer.appendChild(obj);
});


document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Animate hamburger to X
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.classList.toggle('change');
        });
    });
    
    // Form submission
    const form = document.getElementById('signup-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = form.querySelector('input[type="email"]').value;
            const password = form.querySelector('input[type="password"]').value;
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', { email, password });
            
            // Show success message
            alert('Thank you for signing up!');
            form.reset();
        });
    }
    
    // Add smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Responsive adjustments for shapes
    function adjustShapesForScreenSize() {
        const windowWidth = window.innerWidth;
        const heroContainer = document.querySelector('.hero-container');
        
        if (windowWidth < 1440) {
            // Calculate scale factor
            const scaleFactor = windowWidth / 1440;
            
            // Apply scale factor to container height
            if (heroContainer) {
                heroContainer.style.height = `${Math.max(700 * scaleFactor, 500)}px`;
            }
        } else {
            // Reset to original dimensions
            if (heroContainer) {
                heroContainer.style.height = '700px';
            }
        }
    }
    
    // Run on load and resize
    window.addEventListener('resize', adjustShapesForScreenSize);
    adjustShapesForScreenSize();
    
    // Add animation for elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .hero-content, .dark-hero-content, .cta-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();
});

// Add CSS for the animation
const style = document.createElement('style');
style.textContent = `
    .feature-card, .hero-content, .dark-hero-content, .cta-form {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .feature-card.animate, .hero-content.animate, .dark-hero-content.animate, .cta-form.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .bar.change:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .bar.change:nth-child(2) {
        opacity: 0;
    }
    
    .bar.change:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);