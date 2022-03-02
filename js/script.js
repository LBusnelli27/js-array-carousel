const carouselElements = document.getElementsByClassName('my-carousel-item');
const bookmarkElements = document.getElementsByClassName('my-circle');
const miniatureElements = document.getElementsByClassName('my-miniature-item');

carouselElements[0].classList.add('my-active');
bookmarkElements[0].classList.add('my-active-circle');
miniatureElements[0].classList.add('my-opacity-min')


const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');

let activeElement = 0;

prevBtn.addEventListener('click', function() {
    carouselElements[activeElement].classList.remove('my-active');
    bookmarkElements[activeElement].classList.remove('my-active-circle');
    miniatureElements[activeElement].classList.remove('my-opacity-min');

    activeElement--;

    if(activeElement < 0) {
        activeElement = carouselElements.length - 1;
    }

    carouselElements[activeElement].classList.add('my-active');
    bookmarkElements[activeElement].classList.add('my-active-circle');
    miniatureElements[activeElement].classList.add('my-opacity-min');
});


nextBtn.addEventListener('click', function() {
    carouselElements[activeElement].classList.remove('my-active');
    bookmarkElements[activeElement].classList.remove('my-active-circle');
    miniatureElements[activeElement].classList.remove('my-opacity-min');

    activeElement++;

    if(activeElement > (carouselElements.length - 1)) {
        activeElement = 0;
    }

    carouselElements[activeElement].classList.add('my-active');
    bookmarkElements[activeElement].classList.add('my-active-circle');
    miniatureElements[activeElement].classList.add('my-opacity-min');
});