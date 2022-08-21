'use strict'

function slider({ slidesSelector, wrapperSelector, prevSelector, nextSelector }) {
    const callElem = (selector) => document.querySelector(selector);

    const slides = document.querySelectorAll(slidesSelector),
        wrapper = callElem(wrapperSelector),
        prev = callElem(prevSelector),
        next = callElem(nextSelector)

    let width = slides[0].offsetWidth, offset = 0;

    function changeSlide() {
        prev.addEventListener('click', () => {
            if (offset == 0) {
                offset = width * (slides.length - 1)
            } else {
                offset -= width
            }

            wrapper.style.transform = `translateX(-${offset}px)`
        })

        next.addEventListener('click', () => {
            if (offset == width * (slides.length - 1)) {
                offset = 0;
            } else {
                offset += width;
            }

            console.log(offset)
            wrapper.style.transform = `translateX(-${offset}px)`
        });
    }

    changeSlide()

}

export default slider;

