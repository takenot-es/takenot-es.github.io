window.addEventListener('scroll', function() {
    const element = document.querySelector('.navigation'); // Replace '.your-element' with the actual selector of your element
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollPosition > 100) { // Adjust 100 to your desired scroll threshold
      element.classList.add('scrolled'); // Replace 'new-class' with the class you want to add
    } else {
      element.classList.remove('scrolled');
    }
  });