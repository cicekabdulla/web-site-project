'use strict';

const navbarBar = document.querySelector('.bar'),
    navbarUl = document.querySelector('#navbar ul');

navbarBar.addEventListener('click', () => {
    navbarUl.classList.toggle('d-flex');
})