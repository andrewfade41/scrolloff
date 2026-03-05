document.addEventListener('DOMContentLoaded', () => {
    // Reveal Animations on Scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
    
    // Trigger initial reveals for hero section
    setTimeout(() => {
        revealElements.forEach(el => {
            if(el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add('active');
            }
        });
    }, 100);

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3D Tilt Effect on Mockup
    const tiltCard = document.querySelector('.tilt-effect');
    if (tiltCard) {
        document.addEventListener('mousemove', (e) => {
            // Only apply tilt if it's in the viewport
            const rect = tiltCard.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
                tiltCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            }
        });
        
        // Reset tilt when mouse leaves window
        document.addEventListener('mouseleave', () => {
            tiltCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });
    }
});
