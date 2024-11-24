document.addEventListener("DOMContentLoaded", function () {
    // Select all the .work:card elements
    const workCards = document.querySelectorAll('.work\\:card');  // Escape the colon

    // GSAP animation for staggered fade-in
    gsap.from(workCards, {
        opacity: 0,         // Start with opacity 0 (hidden)
        y: 30,              // Start 30px below the final position for a smooth upward movement
        duration: 1.5,      // Duration of the fade-in (slower fade)
        stagger: 0.4,       // Stagger the animation by 0.2s for each card
        ease: "power2.out"  // Ease for smooth animation
    });
});
