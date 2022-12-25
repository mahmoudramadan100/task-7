
let btn = document.querySelector('.scroll-top');
let navbar = document.querySelector('.navbar');
// let car = document.querySelector('.cars-pagination li');
// let imgCar = document.querySelector('.swiper-slide');

// Show Scroll Top Btn
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



// Scroll Top Smooth
btn.onclick = function() {
   scroll({
        top: 0,
        behavior: 'smooth'
    });
}

// car.onclick = function(){
//     this.classList.toggle("active");
// }


//NAVBAR MENU Mobile
const toggleMenuOpen = () => document.body.classList.toggle("open");

// Slider
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
    },
    freeMode: true,
});
