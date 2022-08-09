

(function () {
    const Cart = document.getElementsByClassName('Cart')[0];
    const cart = document.getElementById('cart');

    Cart.addEventListener('click', function () {
        cart.classList.toggle('show-cart')
    });
})();

//add items to the cart

(function () {

    const cartBtn = document.querySelectorAll('.addcard');

    cartBtn.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            // console.log(event.target);

            if (event.target.parentElement.classList.contains('addcard')) {
                let fullPath = event.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.src;
                let pos = fullPath.indexOf("image") + 5;
                let partPath = fullPath.slice(pos);

                const item = {};
                item.img = `image${partPath}`;
                let name = event.target.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.lastElementChild.textContent;
                item.name = name;
                let price = event.target.parentElement.parentElement.firstElementChild.textContent;
                let finalPrice = price.slice(1).trim();
                item.price = finalPrice;

                // console.log(item);
                const cartItem = document.createElement("div");
               
                cartItem.innerHTML = `
               <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
               <div class="item-text">
   
                 <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                 <span>$</span>
                 <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
               </div>
               <a href="#" id='cart-item-remove' class="cart-item-remove">
                 <i class="fas fa-trash"></i>
               </a>
               `;
                //select cart
                const cart = document.getElementById('cart');
                const total = document.querySelector('.cart-total-container');

                cart.insertBefore(cartItem, total);
                alert('item added to the cart');

            }
        });
    });
})();


  //Scrolltop
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        $("#Header").addClass("fixed");
    }
    else {
        $("#Header").removeClass("fixed");
    }
});


//Navbar
  (function () {
    $('.bar').click(function () {
        $('.Nav').show();

        $('.bar').hide();
        $('.Close').show();
    });
    $('.Close').click(function () {
        $('.Nav').hide();
        $('.bar').show();
        $('.Close').hide();
    });
})();


//Accordion
const myBtn = [...document.getElementsByClassName("Btn")];
myBtn.forEach(function (selectedButton) {
    selectedButton.addEventListener("click", function () {
        const preActive = document.querySelector(".accordion.active");
        const bg = document.querySelector(".bg");
        preActive.classList.remove("active");
        bg.classList.remove("bg");
        selectedButton.nextElementSibling.classList.add("active");
        selectedButton.classList.add("bg");
    })
})

//Header Slider
let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    current = 0;

function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}
function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}
arrowLeft.addEventListener("click", function () {
    if (current == 0) {
        current = sliderImages.length;
    }
    slideLeft();
})
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}
arrowRight.addEventListener("click", function () {
    if (current == sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
})

startSlide();


AOS.init();





