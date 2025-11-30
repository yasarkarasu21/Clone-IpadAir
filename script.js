document.addEventListener('DOMContentLoaded', () => {
    
    // --- Global Mobile Menu ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
                document.body.style.overflow = '';
            }
        });
    }

    // --- Local Nav Mobile Menu ---
    const localMenuBtn = document.getElementById('localMenuBtn');
    const localMenu = document.getElementById('localMenu');
    const localNav = document.getElementById('localNav');

    if (localMenuBtn && localMenu) {
        localMenuBtn.addEventListener('click', () => {
            localMenu.classList.toggle('open');
            const icon = localMenuBtn.querySelector('i');
            // Rotate icon
            if (localMenu.classList.contains('open')) {
                icon.style.transform = 'rotate(180deg)';
                localNav.style.backgroundColor = '#fff';
            } else {
                icon.style.transform = 'rotate(0deg)';
                localNav.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            }
        });
    }

    // --- Highlights Slider ---
    // Expose function to global scope for HTML onclick attribute
    window.scrollHighlights = function(direction) {
        const track = document.getElementById('highlightsTrack');
        if (track) {
            const scrollAmount = 400;
            if (direction === 1) {
                track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            } else {
                track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        }
    };

    // --- Size Selector ---
    window.switchSize = function(size) {
        const img11 = document.getElementById('sizeImg11');
        const img13 = document.getElementById('sizeImg13');
        const btn11 = document.getElementById('btn11');
        const btn13 = document.getElementById('btn13');

        if (size === '11') {
            img13.classList.remove('active');
            img11.classList.add('active');
            
            btn13.classList.remove('active');
            btn11.classList.add('active');
        } else {
            img11.classList.remove('active');
            img13.classList.add('active');
            
            btn11.classList.remove('active');
            btn13.classList.add('active');
        }
    };

    // --- Scroll Effects ---
    // Simple scroll effect for nav blur
    window.addEventListener('scroll', () => {
        if (localNav) {
            if (window.scrollY > 0) {
                localNav.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                localNav.style.backdropFilter = 'blur(20px)';
            } else {
                localNav.style.backgroundColor = '#fff';
                localNav.style.backdropFilter = 'none';
            }
        }
    });

    // --- Autoplay Video Fallback ---
    // Ensure videos play if possible
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Autoplay prevented by browser policy. User interaction needed.");
                // Add controls if autoplay fails so user can play manually
                video.controls = true; 
            });
        }
    });
});