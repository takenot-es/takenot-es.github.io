document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("nav:panel:toggle");
    const navPanel = document.querySelector(".nav\\:panel"); // Escape colon in class selector
  
    if (toggleButton && navPanel) {
      toggleButton.addEventListener("click", function () {
        navPanel.classList.toggle("active");
      });
    }
  });