import hamburger from '../../modules/hamburger.js';
import search from '../../modules/search.js';
import totalCount from '../../modules/totalCount.js';

const counterNumber = () => {
    const numbers = document.querySelectorAll('.num');

    numbers.forEach((number) => {
        let startValue = 0;
        let endValue = number.getAttribute("data-value");
        // console.log(endValue);
        let counter = setInterval(function () {
            startValue += 1;
            number.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter)
            }
        }, 10)
    })
}

window.addEventListener('DOMContentLoaded', () => {
    hamburger()
    search()
    totalCount()
    counterNumber()
})