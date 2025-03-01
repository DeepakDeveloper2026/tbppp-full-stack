var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // index of the first image
const interval = 3000; // duration(speed) of the slide
function changeImage(n) {
    for (var i = 0; i < imgs.length; i++) { // reset
        imgs[i].style.opacity = 0;
        dots[i].className = dots[i].className.replace(' active', '');
    }
    currentImg = (n !== undefined) ? n : (currentImg + 1) % imgs.length;
    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
}
var timer = setInterval(changeImage, interval);
function manualChange(n) {
    clearInterval(timer);
    changeImage(n);
    timer = setInterval(changeImage, interval);
}
changeImage(currentImg);