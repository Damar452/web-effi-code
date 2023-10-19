(function ($) {
  "use strict";

  var windowOn = $(window);

  windowOn.on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $("#header-sticky").removeClass("header__sticky");
    } else {
      $("#header-sticky").addClass("header__sticky");
    }
  });

  $(document).ready(function () {
    $(".case-slider").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 30,
      items: 1,
      navText: [
        '<button class="nav-left"><i class="fa-thin fa-angle-left"></i></button>',
        '<button class="nav-right"><i class="fa-thin fa-angle-right"></i></button>',
      ],
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
          dots: true,
        },
        767: {
          items: 1,
        },
        992: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });

    $(".testimonial-slider").owlCarousel({
      loop: true,
      autoplay: false,
      margin: 30,
      items: 4,
      nav: false,
      dots: true,
      dotsEach: 1,
      responsive: {
        0: {
          items: 1,
          margin: 10,
          nav: false,
        },
        767: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });

    $(".brand-slider").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 30,
      items: 5,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 2,
        },
        767: {
          items: 3,
        },
        992: {
          items: 5,
        },
      },
    });
  });
})(jQuery);
