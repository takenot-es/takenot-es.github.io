// Ensure GSAP is loaded before this code runs
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class .display-1 and .animate-on
  const elements = document.querySelectorAll('.animate-on');

  elements.forEach(element => {
    // Split text into individual words
    const words = element.innerText.split(' ');

    // Clear the current text
    element.innerHTML = '';

    // Wrap each word in a <span> element
    words.forEach(word => {
      const wordSpan = document.createElement('span');
      wordSpan.textContent = word;
      element.appendChild(wordSpan);
      element.appendChild(document.createTextNode(' ')); // Add space between words
    });

    // GSAP Animation: Animate each word from opacity 0 to opacity 1
    gsap.fromTo(
      element.querySelectorAll('span'),
      { opacity: 0 },
      {
        opacity: 1,
        stagger: .1, // Delay between words
        duration: 1.2, // Duration of animation
        ease: "power1.inOut" // Ease effect
      }
    );
  });
});



// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const horizontalScrollWrapper = document.querySelector('.horizontal-scroll-wrapper');
const horizontalItems = document.querySelectorAll('.horizontal-item');

// Dynamically calculate the width of the horizontal section based on items
const totalWidth = horizontalItems.length * 100;  // Each item is 100vw wide

gsap.to(".horizontal-scroll-content", {
  xPercent: -100 * (horizontalItems.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-scroll-wrapper",
    start: "top top",   // Starts when the top of the horizontal scroll section hits the top of the viewport
    end: `+=${totalWidth}vw`, // End after scrolling through all items
    scrub: 0.5,          // Reduce the scrub time to make it smoother
    pin: true,           // Pin the horizontal scroll section during scroll
    pinSpacing: false,   // Don't leave extra space after pin, allows vertical scroll to continue normally
    anticipatePin: 1      // Smooth transition to the next section
  }
});





document.addEventListener("DOMContentLoaded", function() {
  // Select all elements with the class 'text-bars'
  const textBars = document.querySelectorAll('.text-bars');

  // Add the 'active' class to each element
  textBars.forEach(function(element) {
    element.classList.add('active');
  });
});