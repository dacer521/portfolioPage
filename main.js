window.onload = function() {
  const nav = document.getElementById("navbar");
  nav.style.transition = "transform 0.3s ease-in-out";
  nav.style.transform = "translateY(0)";
  
  let prevScrollPos = document.documentElement.scrollTop;

  window.addEventListener('scroll', function() {
      const currentScrollPos = document.documentElement.scrollTop;
      
      if (prevScrollPos > currentScrollPos) {
          nav.style.transform = "translateY(0)";
      } else {
          nav.style.transform = "translateY(-100%)";
      }
      
      prevScrollPos = currentScrollPos;
  });
}