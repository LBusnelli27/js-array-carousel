const carouselElements = document.getElementsByClassName('my-carousel-item');
const bookmarkElements = document.getElementsByClassName('my-circle');

carouselElements[0].classList.add('my-active');
bookmarkElements[0].classList.add('my-active-circle');
console.log(carouselElements);


const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');

let activeElement = 0;

prevBtn.addEventListener('click', function() {
    carouselElements[activeElement].classList.remove('my-active');
    bookmarkElements[activeElement].classList.remove('my-active-circle');

    activeElement--;

    if(activeElement < 0) {
        activeElement = 4;
    }

    carouselElements[activeElement].classList.add('my-active');
    bookmarkElements[activeElement].classList.add('my-active-circle');
});


nextBtn.addEventListener('click', function() {
    carouselElements[activeElement].classList.remove('my-active');
    bookmarkElements[activeElement].classList.remove('my-active-circle');

    activeElement++;

    if(activeElement > 4) {
        activeElement = 0;
    }

    carouselElements[activeElement].classList.add('my-active');
    bookmarkElements[activeElement].classList.add('my-active-circle');
});