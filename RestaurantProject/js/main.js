$(window).scroll(function () {
    if ($(window).scrollTop() > 125) {
        $("#Header").addClass("fixed")
        $(".Top-bar").addClass("Block")
    }
    else {
        $("#Header").removeClass("fixed");
        $(".Top-bar").removeClass("Block");
    }
})


$(document).ready(function () {
    $('.DIV').click(function () {
        $('html,body').animate({ scrollTop: 500 }, 1000);
        return false;
    });
});

$('.Slick-Slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


const preloader = document.getElementsByClassName("preloader")[0];
window.onload = function () {
    preloader.classList.add("del");

    setTimeout(function () {
        preloader.remove()
    }, 4000);
}


AOS.init();

var modal = document.getElementsByClassName("modal")[0];
var image = document.getElementsByClassName("Images")[0];
var close = document.getElementsByClassName("Close")[0];

image.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}

var image1=document.getElementsByClassName("Images1")[0];
var modal1=document.getElementsByClassName("modal1")[0];
var close1=document.getElementsByClassName("Close1")[0];

image1.onclick=function(){
    modal1.style.display="block"
}
close1.onclick=function(){
    modal1.style.display="none"
}

var image2=document.getElementsByClassName("Images2")[0];
var modal2=document.getElementsByClassName("modal2")[0];
var close2=document.getElementsByClassName("Close2")[0];

image2.onclick=function(){
    modal2.style.display="block"
}
close2.onclick=function(){
    modal2.style.display="none"
}

var image3=document.getElementsByClassName("Images3")[0];
var modal3=document.getElementsByClassName("modal3")[0];
var close3=document.getElementsByClassName("Close3")[0];

image3.onclick=function(){
    modal3.style.display="block"
}
close3.onclick=function(){
    modal3.style.display="none"
}

var image4=document.getElementsByClassName("Images4")[0];
var modal4=document.getElementsByClassName("modal4")[0];
var close4=document.getElementsByClassName("Close4")[0];

image4.onclick=function(){
    modal4.style.display="block"
}
close4.onclick=function(){
    modal4.style.display="none"
}


var image5=document.getElementsByClassName("Images5")[0];
var modal5=document.getElementsByClassName("modal5")[0];
var close5=document.getElementsByClassName("Close5")[0];

image5.onclick=function(){
    modal5.style.display="block"
}
close5.onclick=function(){
    modal5.style.display="none"
}




