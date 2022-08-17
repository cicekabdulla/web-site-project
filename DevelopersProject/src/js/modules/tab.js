const tab = () => {
    const downImg = document.querySelectorAll('.down__img');
    const offerDrop = document.querySelectorAll('.offer__drop');

    function showTabContent(i = 0) {
        offerDrop.forEach(item => {
            item.style.display = 'none'
        })
        // offerDrop[i].style.display = 'block'
        offerDrop[i].classList.toggle('d-block')
    }

    downImg.forEach((item, i) => {
        item.addEventListener('click', () => {
            showTabContent(i);
        })
    })

}

export default tab;