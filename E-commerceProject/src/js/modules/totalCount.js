import localstorage from '../services/localstorage.js'

const totalCount = () => {

    const { getLocalStorageArr } = localstorage();

    let data = getLocalStorageArr('product');

    const cart = document.querySelector('.header__cart a span')  
    let totalCount = 0;
    for (let i = 0; i < data.length; i++) {
        totalCount += Number(data[i].count);
    }
    cart.textContent = `${totalCount}`;
}

export default totalCount;