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
        btn.style.display= "block"
    } else {
        btn.style.display = "none"
    }
};

// window.onclick = function() {
//     scroll({
//         top: 0,
//         behavior: 'smooth'
//     });
// }

const toggleMenuOpen = () => document.body.classList.toggle("open");