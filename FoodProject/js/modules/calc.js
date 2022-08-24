'use strict'

function calc() {
    const result = document.querySelector('.calculating__result span');

    let height, weight, age, gender = 'female', ratio = 1.2;

    function getCalc() {
        if (!height || !weight || !age || !ratio) {
            result.textContent = '____';
            return
        }

        if (gender === 'male') {
            result.textContent = ((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio).toFixed(0);
        } else {
            result.textContent = ((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio).toFixed(0);
        }
    }

    getCalc()

    function getStaticInformation(selector, activeClass) {

        const parent = document.querySelectorAll(`${selector} div`);

        parent.forEach(child => {
            child.addEventListener('click', (e) => {
                const target = e.target;
                // gender = e.target.getAttribute('data-gender')

                if (target.getAttribute('data-gender')) {
                    gender = target.getAttribute('data-gender')
                } else if (target.getAttribute('data-ratio')) {
                    ratio = target.getAttribute('data-ratio')
                }

                parent.forEach(child => child.classList.remove(activeClass));
                target.classList.add(activeClass)
                console.log(gender, ratio);

                getCalc()
            })

        })
    }

    function getDynamicInformation(selector) {
        const parent = document.querySelectorAll(`${selector} input`);

        parent.forEach(child => {
            child.addEventListener('input', (e) => {
                const target = e.target;

                switch (target.getAttribute('id')) {
                    case 'weight':
                        weight = e.target.value;
                        break;
                    case 'height':
                        height = target.value;
                        break;
                    case 'age':
                        age = target.value;
                        break;
                }

                getCalc()
            })
        })
    }

    getDynamicInformation('.calculating__choose_medium');
    getStaticInformation('#gender', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');
}

export default calc