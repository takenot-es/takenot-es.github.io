// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Get the navigation element
    const navigation = document.querySelector('.navigation');
  
    // Function to add/remove the 'scrolled' class based on scroll position
    function onScroll() {
      if (window.scrollY > 0) {
        navigation.classList.add('scrolled'); // Add 'scrolled' class when scrolled
      } else {
        navigation.classList.remove('scrolled'); // Remove 'scrolled' class when at the top
      }
    }
  
    // Listen for the scroll event on the window
    window.addEventListener('scroll', onScroll);
  
    // Call onScroll initially in case the page is already scrolled when loaded
    onScroll();
  });