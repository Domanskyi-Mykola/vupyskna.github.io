


const menu = document.querySelector('.menu__body');
const menuBtn = document.querySelector('.menu__burger');

const body = document.body;

if (menu && menuBtn){
    menuBtn.addEventListener('click',() => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })
}












    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentIndex = 0;

    function updateActiveSlide() {
        slide.forEach((s, index) => {
            s.classList.remove('active');
            if (index === currentIndex) {
                s.classList.add('active');
            }
        });
    }

    function showSlide(index) {
        if (index < 0) {
            currentIndex = slide.length - 1;
        } else if (index >= slide.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateActiveSlide();
    }

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    updateActiveSlide();