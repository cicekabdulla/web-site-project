function burger({ burgerSelector, navbarUlSelector }) {
    const callElem = (selector) => document.querySelector(selector),
        burger = callElem(burgerSelector),
        navbarUl = callElem(navbarUlSelector)

    burger.addEventListener('click', () => {
        navbarUl.classList.toggle('d-flex');
        
    })
}

export default burger;