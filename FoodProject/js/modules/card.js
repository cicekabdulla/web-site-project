'use strict'
import http from '../services/api.js';

const card = (menuWrapper) => {

    getCards();

    function getCards() {
        const { request } = http();

        request('http://localhost:3000/card')
            .then(createCard)
            .catch(() => console.log('error'))
    }

    function createCard(cards) {
        cards.forEach(({ img, alt, title, desc, price }) => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu__item');

            menuItem.innerHTML = `
            <img src="img/tabs/${img}" alt=${alt}>
            <h3 class="menu__item-subtitle">${title}</h3>
            <div class="menu__item-descr">${desc}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${price}</span> грн/день</div>
            </div>`;

            document.querySelector(menuWrapper).appendChild(menuItem)
        });
    }
}

export default card;