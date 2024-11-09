document.addEventListener('DOMContentLoaded', function() {
    // Get the button and panel elements
    const menuToggleButton = document.querySelector('.menu-toggle');
    const navigationPanel = document.querySelector('.navigation-panel');

    // Add click event listener to the menu toggle button
    menuToggleButton.addEventListener('click', function() {
        // Toggle the 'active' class on the navigation panel
        navigationPanel.classList.toggle('active');
    });
});