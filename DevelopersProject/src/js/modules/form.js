'use strict'

function form() {
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target));
        console.log(data);
    })
}

export default form;