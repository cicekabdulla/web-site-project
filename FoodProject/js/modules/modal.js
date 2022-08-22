'use strict'

function modal(btn, modal = '.modal', close = '.modal__close') {

    getModalSettings()

    function getModalSettings() {
        const callElem = (selector) => document.querySelector(selector);

        callElem(btn).addEventListener('click', () => {
            callElem(modal).style.display = 'block';
            document.body.style.overflow = 'hidden'
        });

        callElem(close).addEventListener('click', () => {
            modalClose()
        });

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                modalClose()
            }
        });

        callElem(modal).addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                modalClose()
            }
        });

        function modalClose() {
            callElem(modal).style.display = 'none';
            document.body.style.overflow = '';
        }
    }
}

export default modal;