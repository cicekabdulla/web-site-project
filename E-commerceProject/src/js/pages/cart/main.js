import localstorage from '../../services/localstorage.js';
import search from '../../modules/search.js';
import hamburger from '../../modules/hamburger.js';
import totalCount from '../../modules/totalCount.js';

function cart() {
    const { getLocalStorageArr } = localstorage();
    const tbody = document.querySelector('tbody');

    if (tbody) {
        const toTable = (value) => {

            const tr = document.createElement('tr');
            tr.textContent = value;
            tr.innerHTML = `
            <td class="d-sm-flex align-items-center product-name">
                <img src=${value.img} alt="">
                <h6>${value.title}</h6>
            </td>
            <td>
                <span>$${value.price}</span>
            </td>
            <td class="product-quantity">
                <div class="quantity__wrapper">
                    <span>${value.count}</span>
                </div>
            </td>
            <td class="product-total">
                <span>$${value.totalprice}</span>
                <p class="remove">Remove</p>
            </td>
        `
            tbody.appendChild(tr);
        }

        const data = getLocalStorageArr('product');
        data.forEach(item => {
            toTable(item);
        });

        const totalPrice = () => {
            let total = 0;
            const cartTotal = document.querySelector('.cart__total span');
            for (let i = 0; i < data.length; i++) {
                total += Number(data[i].totalprice);
            }
            cartTotal.textContent = `$${total}`;
        }

        totalPrice();

        const deleteItemUI = () => {
            tbody.addEventListener('click', e => {
                e.preventDefault();

                if (e.target.classList.contains('remove')) {
                    const target = e.target.parentElement.parentElement;
                    const tr = target;
                    tr.remove();

                    const title = target.firstElementChild.lastElementChild.textContent;
                    deleteItemLS(title);

                    let total = +document.querySelector('.header__cart a span').textContent;
                    const currentTotal = total - +target.children[2].children[0].children[0].textContent;
                    document.querySelector('.header__cart a span').textContent = currentTotal;
                }
            });
        }
        deleteItemUI();

        function deleteItemLS(value) {
            let arr = getLocalStorageArr('product');
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].title == value) {
                    arr.splice(i, 1);
                }
            }

            localStorage.setItem('product', JSON.stringify(arr));
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    hamburger()
    cart()
    search()
    totalCount()
})