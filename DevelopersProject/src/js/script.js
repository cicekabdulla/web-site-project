'use strict'

import burger from './modules/burger.js';
import tab from './modules/tab.js';
import slider from './modules/slider.js';
import form from './modules/form.js';

window.addEventListener('DOMContentLoaded', () => {

    burger({
        burgerSelector: '.bar',
        navbarUlSelector: '#navbar ul'
    });

    tab({
        img: '.down__img',
        drop: '.offer__drop',
        rotateimg: 'rotateimg'
    });

    slider({
        slidesSelector: '#services .services__slider-item',
        wrapperSelector: '#services .services__slider-wrapper',
        prevSelector: '#services .slider__control .prev',
        nextSelector: '#services .slider__control .next'
    });

    slider({
        slidesSelector: '#examples .examples__slider-item',
        wrapperSelector: '#examples .examples__slider-wrapper',
        prevSelector: '#examples .slider__control .prev',
        nextSelector: '#examples .slider__control .next'
    });

    form();

});