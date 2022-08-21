'use strict'

function slider({ slideSelector, wrapperSlide, innerSlide, prevSlide, nextSlide, currentSlide, totalSlide }) {
    const callElem = (selector) => document.querySelector(selector);

    const slide = document.querySelectorAll(slideSelector),
        wrapper = callElem(wrapperSlide),
        inner = callElem(innerSlide),
        prev = callElem(prevSlide),
        next = callElem(nextSlide),
        current = callElem(currentSlide),
        total = callElem(totalSlide),
        width = wrapper.offsetWidth

    let offset = 0, count = 1, dots = [];

    const dot = document.createElement('ol');

    for (let i = 0; i < 5; i++) {
        const dotItem = document.createElement('li');
        dots.push(dotItem);

        dot.appendChild(dotItem);
        wrapper.appendChild(dot)

        if (i == 0) {
            dotItem.classList.add('activeDot')
        }

        dotItem.addEventListener('click', () => {
            dots.forEach(dot => {
                dot.classList.remove('activeDot')
            });

            offset = i * width;
            dots[i].classList.add('activeDot');
            builder()
        })
    }
    
    normalizer();
    changeSlide();

    function normalizer() {
        if (slide.length < 10) {
            total.innerHTML = `0${slide.length}`
        } else {
            total.innerHTML = slide.length;
        }

        inner.style.display = 'flex';
        inner.style.width = width * slide.length + 'px';
        wrapper.style.overflow = 'hidden'

    }

    function builder() {
        inner.style.transform = `translateX(${-offset}px)`
        current.innerHTML = count;

        if (count < 10) {
            current.innerHTML = `0${count}`
        } else {
            current.innerHTML = count;
        }
    }

    function changeSlide() {
        prev.addEventListener('click', () => {
            if (offset == 0) {
                offset = width * (slide.length - 1);
                count = slide.length;
            } else {
                offset -= width;
                count -= 1;
            }
            builder()
        });

        next.addEventListener('click', () => {
            if (offset == width * (slide.length - 1)) {
                offset = 0;
                count = 1;
            } else {
                offset += width;
                count += 1;
            }
            builder()
        });
    }
}

export default slider;