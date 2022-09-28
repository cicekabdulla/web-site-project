import createProduct from '../../modules/createProduct.js';
import hamburger from '../../modules/hamburger.js';
import search from '../../modules/search.js';
import totalCount from '../../modules/totalCount.js';
import http from '../../services/api.js';

async function filterProducts() {

    const { request } = http();

    let cats = [];
    let findedByCats = [];

    const controlPrice = (target) => {
        if (+minPrice.textContent.replace('$', '') == 0 || maxPrice.textContent.replace('$', '') == target.value) {
            createProduct()
        } else {
            wrapper.innerHTML = '';
        }
    }

    function getCategories(data) {

        for (let i = 0; i < data.length; i++) {
            const li = document.createElement('li');
            li.addEventListener('click', (e) => {
                if (e.target.matches('button')) {

                    if (!cats.includes(e.target.textContent)) {
                        cats.push(e.target.textContent);
                    } else {
                        cats.splice(cats.indexOf(+e.target.textContent, 1));
                    }
                    e.target.classList.toggle('activeCat')

                    request('https://dummyjson.com/products/')
                        .then(data => {
                            data.products.forEach(item => {
                                // console.log(item)
                            })
                        })

                }

                request('https://dummyjson.com/products/')
                    .then(data => {
                        findedByCats = [];
                        for (let i = 0; i < data.products.length; i++) {
                            for (let j = 0; j < cats.length; j++) {
                                if (data.products[i].category == cats[j]) {
                                    findedByCats.push(data.products[i])
                                } else {
                                    wrapper.innerHTML = '';
                                }
                            }
                        }

                        if (findedByCats.length > 0) {
                            wrapper.innerHTML = ''
                        }
                        findedByCats.forEach(({ id, images, title, price }) => {
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

                            wrapper.appendChild(productItem)
                        })
                    })

            })

            li.innerHTML = `
            <button>${data[i]}</button>
            `
            document.querySelector('.shop__size ul').appendChild(li)
        }
    }

    request('https://dummyjson.com/products/categories')
        .then(getCategories)



    const price = document.querySelector('.price__filter input'),
        span = document.querySelector('p span'),
        wrapper = document.querySelector('.products .product__wrap'),
        minPrice = document.querySelector('.minPrice'),
        maxPrice = document.querySelector('.maxPrice')

    let finded = [],
        max = 0;

    await request('https://dummyjson.com/products')
        .then(data => {
            max = data.products.sort((a, b) => b.price - a.price)[0].price;
            price.setAttribute('max', max);
            document.querySelector('.maxPrice').textContent = `$${max}`
        })

    controlPrice()

    price.addEventListener('change', async (e) => {
        document.querySelector('.minPrice').textContent = `$${e.target.value}`

        if (findedByCats.length > 0) {
            finded = [...findedByCats.filter(product => product.price <= e.target.value)]
        } else {
            await request('https://dummyjson.com/products')
                .then(data => {
                    finded = [...data.products.filter(product => product.price <= e.target.value)]
                })

        }
        controlPrice(e.target)

        finded.forEach(({ id, images, title, price }) => {
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

            wrapper.appendChild(productItem)
        })
    })

}

window.addEventListener('DOMContentLoaded', () => {
    hamburger()
    search()
    filterProducts()
    totalCount()
})