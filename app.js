document.addEventListener("DOMContentLoaded", function () {
  new Splide("#testimonial-slider", {
    type: "slide",
    perPage: 2,
    perMove: 1,
    focus: "left",
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    gap: "0px",
    pagination: false,
    arrows: false,
    // breakpoints: {
    //   767: {
    //     type: "slide",
    //   },
    // },
  }).mount();
});

// function updateActiveState() {
//   if (window.matchMedia("(max-width: 767px)").matches) {
//     const activeElements = document.querySelectorAll('.splide__slide.is-active');
//     activeElements.forEach(function (el) {
//       el.classList.remove('is-active');
//     });
//   }
// }

// updateActiveState();
// window.addEventListener("resize", updateActiveState);

let burgerMenu = document.getElementById("burger-menu");
let navMenu = document.getElementById("navMenu");
let clicked = document.getElementById("clicked");
let hoverEffect = document.getElementById("hover-effect");
let kapatma = document.getElementById("kapatma");
let olurmu = document.getElementById("olurmu");
hoverEffect.addEventListener("click", () => {
  if (olurmu.style.display === "none") {
    olurmu.style.display = "block";
  } else {
    olurmu.style.display = "none";
  }
});

kapatma.addEventListener("click", () => {
  kapatma.style.cssText = "display: none";
  clicked.style.cssText = "display: none";
  burgerMenu.style.cssText = "display: block";
  navMenu.style.cssText = "left:-75%";
});

burgerMenu.addEventListener("click", () => {
  clicked.style.cssText = "display: block";
  burgerMenu.style.cssText = "display: none";
  olurmu.style.display = "none";
  navMenu.style.cssText = "left: 0%";
  kapatma.style.cssText = "display: block";
});

clicked.addEventListener("click", () => {
  kapatma.style.cssText = "display: none";
  clicked.style.cssText = "display: none";
  burgerMenu.style.cssText = "display: block";
  navMenu.style.cssText = "left:-75%";
});

if (window.innerWidth < 500) {
  lightbox.option({
    resizeDuration: 100,
    wrapAround: true,
    maxWidth: 400,  
    maxHeight: 400 ,
    disableScrolling: true
  });
} else {
  lightbox.option({
    resizeDuration: 100,
    wrapAround: true,
    maxWidth: 700,  
    maxHeight: 700,
    disableScrolling: true
  });
}

// document.addEventListener('lightbox:opened', () => {
//   document.documentElement.style.overflow = 'hidden'; 
// });

// document.addEventListener('lightbox:closed', () => {
//   document.documentElement.style.overflow = 'auto';
// });