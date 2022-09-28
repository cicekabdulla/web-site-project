const hamburger = () => {

    const hamburger = document.querySelector('.hamburger'),
        hamburgerMenu = document.querySelector('.hamburger__menu'),
        hamburgerSubmenu = document.querySelector('.hamburger__submenu'),
        downIcon = document.querySelector('.mainlast_li i');

    downIcon.addEventListener('click', () => {
        hamburgerSubmenu.classList.toggle('d-block');
    });

    hamburger.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('d-block');
        hamburger.classList.toggle('hamburger__rotate');
    });

}

export default hamburger;
