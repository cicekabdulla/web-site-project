const localstorage = () => {

    const getLocalStorageArr = (title) => {
        let arr;
        if (localStorage.getItem(title) === null) {
            arr = [];
        } else {
            arr = JSON.parse(localStorage.getItem(title))
        }
        return arr;
    }

    const setLocalStorageArr = (title, body) => {
        const arr = getLocalStorageArr(title);
        arr.push(body);
        localStorage.setItem(title, JSON.stringify(arr));
    }

    const setItemLS=selectProduct=> {
        let data = getLocalStorageArr('product');
        let newData = data.find(item => item.title == selectProduct.title);
        if (!newData) {
            data.push(selectProduct);
        } else {
            newData.count++;
            newData.totalprice = selectProduct.price * newData.count;
        }

        localStorage.setItem('product', JSON.stringify(data));
    }

    return { getLocalStorageArr, setLocalStorageArr,setItemLS }
}

export default localstorage;