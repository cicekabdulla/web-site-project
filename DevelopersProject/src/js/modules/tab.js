const tab = ({ img, drop, rotateimg }) => {
    const downImg = document.querySelectorAll(img),
        offerDrop = document.querySelectorAll(drop);

    function showTabContent(i = 0) {
        offerDrop.forEach(item => {
            item.style.display = 'none'
        })

        offerDrop[i].classList.toggle('d-block')
        downImg[i].classList.toggle(rotateimg)
    }

    downImg.forEach((item, i) => {
        item.addEventListener('click', () => {
            showTabContent(i);
        })
    })

}

export default tab;