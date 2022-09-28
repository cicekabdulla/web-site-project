import http from "../services/api.js";
import localstorage from "../services/localstorage.js";

export default function currentProduct() {
    const { setLocalStorageArr } = localstorage(),
        { request } = http(),
        getElem = (selector) => document.querySelector(selector),
        id = JSON.parse(localStorage.getItem('currentProduct'));


    request(`https://dummyjson.com/products/${id}`)
        .then(data => {
            const { images, title, price } = data;
            if (getElem('.product__image')) {
                getElem('.product__image').setAttribute('src', images[0]);
                getElem('.product__title').textContent = title;
                getElem('.product__price').innerHTML = `<span>${price}<span class="symbol"> ₼</span> </span> `;
            }

            // const productAddCart = document.querySelector('.product__addcart');
            // productAddCart.addEventListener('click', (e) => {
            //     e.preventDefault();
            //    localStorage.setItem('product',JSON.stringify(id))
            // })

        })

    //     const { setLocalStorageArr } = localstorage()
    //     function productAddToCart(data) {
    //         const productAddCart = document.querySelector('.product__addcart');
    //         productAddCart.addEventListener('click', (e) => {
    //             e.preventDefault()
    //             const { id, count } = data;
    //              request('https://dummyjson.com/products')
    //         .then(productAddToCart)
    // console.log(id,count)
    //         })
    //     }

    // request('https://dummyjson.com/products')
    //     .then(data => {
    //         const {id,count}=data;
    //         console.log(id,count)
    //     })

}
