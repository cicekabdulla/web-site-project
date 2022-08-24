'use strict'
import http from '../services/api.js';

function forms() {
    const forms = document.querySelectorAll('form');
    const { request } = http();

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const id = new Date().getTime().toString().slice(7, 14);
            const data = Object.fromEntries(new FormData(e.target));
            data.id = id;

            request('http://localhost:3000/callrequest', 'POST', JSON.stringify(data))
        })
    })
}

export default forms;