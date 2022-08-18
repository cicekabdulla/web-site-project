'use strict'

import tab from './modules/tab.js'

window.addEventListener('DOMContentLoaded', () => {
    tab({
        img:'.down__img',
        drop:'.offer__drop',
        rotateimg:'rotateimg'
    });

    const navbarBar = document.querySelector('.bar'),
        navbarUl = document.querySelector('#navbar ul');

    navbarBar.addEventListener('click', () => {
        navbarUl.classList.toggle('d-flex');
    })
})

