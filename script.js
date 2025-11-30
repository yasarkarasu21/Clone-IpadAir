// Navbar Toggles
document.addEventListener('DOMContentLoaded', () => {
    // Global Mobile Menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if(mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('d-none');
            // Toggle icon
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('d-none')) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            }
        });
    }

    // Local Nav Mobile Menu
    const localMenuBtn = document.getElementById('localMenuBtn');
    const localMenu = document.getElementById('localMenu');
    const localMenuIcon = localMenuBtn ? localMenuBtn.querySelector('i') : null;

    if(localMenuBtn) {
        localMenuBtn.addEventListener('click', () => {
            localMenu.classList.toggle('d-none');
            localMenuIcon.style.transform = localMenu.classList.contains('d-none') ? 'rotate(0deg)' : 'rotate(180deg)';
            localMenuIcon.style.transition = 'transform 0.3s';
        });
    }
});

// Highlights Scroller
function scrollHighlights(direction) {
    const slider = document.getElementById('highlightsSlider');
    const scrollAmount = 400;
    if (direction === 'left') {
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

// Size Selector Switcher
function switchSize(size) {
    const img11 = document.getElementById('sizeImg11');
    const img13 = document.getElementById('sizeImg13');
    const btn11 = document.getElementById('btn11');
    const btn13 = document.getElementById('btn13');

    if (size === '11') {
        // Show 11
        img11.style.opacity = '1';
        img11.style.transform = 'scale(1)';
        img11.style.zIndex = '2';
        
        // Hide 13
        img13.style.opacity = '0';
        img13.style.transform = 'scale(0.95) translateX(20px)';
        img13.style.zIndex = '1';

        // Update Buttons
        btn11.classList.remove('btn-light');
        btn11.classList.add('btn-dark');
        btn13.classList.remove('btn-dark');
        btn13.classList.add('btn-light');
    } else {
        // Show 13
        img13.style.opacity = '1';
        img13.style.transform = 'scale(1)';
        img13.style.zIndex = '2';

        // Hide 11
        img11.style.opacity = '0';
        img11.style.transform = 'scale(0.95) translateX(-20px)';
        img11.style.zIndex = '1';

        // Update Buttons
        btn13.classList.remove('btn-light');
        btn13.classList.add('btn-dark');
        btn11.classList.remove('btn-dark');
        btn11.classList.add('btn-light');
    }
}

// Autoplay video fallback safety
const videos = document.querySelectorAll('video');
videos.forEach(video => {
    video.play().catch(e => {
        console.log("Autoplay blocked by browser policy, user interaction required.");
    });
});