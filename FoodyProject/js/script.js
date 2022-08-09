

$(document).ready(function () {
    
const preloader=document.getElementsByClassName("preloader")[0];
window.onload=function(){
    preloader.classList.add("del");

    setTimeout(function(){
        preloader.remove()
    },3000)
}

    $('.list').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })

    $('.Bar').click(function () {
        $(".bar_toggle").slideToggle();

    })
    $('.cancel').click(function () {
        $('.bar_toggle').slideToggle();
    })

    $(window).on('resize', function () {
        var pageWidth = $(window).width();
        if (pageWidth > 768) {
            $('.bar_toggle').hide();
        }
    })


    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('.Bottom-bg').addClass('fixed')
        } else {
            $('.Bottom-bg').removeClass('fixed');
        }
    })
    



    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
})


$('.searchInput input').focus(function () {
    $('.searchInput').css('border', '1px solid #ffaa5f')
})