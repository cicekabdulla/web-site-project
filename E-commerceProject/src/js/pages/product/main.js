import tab from '../../modules/tab.js';
import currentProduct from '../../modules/currentProduct.js';
import createProduct from '../../modules/createProduct.js';
import hamburger from '../../modules/hamburger.js';
import search from '../../modules/search.js';
import totalCount from '../../modules/totalCount.js'


window.addEventListener('DOMContentLoaded', () => {
    hamburger()
    search()
    tab()
    currentProduct()
    createProduct()
    totalCount()
})