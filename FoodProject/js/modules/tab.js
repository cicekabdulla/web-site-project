'use strict'
const tab = ({ content, title, active }) => {
    const tabContent = document.querySelectorAll(content),
        tabHeaderItem = document.querySelectorAll(title);

    function showTabContent(i = 0) {

        tabContent.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('fade')
        });

        tabContent[i].style.display = 'block';
        tabContent[i].classList.add('fade')

        tabHeaderItem.forEach(item => item.classList.remove(active))
        tabHeaderItem[i].classList.add(active);
    }

    showTabContent()

    tabHeaderItem.forEach((item, i) => {
        item.addEventListener('click', () => {
            showTabContent(i)
        })
    })
}

export default tab;