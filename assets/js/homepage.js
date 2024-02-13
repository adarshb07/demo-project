$(document).ready(function(){
    var typeData = new Typed(".role", {
        strings: [
        "System Integration Solution",
        "Cyber Security Services and Solutions",
        "Network Infrastructure Solutions",
        "Professional Services",
        "Cloud and Licensing Services",
        "Virtualization Solutions",
        ],
        loop: true,
        typeSpeed: 60,
        backSpeed: 50,
        backDelay: 800,
    });
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 1250,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 750,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    $('.teams').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        // arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-circle-left" aria-hidden="true"></i></button>', 
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i></button>' ,
        responsive: [{
            breakpoint: 1250,
            settings: {
                slidesToShow: 3,
                // slidesToScroll: 3,

            }
        }, {
            breakpoint: 750,
            settings: {
                slidesToShow: 1,
                // slidesToScroll: 1,

            }
        }]
    });

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function(start, value, id) {
        var localStart = start;
        setInterval(function() {
        if (localStart < value) {
            localStart++;
            counters[id].innerHTML = localStart;
        }
        }, 40);
    }

    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }
});