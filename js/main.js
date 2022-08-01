$(document).ready(function(){
    // carton owl-carousel
    $('.owl-carousel.crtn-slider').owlCarousel({
        loop:true,
        margin: 10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            450:{
                items:2
            },
            550:{
                items:3
            },
            700:{
                items:4
            },
            940:{
                items:5
            },
            1100:{
                items:6
            }
        }
    })
// upcoming-session slider
    $('.owl-carousel.upcm-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
              540:{
                items:2
            },
            770:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
    // popular-session slider
    $('.owl-carousel.plpr-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            540:{
                items:2
            },
            780:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
    // instractort-session slider
    $('.owl-carousel.istr-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            620:{
                items:3
            },
            795:{
                items:4
            },
            1000:{
                items:4
            }
        }
    })
     // testimonial-session slider
     $('.owl-carousel.tstl-slider').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })
  });