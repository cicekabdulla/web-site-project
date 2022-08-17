'use strict'

import tab from './modules/tab.js'

window.addEventListener('DOMContentLoaded', () => {
    tab();

    const navbarBar = document.querySelector('.bar'),
        navbarUl = document.querySelector('#navbar ul');

    navbarBar.addEventListener('click', () => {
        navbarUl.classList.toggle('d-flex');
    })
})

