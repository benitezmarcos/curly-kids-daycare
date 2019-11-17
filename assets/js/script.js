$(document).ready(function () {

    //Slick Slider
    $('.rslides').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 2000,
        speed: 4000,
        dots: false,
        prevArrow: false,
        nextArrow: false
    });

    //Magnific Popup
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
    
        gallery:{
          enabled:true
        }
        // other options
      });

});