// let section = document.querySelector('.section-3');
// let span = document.querySelector('.section-3 span');
let btn = document.querySelector('.scroll-top');
let navbar = document.querySelector('.navbar');

window.onscroll = function() {
    if (window.scrollY >= 100)  {
        navbar.classList.add('navbar-scroll');
        navbar.style.transition = "all 0.5s";
    } else {
        // navbar.style.top = "45px";
        navbar.classList.remove('navbar-scroll');
    }
    if(window.scrollY >= 700) {
        btn.style.display= "flex"
    } else {
        btn.style.display = "none"
    }
};

btn.onclick = function() {
   scroll({
        top: 0,
        behavior: 'smooth'
    });
}


const toggleMenuOpen = () => document.body.classList.toggle("open");


var swiper = new Swiper(".imgSlider", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    mousewheel: true,
    keyboard: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

// var likeIcon = document.getElementById('#like-icon');
// var dislike = document.getElementById('#dislike');


// likeIcon.addEventListener('click', function() {
  
//     if (dislike.classList.contains('main-color')) {
//         dislike.classList.remove('gray-color');
//     } 
//   this.classList.toggle('main-color');
  
// });

// dislike.addEventListener('click', function() {
  
//     if (likeIcon.classList.contains('main-color')) {
//         likeIcon.classList.remove('gray-color');
//     } 
//   this.classList.toggle('main-color');
  
// });