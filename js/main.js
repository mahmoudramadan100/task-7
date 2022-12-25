
let btn = document.querySelector('.scroll-top');
let navbar = document.querySelector('.navbar');

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
    }
});

