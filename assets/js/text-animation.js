var e = document.querySelector('.ml4');
e.innerHTML = e.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="word">$2</span>');
  

anime.timeline({loop: false})
  .add({
    targets: '.ml4 .word',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1000,
    delay: (el, i) => 90 * (i+1)
});
