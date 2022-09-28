import createProduct from "../../modules/createProduct.js";
import slider from '../../modules/slider.js';
import hamburger from '../../modules/hamburger.js';
import search from '../../modules/search.js';
import totalCount from '../../modules/totalCount.js';

window.addEventListener('DOMContentLoaded', () => {
    hamburger()
    search()
    slider()
    createProduct()
    totalCount()
})