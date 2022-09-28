export default function slider() {
    const slide = document.querySelectorAll('.home__slide');
    const wrapper = document.querySelector('.home__slider-wrapper');
    const inner = document.querySelector('.home__slider-inner');
    const dot = document.createElement('ul');

    let width = wrapper && wrapper.offsetWidth;

    let offset = 0, dots = [];

    slide.forEach(item => item.style.width = width + 'px');

    if (inner || wrapper) {
        inner.style.display = 'flex';
        inner.style.width = width * slide.length + 'px';
        wrapper.style.overflow = 'hidden';
        inner.style.transition = 'all 400ms linear'
    }
    function dotChange() {
        for (let i = 0; i < slide.length; i++) {
            const dotItem = document.createElement('li');
            dot.appendChild(dotItem);
            wrapper.appendChild(dot);
            dots.push(dotItem);

            if (i == 0) {
                dotItem.classList.add('activeDot');
            }

            dotItem.addEventListener('click', () => {
                offset = i * width;
                inner.style.transform = `translateX(${-offset}px)`;
                dots.forEach(dot => dot.classList.remove('activeDot'));
                dots[i].classList.add('activeDot');
            })
        }
    }
    dotChange();

    window.addEventListener('resize', () => {
        if (wrapper || inner) {
            width = wrapper.offsetWidth;

            inner.style.width = width * slide.length + 'px';

            offset = 0;
            inner.style.transform = `translateX(${-offset}px)`;

            slide.forEach(item => item.style.width = width + 'px')
        }

    })

}