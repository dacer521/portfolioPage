// window.onload = function() {
//     const nav = document.getElementById("navbar")
//     nav.style.visibility = "hidden";
  
//     const cello = document.getElementById('cello');
//     const mtg = document.getElementById('mtg');
//     const book = document.getElementById('book');
  
  
//     cello.style.display = "none";
//     mtg.style.display = "none";
//     book.style.display = "none";
//   };
//     function showHide(elementId) {
//       let element = document.getElementById(elementId);
//       if (element.style.display === "none") {
  
//         element.style.display = "inline";
  
//         if (elementId === 'cello') {
//           element.style.width = "30%";
//           element.style.height = "40%";
  
  
//           mtg.style.display = "none";
//           book.style.display = "none";
  
  
//         } else if (elementId === 'mtg') {
//           element.style.width = "33.3%";
//           element.style.height = "80%";
  
//           cello.style.display = "none";
//           book.style.display = "none";
  
  
//         } else if (elementId === 'book') {
//           element.style.width = "30%";
//           element.style.height = "70%";
  
//           cello.style.display = "none";
//           mtg.style.display = "none";
  
//         }
//       } else {
//         element.style.display = "none";
//       }
//     }
  
//     // keep track of previous scroll position
//   let prevScrollPos = document.documentElement.scrollTop;
  
//   window.addEventListener('scroll', function() {
//     // current scroll position
//     const currentScrollPos = document.documentElement.scrollTop;
//     const nav = document.getElementById("navbar")
  
//     if (prevScrollPos > currentScrollPos) {
//       // user has scrolled up
//       // nav.style.transition.transform(0.2);
  
//       nav.style.visibility = "visible";
  
//     } else {
//       // user has scrolled down
//       nav.style.visibility = "hidden";
//     }
  
//     // update previous scroll position
//     prevScrollPos = currentScrollPos;
//   });
  