'use strict'
import http from '../services/api.js';
import addToCart from './addToCart.js';

const search = () => {
    const callElem = (selector) => document.querySelector(selector);

    const searchIcon = callElem('.header__search a'),
        searchClose = callElem('.search__close'),
        searchOpen = callElem('.header__search-open'),
        form = callElem('.search__inner form'),
        searchContainer = callElem('.search__products .product__wrap');

    const { request } = http();

    searchClose.addEventListener('click', () => {
        searchOpen.style.display = 'none';
        document.body.style.overflow = '';
    })
    searchIcon.addEventListener('click', () => {
        searchOpen.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    form.addEventListener('submit', getFindedProducts);

    function getFindedProducts(e) {
        e.preventDefault();

        const { name } = Object.fromEntries(new FormData(e.target))

        request('https://dummyjson.com/products/')
            .then(data => {
                const { products } = data;
                searchContainer.innerHTML = '';

                const filteredProducts = products.filter(product => product.title.toLowerCase().indexOf(name.toLowerCase()) > -1)

                filteredProducts.forEach(({ id, title, images, price }) => {
                    const productItem = document.createElement('div');

                    productItem.classList.add('product__item');

                    productItem.addEventListener('click', () => localStorage.setItem('currentProduct',
                        JSON.stringify(id)))

                    productItem.innerHTML = `
                                <div class="product__img">
                                <a href="product.html" target="_blank"><img src="${images[0]}" alt=""></a>
                                <div class="product__overlay">
                                    <a href="#"> <span class="nonPointer">Add to cart</span><i class="fa-solid
                                                fa-arrow-right-long nonPointer"></i></a>
                                    </div>
                                </div>
                                <div class="product__content">
                                    <h6>${title}</h6>
                                    <span>$<span>${price}</span></span>
                                </div>
                                `
                    searchContainer.appendChild(productItem)
                })

                addToCart('.search__products .product__overlay');
            })
    }
}

export default search;
