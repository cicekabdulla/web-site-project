'use strict'

import tab from './modules/tab.js';
import card from './modules/card.js';
import timer from './modules/timer.js';
import slider from './modules/slider.js';

window.addEventListener('DOMContentLoaded', () => {
    tab({
        content: '.tabcontent',
        title: '.tabheader__item',
        active: 'tabheader__item_active',
    });

    card('.menu__field .container');

    timer({
        deadline: '2022/08/21',
        days: '.timer__block #days',
        hours: '.timer__block #hours',
        minutes: '.timer__block #minutes',
        seconds: '.timer__block #seconds'
    });

    slider();

})