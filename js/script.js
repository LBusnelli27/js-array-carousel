// Get elements for changing when click on buttons
const carouselElements = document.getElementsByClassName('my-carousel-item');
const bookmarkElements = document.getElementsByClassName('my-circle');
const miniatureElements = document.getElementsByClassName('my-miniature-item');

// Put active to the first elemets
carouselElements[0].classList.add('my-active');
bookmarkElements[0].classList.add('my-active-circle');
miniatureElements[0].classList.add('my-opacity-min')

// Get buttons
const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');

// Counter
let activeElement = 0;

prevBtn.addEventListener('click', function() {
    // Remove active from the current items
    carouselElements[activeElement].classList.remove('my-active');
    bookmarkElements[activeElement].classList.remove('my-active-circle');
    miniatureElements[activeElement].classList.remove('my-opacity-min');

    activeElement--;

    // Loop if condition that return to end
    if(activeElement < 0) {
        activeElement = carouselElements.length - 1;
    }

    // Add active to the previous items
    carouselElements[activeElement].classList.add('my-active');
    bookmarkElements[activeElement].classList.add('my-active-circle');
    miniatureElements[activeElement].classList.add('my-opacity-min');
});


nextBtn.addEventListener('click', function() {
    // Remove active from the current items
    carouselElements[activeElement].classList.remove('my-active');
    bookmarkElements[activeElement].classList.remove('my-active-circle');
    miniatureElements[activeElement].classList.remove('my-opacity-min');

    activeElement++;

    // Loop if condition that return to start
    if(activeElement > (carouselElements.length - 1)) {
        activeElement = 0;
    }

    // Add active to the next items
    carouselElements[activeElement].classList.add('my-active');
    bookmarkElements[activeElement].classList.add('my-active-circle');
    miniatureElements[activeElement].classList.add('my-opacity-min');
});