// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            navToggle.classList.toggle('active');
        });
    }

    // Initialize Hero Slider
    initHeroSlider();
});

// Hero Slider Functionality
function initHeroSlider() {
    const heroSlider = document.querySelector('.hero-slider');
    if (!heroSlider) return;

    const slides = heroSlider.querySelectorAll('.slide');
    const prevBtn = heroSlider.querySelector('.slider-prev');
    const nextBtn = heroSlider.querySelector('.slider-next');
    const dots = heroSlider.querySelectorAll('.slider-dots .dot');
    
    let currentSlide = 0;
    
    // Show first slide
    slides[0].classList.add('active');
    if (dots[0]) dots[0].classList.add('active');
    
    // Auto-advance slides
    setInterval(() => {
        nextSlide();
    }, 5000);
    
    // Previous button
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
        });
    }
    
    // Next button
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
        });
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
        currentSlide = index;
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    function goToSlide(index) {
        showSlide(index);
    }
    
    // Make functions globally available
    window.heroSliderNext = nextSlide;
    window.heroSliderPrev = prevSlide;
    window.heroSliderGoTo = goToSlide;
}

// Copy Account Number Function
function copyAccountNumber() {
    const accountNumber = '9030027830012';
    
    // Create temporary input element to copy text
    const tempInput = document.createElement('input');
    tempInput.value = accountNumber;
    document.body.appendChild(tempInput);
    
    // Select and copy the text
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand('copy');
    
    // Remove the temporary input
    document.body.removeChild(tempInput);
    
    // Show feedback
    showCopyFeedback();
}

// Show copy feedback
function showCopyFeedback() {
    // Create feedback element
    const feedback = document.createElement('div');
    feedback.textContent = 'Account number copied!';
    feedback.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.8);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Show feedback
    document.body.appendChild(feedback);
    
    // Remove feedback after 2 seconds
    setTimeout(() => {
        feedback.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => {
            document.body.removeChild(feedback);
            document.head.removeChild(style);
        }, 300);
    }, 2000);
}
