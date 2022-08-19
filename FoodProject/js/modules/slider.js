function slider() {
    const offer__slider = document.querySelector('.offer__slider'),
        slide = document.querySelectorAll('.offer__slide'),
        wrapper = document.querySelector('.offer__slider-wrapper'),
        inner = document.querySelector('.offer__slider-inner'),
        width = wrapper.offsetWidth,
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        current = document.querySelector('#current'),
        total = document.querySelector('#total');

    let offset = 0, count = 1;

    if (slide.length < 10) {
        total.innerHTML = `0${slide.length}`
    } else {
        total.innerHTML = slide.length;
    }

    inner.style.display = 'flex';
    inner.style.width = width * slide.length + 'px';
    wrapper.style.overflow = 'hidden'

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

    changeSlide();
}

export default slider;