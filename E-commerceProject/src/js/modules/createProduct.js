'use strict'
import http from '../services/api.js';
import addToCart from './addToCart.js';

function createProduct() {
    const { request } = http(),
        loader = document.querySelector('.loader');


    const getProducts = (data) => {
        const { products } = data;

        let end = 10;
        const pathname = window.location.pathname;

        switch (pathname) {
            case '/shop.html':
                end = 30;
                break;
            case '/product.html':
                end = 4;
                break;
        }

        products.slice(0, end).forEach(({ id, price, title, images }) => {
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
            
            document.querySelector('.products .product__wrap').appendChild(productItem)
        })

        addToCart('.products .product__overlay')

    }

    const showLoader = () => {
        if (loader) { loader.classList.add('show'); }
    }

    const hideLoader = () => {
        if (loader) { loader.classList.remove('show'); }
    }

    showLoader()
    request('https://dummyjson.com/products')
        .then(getProducts)
        .then(() => {
            hideLoader();
        })
        .catch((err) => {
            console.log(err);
        })
}

export default createProduct;