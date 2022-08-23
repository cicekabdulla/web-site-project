'use strict'

import http from '../services/api.js';

function form() {
    const form = document.querySelector('form');
    const { request } = http();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const id = new Date().getTime().toString().slice(7, 14);
        const data = Object.fromEntries(new FormData(e.target));
        data.id = id;
        request('http://localhost:3000/callRequest', 'POST', data)
    })
}

export default form;