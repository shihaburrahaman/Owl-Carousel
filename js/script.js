$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 1000,
    dots: false,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        320:{
            items:1
        },
        375:{
            items:2
        },
        425:{
            items:3
        },
        768:{
            items:4
        },
        1000:{
            items:5
        },
        1440:{
            items:6
        }
    }
})