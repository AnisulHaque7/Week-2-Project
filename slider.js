document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slick-track');
    const slides = document.querySelectorAll('.slick-slide');
    const slideWidth = slides[0].offsetWidth;
    let currentIndex = 0;

    const leftButtons = document.querySelectorAll('.slide__buttons--container button:first-child');
    const rightButtons = document.querySelectorAll('.slide__buttons--container button:last-child');

    leftButtons.forEach(button => {
        button.addEventListener('click', () => moveSlide(-1));
    });

    rightButtons.forEach(button => {
        button.addEventListener('click', () => moveSlide(1));
    });

    function moveSlide(direction) {
        const totalSlides = slides.length;

        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }

        track.style.transform = `translate3d(${-currentIndex * slideWidth}px, 0, 0)`;
    }
});
