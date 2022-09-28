'use strict'

export default function tab() {
    const tabItem = document.querySelectorAll('.tab__item');
    const tabContent = document.querySelectorAll('.tab__content');

    function showContent(i = 0) {

        tabContent.forEach(item => {
            item.style.display = 'none';
        });

        tabContent[i].style.display = 'block';

        tabItem.forEach(item => item.classList.remove('tab__item-active'));
        tabItem[i].classList.add('tab__item-active');
    }

    showContent()

    tabItem.forEach((item, i) => {
        item.addEventListener('click', () => {
            showContent(i)
        });
    });
}