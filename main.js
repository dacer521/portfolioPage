window.onload = function() {
    const nav = document.getElementById("navbar")
    nav.style.visibility = "hidden";
  

    // keep track of previous scroll position
  let prevScrollPos = document.documentElement.scrollTop;
  
  window.addEventListener('scroll', function() {
    // current scroll position
    const currentScrollPos = document.documentElement.scrollTop;
    const nav = document.getElementById("navbar")
  
    if (prevScrollPos > currentScrollPos) {
      // user has scrolled up
      // nav.style.transition.transform(0.2);
  
      nav.style.visibility = "visible";
  
    } else {
      // user has scrolled down
      nav.style.visibility = "hidden";
    }
  
    // update previous scroll position
    prevScrollPos = currentScrollPos;
  });
}