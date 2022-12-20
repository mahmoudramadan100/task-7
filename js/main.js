// let section = document.querySelector('.section-3');
// let span = document.querySelector('.section-3 span');
let btn = document.querySelector('.btn');

window.onscroll = function() {
    // if (window.scrollY >= section.offsetTop)  {
    //     span.classList.add('color');
    //     console.log("hello")
    // }
    if(window.scrollY >= 700) {
        btn.style.display= "block"
    } else {
        btn.style.display = "none"
    }
};

window.onclick = function() {
    scroll({
        top: 0,
        behavior: 'smooth'
    });
}