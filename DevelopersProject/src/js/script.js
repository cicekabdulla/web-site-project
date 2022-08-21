'use strict'

import tab from './modules/tab.js';
import slider from './modules/slider.js'

window.addEventListener('DOMContentLoaded', () => {

    const navbarBar = document.querySelector('.bar'),
        navbarUl = document.querySelector('#navbar ul');

    navbarBar.addEventListener('click', () => {
        navbarUl.classList.toggle('d-flex');
    });

    tab({
        img: '.down__img',
        drop: '.offer__drop',
        rotateimg: 'rotateimg'
    });

    slider({
        slidesSelector: '.services__slider-item',
        wrapperSelector: '.services__slider-wrapper',
        prevSelector: '.prev',
        nextSelector: '.next'
    })

    slider({
        slidesSelector: '#examples .examples__slider-item',
        wrapperSelector: '#examples .examples__slider-wrapper',
        prevSelector: '#examples .slider__control .prev',
        nextSelector: '#examples .slider__control .next'
    });
})

