'use strict'

function calc() {
    const result = document.querySelector('.calculating__result span');

    let height, weight, age, gender, ratio;

    function getCalc() {
        if (!height || !weight || !age || !ratio) {
            result.textContent = '____';
            return
        }

        if (gender === 'male') {
            result.textContent = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
        } else {
            result.textContent = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)
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
            });

        });
    }

    getStaticInformation('#gender', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');
}

export default calc