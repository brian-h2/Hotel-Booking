//Se crea variable para seleccionar 


let navbar = document.querySelector('.header .navbar');

let btn = document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active')
}

document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox => {
  faqBox.onclick = () => {
    faqBox.parentElement.classList.toggle('active');
  }
})

//parentelement: selecciona el elemento padre es decir el box del h3 y se agrega o quita la clase active.

var swiper = new Swiper(".home-slider", {
  loop:true,
  effect: "coverflow",
  grabCursor: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".gallery-slider", {
  loop:true,
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  grabCursor: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  
});


var swiper = new Swiper(".reviews-slider", {
  loop:true,
  slidesPerView: "auto",
  grabCursor: true,
  spaceBetween: 100,
  pagination:{
    el:".swiper-pagination",
  },
  breakpoints: {
    
    768: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 2,
    },
  },
});
