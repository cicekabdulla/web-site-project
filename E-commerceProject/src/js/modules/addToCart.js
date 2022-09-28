import localstorage from "../services/localstorage.js";

export default function addToCart(selector) {

    const { setItemLS } = localstorage()

    const statusMessage = (title) => {
        const message = document.querySelector(`${selector.indexOf('.search__products') > -1 ? '.search__products' : '.products'} .status__message`)
        message.style.display = 'flex';
        message.children[0].textContent = `"${title}" Added to your cart`;

        setTimeout(() => {
            message.style.display = 'none';
        }, 3000)
    }

    document.querySelectorAll(selector)
        .forEach(item => {

            item.addEventListener('click', (e) => {
                e.preventDefault();

                if (e.target.matches('a')) {
                    const target = e.target.parentElement.parentElement.parentElement,
                        img = target.children[0].children[0].children[0].getAttribute('src'),
                        title = target.children[1].children[0].textContent,
                        price = target.children[1].children[1].children[0].textContent
                    const selectProduct = {
                        img: img,
                        title: title,
                        price: price,
                        totalprice: price,
                        count: 1
                    }

                    setItemLS(selectProduct);
                    statusMessage(title);
                    
                    let total = +document.querySelector('.header__cart a span').textContent;
                    const currentTotal = total + 1;
                    document.querySelector('.header__cart a span').textContent = currentTotal;

                }
            })
        })
}